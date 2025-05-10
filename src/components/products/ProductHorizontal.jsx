import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

function ProductHorizontal({ imgProduct, name, price, divider = true }) {
  return (
    <div
      className={twMerge(
        "flex gap-5 items-center pb-5",
        divider && "border-b-1 border-solid border-gray-300 mb-5"
      )}
    >
      <Link to="" className="w-[30%] border-2 border-solid border-gray-300">
        <img src={imgProduct} alt="img_product" />
      </Link>
      <div className="flex flex-col gap-1.5 ">
        <p className="font-semibold text-base hover:text-pink-dark cursor-pointer">
          {name}
        </p>
        <p className="font-semibold text-base">{price}</p>
      </div>
    </div>
  );
}
export { ProductHorizontal };
