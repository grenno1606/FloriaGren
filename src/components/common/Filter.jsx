import { IoCaretDownOutline, IoFunnelOutline } from "react-icons/io5";

function Filter() {
  return (
    <div className="py-6 flex justify-between items-center cursor-pointer">
      <div className="flex items-center gap-2 py-1.5 px-5 border-2 border-solid border-black hover:border-pink-dark hover:bg-pink-dark hover:*:text-white">
        <IoFunnelOutline className="text-[20px]" />
        <p className="font-medium text-black tracking-[1px]">Filter</p>
      </div>
      <div>
        <button className="text-gray-600 text-sm font-medium min-w-[120px] text-left border-b border-solid border-gray-450 pb-[5px] relative cursor-pointer">
          Default sorting <IoCaretDownOutline className="inline-block" />
        </button>
      </div>
    </div>
  );
}
export { Filter };
