import React, { useEffect } from "react";
import {
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  X,
} from "lucide-react";

const Alert = ({ message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Tailwind style based on type
  const styles = {
    success: "bg-green-500 border-green-600 text-white",
    error: "bg-red-500 border-red-600 text-white",
    warning: "bg-yellow-500 border-yellow-600 text-black",
    info: "bg-blue-500 border-blue-600 text-white",
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 mr-2" />,
    error: <AlertCircle className="w-5 h-5 mr-2" />,
    warning: <AlertTriangle className="w-5 h-5 mr-2" />,
    info: <Info className="w-5 h-5 mr-2" />,
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border rounded-lg shadow-lg animate-fadeIn ${styles[type]} transition-all duration-300`}
      role="alert"
    >
      <div className="flex items-center">
        {icons[type]}
        <span className="font-medium">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-3 hover:opacity-70 transition"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Alert;
