import { twMerge } from "tailwind-merge";

function TitleSection({ children, className }) {
  return (
    <div className="w-full text-center">
      <div
        className={twMerge(
          "relative text-2xl font-semibold uppercase inline-block tracking-[1px] pb-2.5",
          className
        )}
      >
        {children}
        <span className="absolute w-1/2 h-0.5 bg-pink-dark left-1/2 -translate-x-1/2 bottom-0"></span>
      </div>
    </div>
  );
}
export { TitleSection };
