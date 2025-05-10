import { twMerge } from "tailwind-merge";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IMG_BGPAGE1 } from "../../contants/images";

function Breadcrumb({ children, isBg = true }) {
  return (
    <div
      style={{
        backgroundImage: isBg ? `url(${IMG_BGPAGE1})` : undefined,
      }}
      className={twMerge(
        "bg-gray-100 py-2.5 px-[15px]",
        isBg &&
          "px-0 bg-transparent py-[70px] bg-no-repeat bg-cover bg-center text-center lg:py-[140px]"
      )}
    >
      <h2
        className={twMerge(
          "text-5xl font-medium text-white tracking-[1px] leading-[60px] mb-2.5 hidden",
          isBg && "block"
        )}
      >
        {children}
      </h2>
      <div>
        <span
          className={twMerge(
            "text-black text-base font-normal",
            isBg && "text-white"
          )}
        >
          <Link to="/">Home</Link>
          <IoChevronForwardOutline className="inline-block mx-1 text-sm" />
        </span>
        <span
          className={twMerge(
            "text-pink-dark text-base font-medium py-1.5",
            isBg && "text-white"
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
export { Breadcrumb };
