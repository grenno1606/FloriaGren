import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";
function SingleInput({
  type = "email",
  placeholder = "Search",
  isRed = false,
  className,
  children,
  size = "lg",
}) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-0 font-semibold bg-white text-xs rounded-[3px] border border-gray-300",
        className
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full px-6 leading-[1.5] outline-none"
      />
      <Button variant="third" size={size}>
        {children}
      </Button>
    </div>
  );
}
export { SingleInput };
