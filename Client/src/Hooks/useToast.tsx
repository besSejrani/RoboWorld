// React-Toastify
import { toast } from "react-toastify";

// =================================================================

interface ToastProps {
  message: string;
  color?: "#ff0000" | "#00ff00" | "var(--mainBlue)";
  theme: "light" | "dark";
}

const useToast = (options: ToastProps) => {
  toast(`${options.message}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    progressStyle: { background: `${options.color}` },
    theme: options.theme,
  });
};

export default useToast;
