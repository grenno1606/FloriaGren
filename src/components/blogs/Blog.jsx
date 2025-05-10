import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";

function Blog({ children, title, img, day, month, isContent = true }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div
        className={twMerge(
          "relative group overflow-hidden",
          isContent &&
            "hover:after:bg-white/40 after:absolute after:inset-0 after:z-[1] after:transition after:duration-300"
        )}
      >
        <img
          src={img}
          alt="img_blog"
          className="w-full group-hover:scale-110 transition duration-300"
        />
        <div
          className={twMerge(
            "absolute top-4 flex flex-col left-4 justify-center items-center bg-white shadow-light w-[68px] h-[68px] text-black font-semibold text-center uppercase rounded-full",
            isContent && "rounded-none"
          )}
        >
          <p className="text-[14px]">{day}</p>
          <span className="bg-black w-7 h-[1px] block mt-1 mx-auto"></span>
          <p className="text-[10px] pt-1 tracking-[3px] uppercase text-center font-semibold">
            {month}
          </p>
        </div>
      </div>
      <div className="text-center px-7">
        <span className="text-[16px] font-semibold leading-[24px] text-gray-700 uppercase hover:text-pink-dark hover:cursor-pointer">
          NEWS
        </span>
        <br />
        <div className="relative text-[22px] inline-block text-black font-semibold pb-[15px] mb-[15px]">
          <Link
            to=""
            className="pt-1 hover:text-pink-dark hover:cursor-pointer"
          >
            {title}
          </Link>
          <span
            className={twMerge(
              "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[50px] bg-gray-300",
              isContent && "bg-pink-dark"
            )}
          ></span>
        </div>
        <p
          className={twMerge(
            "text-base font-normal text-gray-700",
            children && "mb-3"
          )}
        >
          {children}
        </p>
        <div
          className={twMerge(
            "pb-1 inline-block text-[14px] font-semibold border-b-2 border-b-black cursor-pointer hover:text-pink-dark",
            isContent && "hidden"
          )}
        >
          <Button variant="ghost">Read more</Button>
        </div>
      </div>
    </div>
  );
}
export { Blog };
