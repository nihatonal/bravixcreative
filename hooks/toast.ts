import * as React from "react"

// Toast action types
const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

// Toast action types
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// Toast action type strings union
type ActionType = typeof actionTypes[keyof typeof actionTypes]

// Toast action interfaces
interface Toast {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  // Diğer istediğin alanları ekleyebilirsin
}

interface AddToastAction {
  type: "ADD_TOAST"
  toast: Toast
}

interface UpdateToastAction {
  type: "UPDATE_TOAST"
  toast: Toast
}

interface DismissToastAction {
  type: "DISMISS_TOAST"
  toastId?: string
}

interface RemoveToastAction {
  type: "REMOVE_TOAST"
  toastId?: string
}

type Action = AddToastAction | UpdateToastAction | DismissToastAction | RemoveToastAction

interface State {
  toasts: Toast[]
}

// Counter ve ID üretici
let count = 0
function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Timeout yönetimi için Map
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Dispatch tipi (ileride tanımlanacak)
type Dispatch = (action: Action) => void

let dispatch: Dispatch

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) return

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// Reducer
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t, open: false } : t
        ),
      }
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }

    default:
      return state
  }
}

// Listener tipi
type Listener = (state: State) => void

const listeners: Listener[] = []
let memoryState: State = { toasts: [] }

// Dispatch fonksiyonunu burada atıyoruz (closure)
dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

interface ToastReturn {
  id: string
  dismiss: () => void
  update: (props: Partial<Toast>) => void
}

// Toast fonksiyonu
function toast(props: Omit<Toast, "id" | "open" | "onOpenChange">): ToastReturn {
  const id = genId()

  const update = (props: Partial<Toast>) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

// useToast hook'u
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
