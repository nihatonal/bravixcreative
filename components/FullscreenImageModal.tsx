import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface FullscreenImageModalProps {
    image: string | null;
    onClose: () => void;
}

const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({ image, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
                    aria-label="Close fullscreen image"
                >
                    <X size={32} />
                </button>

                <motion.img
                    src={image}
                    alt="Fullscreen"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default FullscreenImageModal;
