import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

function Button({
  children,
  className,
  onClick,
  size = "md",
  variant = "primary",
  shape = "primary",
  icon = false,
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        buttonStyles({ size, variant, shape, icon: !!icon }),
        className
      )}
    >
      {children}
    </button>
  );
}

const buttonStyles = tv({
  base: "bg-transparent text-white text-center font-semibold inline-flex justify-center items-center cursor-pointer hover:bg-pink-dark hover:text-white",

  variants: {
    size: {
      md: "text-sm py-3 px-5 tracking-[2px]",
      lg: "text-2xl p-2.5",
      sm: "text-base p-2.5",
    },

    variant: {
      primary: "bg-black",
      second: " bg-gray-300",
      third:
        "bg-pink-dark hover:bg-white border border-pink-dark hover:text-pink-dark",
      outline: "border border-gray-300 text-black font-medium tracking-normal",
      outlineGray:
        "border border-gray-300 text-gray-600 font-medium tracking-normal",
      outlineBlack:
        "border border-black text-black hover:border-pink-dark font-medium tracking-[1px]",
      ghost: "hover:bg-transparent text-black tracking-normal !p-0",
    },

    shape: {
      primary: "",
      square: "py-2 px-3.5",
      rounded: "rounded-2xl",
      circle: "rounded-full",
    },

    icon: {
      true: "!p-0",
    },
  },
  compoundVariants: [
    {
      shape: "circle",
      className: "!p-0 w-10 h-10",
    },
  ],
});

export { Button };
