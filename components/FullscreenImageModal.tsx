import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface FullscreenImageModalProps {
  image: string | null;
  onClose: () => void;
}

const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({
  image,
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
        aria-label="Close fullscreen image"
      >
        <X size={32} />
      </button>

      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <Image
          src={image}
          alt="Fullscreen"
          fill
          className="object-contain rounded-lg shadow-lg"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
};

export default FullscreenImageModal;