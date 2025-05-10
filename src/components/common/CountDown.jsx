import { IMG_FIRE } from "../../contants/images";

function CountDown({ amount, stock }) {
  return (
    <div>
      <p
        style={{ backgroundImage: `url(${IMG_FIRE})` }}
        className="bg-no-repeat bg-left bg-[length:25px] pl-8 uppercase my-5 text-red-500 text-base font-semibold tracking-[1px]"
      >
        Hurry! Only{" "}
        <span className="font-semibold text-lg text-red-600">{stock}</span> Left
        in stock
      </p>
      <div className="relative w-full h-2.5 bg-gray-300">
        <span
          style={{ width: stock + "%" }}
          className="absolute z-10 bg-red-500 left-0 top-0 h-full"
        />
      </div>
    </div>
  );
}
export { CountDown };
