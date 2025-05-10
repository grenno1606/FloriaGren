import { GoXCircleFill } from "react-icons/go";
import { Link } from "react-router";
import { Button } from "../buttons/Button";

function ProductWishlist({ img, name, price }) {
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
        <li className="text-xs text-black md:hidden">Product Price</li>
        <li className="text-[14px] text-gray-500 md:w-full md:flex md:justify-center">
          {price}
        </li>
      </ul>
      <ul className="flex justify-between md:w-1/3 md:items-center">
        <li className="text-xs text-black md:hidden">Action</li>
        <li className="md:w-full md:flex md:justify-center">
          <Button className={"md:w-3/4"}>ADD TO CART</Button>
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
export { ProductWishlist };
