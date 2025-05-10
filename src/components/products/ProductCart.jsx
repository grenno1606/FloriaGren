import { GoXCircleFill } from "react-icons/go";
import { QuantityCart } from "../common/QuantityCart";
import { Link } from "react-router";

function ProductCart({ img, name, price }) {
  return (
    <div className="flex flex-col justify-center border border-gray-300 mb-2.5 *:p-3 md:flex-row">
      <ul className="flex justify-between md:w-5/12">
        <li className="text-xs text-black md:hidden">Product Name</li>
        <li className="flex gap-5 flex-col items-end md:w-full md:flex-row md:items-center">
          <Link to={""}>
            <img className="w-24 h-24" src={img} alt="img_product" />
          </Link>
          <Link
            to={""}
            className="text-[14px] text-black cursor-pointer hover:text-pink-dark"
          >
            {name}
          </Link>
        </li>
      </ul>
      <ul className="flex justify-between md:w-1/6 md:items-center">
        <li className="text-xs text-black md:hidden">Price</li>
        <li className="text-[14px] text-gray-500 md:w-full md:flex md:justify-center">
          {price}
        </li>
      </ul>
      <ul className="flex justify-between md:w-1/6 md:items-center">
        <li className="text-xs text-black md:hidden">Actions</li>
        <li className="md:w-full md:flex md:justify-center">
          <QuantityCart />
        </li>
      </ul>
      <ul className="flex justify-between md:w-1/6 md:items-center">
        <li className="text-xs text-black md:hidden">Sub Total</li>
        <li className="text-[14px] text-gray-500 md:w-full md:flex md:justify-center">
          {price}
        </li>
      </ul>
      <ul className="flex justify-between md:w-1/12 md:items-center">
        <li className="text-xs text-black md:hidden">Remove</li>
        <li className="md:w-full md:flex md:justify-center">
          <GoXCircleFill className="cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}
export { ProductCart };
