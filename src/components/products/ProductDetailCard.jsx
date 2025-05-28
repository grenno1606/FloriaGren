import { FaRegHeart } from "react-icons/fa6";
import { Button } from "../buttons/Button";
import { ProductOffer } from "./ProductOffer";
import { CountDown } from "../common/CountDown";
import { QuantityCart } from "../common/QuantityCart";

function ProductDetailCard({
  imgProduct,
  salePercent,
  name,
  originalPrice,
  price,
  description,
  amount,
  stock,
}) {
  return (
    <div className="mb-8 md:flex md:*:w-1/2 md:*:px-[7.5px] md:-mx-[7.5px]">
      <div>
        <img src={imgProduct} alt="IMAGE PRODUCT" className="w-full" />
      </div>
      <div>
        <div className="relative">
          <h2 className="text-2xl font-medium text-black capitalize pr-10 mt-2 md:!mt-0">
            {name}
          </h2>
          <div className="flex items-center gap-2 pb-4">
            <span className="text-base text-gray-600 font-medium line-through">
              {originalPrice}
            </span>
            <p className="text-lg text-pink-dark font-medium">{price}</p>
          </div>
          <div className="absolute top-0 right-0">
            <Button icon={true} shape="circle" variant="outline">
              <FaRegHeart />
            </Button>
          </div>
        </div>

        <div className="border-b border-b-gray-400 pb-6"></div>
        <p className="text-gray-500 font-normal pt-6 text-[14px]">
          {description}
        </p>
        <ProductOffer />
        <CountDown amount={amount} stock={stock}></CountDown>
        <ul className="flex *:font-bold *:text-base *:mr-5 my-7">
          <li>Size guide</li>
          <li>Delivery & Return</li>
          <li>Ask a Question</li>
        </ul>
        <div className="border-b border-b-gray-300 pb-3.5">
          <div className="flex justify-between gap-x-3.5">
            <QuantityCart />
            <Button className="w-full" variant="third">
              ADD TO CART
            </Button>
          </div>
          <Button className="my-3.5 w-full">BUY IT NOW</Button>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="pr-1.5 text-[15px]">Categories :</div>
          <Button variant="ghost" className="text-gray-450 mr-2.5">
            Best Seller,
          </Button>
          <Button variant="ghost" className="text-gray-450 mr-2.5">
            Best Seller,
          </Button>
          <Button variant="ghost" className="text-gray-450 mr-2.5">
            Best Seller
          </Button>
        </div>
      </div>
    </div>
  );
}
export { ProductDetailCard };
