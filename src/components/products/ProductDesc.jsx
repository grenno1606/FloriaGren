import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";

function ProductDesc({ img, title, description, reverse = false }) {
  return (
    <div
      className={twMerge(
        "pt-10 flex flex-col md:flex-row md:flex-wrap items-center md:*:w-1/2",
        reverse && "flex-col-reverse pt-0 md:flex-row-reverse"
      )}
    >
      <div className="w-full">
        <img src={img} alt="image product" className="w-full" />
      </div>
      <div className="py-[30px] md:px-[30px]">
        <p className="text-[40px] font-light uppercase">{title}</p>
        <p className="text-[14px] text-gray-500 leading-7 mb-4 mt-2">
          {description}
        </p>
        <Button
          variant="ghost"
          className="font-bold text-black border-b-2 border-b-black text-[14px]"
        >
          Buy now
        </Button>
      </div>
    </div>
  );
}
export { ProductDesc };
