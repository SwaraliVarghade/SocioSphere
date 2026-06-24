import { X } from "lucide-react";

const CustomDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  width="max-w-3xl",
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-white z-50 shadow-2xl
          transition-transform duration-300 ease-in-out
          w-full ${width}
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              p-2
              rounded-lg
              hover:bg-slate-100
              transition
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100vh-64px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomDrawer;