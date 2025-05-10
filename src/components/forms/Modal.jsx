import { FaXmark } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

function Modal({ isOpen, onClose, children }) {
  function setShowModalForm() {
    onClose(false);
  }
  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/30 justify-center items-center hidden",
        isOpen && "flex"
      )}
    >
      <div className="w-1/3 flex flex-col items-center gap-6 bg-white p-20 relative">
        <div
          onClick={setShowModalForm}
          className="absolute top-8 right-8 text-3xl cursor-pointer hover:text-pink-dark"
        >
          <FaXmark />
        </div>
        {children}
      </div>
    </div>
  );
}
export { Modal };
