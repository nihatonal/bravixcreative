"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

// Eğer plan tipi string ise bunu özelleştirebilirsin
type Plan = string | null;

interface PlanContextType {
    selectedPlan: Plan;
    setSelectedPlan: (plan: Plan) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

interface PlanProviderProps {
    children: ReactNode;
}

export const PlanProvider = ({ children }: PlanProviderProps) => {
    const [selectedPlan, setSelectedPlan] = useState<Plan>(null);

    return (
        <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = (): PlanContextType => {
    const context = useContext(PlanContext);
    if (context === undefined) {
        throw new Error("usePlan must be used within a PlanProvider");
    }
    return context;
};
