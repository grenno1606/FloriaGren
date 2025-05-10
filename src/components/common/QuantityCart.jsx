import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function QuantityCart() {
  const [value, setValue] = useState(1);

  function incQuantity() {
    setValue(value + 1);
  }

  function decQuantity() {
    if (value > 0) setValue(value - 1);
  }
  return (
    <div className="flex items-center w-fit border-2 border-gray-400">
      <input
        className="w-10 py-2.5 text-center text-lg text-black font-medium border-r border-r-gray-400"
        type="text"
        value={value}
      />
      <div className="flex items-center justify-center flex-col">
        <button
          onClick={incQuantity}
          className="text-xl h-1/2 px-2.5 border-b border-b-gray-400 cursor-pointer"
        >
          <IoMdArrowDropup />
        </button>
        <button
          onClick={decQuantity}
          className="text-xl h-1/2 px-2.5 cursor-pointer"
        >
          <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  );
}
export { QuantityCart };
