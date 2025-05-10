import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

function Tab({ children, active = false }) {
  return (
    <div
      className={twMerge(
        "box-border px-7 py-3.5 text-gray-600 font-medium",
        active && "border-b-2 border-b-pink-dark text-black"
      )}
    >
      <Link
        href=""
        className="uppercase font-medium tracking-[1.6px] text-base "
      >
        {children}
      </Link>
    </div>
  );
}
export { Tab };
