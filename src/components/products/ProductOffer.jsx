import { AiFillCaretRight } from "react-icons/ai";

function ProductOffer() {
  return (
    <div className="border border-gray-400 py-7 px-4 mb-5 relative mt-8">
      <p className="text-green-500 text-lg font-semibold inline-block absolute left-1/6 -top-4 px-3.5 bg-white">
        Special Offer
      </p>
      <ul>
        <li className="flex items-center gap-1.5 capitalize text-green-500 ">
          <AiFillCaretRight /> In stock
        </li>
        <li className="flex items-center gap-1.5 capitalize text-green-500 ">
          <AiFillCaretRight /> free delivery available
        </li>
        <li className="flex items-center gap-1.5 capitalize text-green-500 ">
          <AiFillCaretRight /> Sale 30% off use code: dungdangghet
        </li>
      </ul>
    </div>
  );
}
export { ProductOffer };
