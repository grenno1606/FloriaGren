import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";
function Slideshow({
  image,
  titleSmall,
  titleBig,
  description,
  className,
  effect1 = false,
  effect2 = false,
  effect3 = false,
}) {
  return (
    <div className="relative h-[450px] md:h-[500px] lg:h-[580px] xl:h-[700px] 2xl:h-[1000px]">
      <img
        className="object-cover object-center w-full h-full"
        src={image}
        alt="image slide"
      />
      <div
        className={twMerge(
          "absolute top-1/2 left-6 -translate-y-1/2 group",
          className
        )}
      >
        <p
          className={twMerge(
            "uppercase text-lg font-semibold lg:font-bold pb-4 tracking-[5px] transition",
            effect1 && "leftToRight",
            effect2 && "downToUp",
            effect3 && "upToDown"
          )}
        >
          {titleSmall}
        </p>
        <p
          className={twMerge(
            "text-3xl font-medium pb-[15px] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[100px] transition",
            effect1 && "flip",
            effect2 && "downToUp",
            effect3 && "scale"
          )}
        >
          {titleBig}
        </p>
        <p
          className={twMerge(
            "text-[19px] font-semibold pb-[15px] sm:text-2xl mb-7 md:text-2xl transition",
            effect1 && "rightToLeft",
            effect2 && "downToUp",
            effect3 && "leftToRight"
          )}
        >
          {description}
        </p>
        <Button
          className={twMerge(
            effect1 && "scaleAndMove",
            effect2 && "downToUp",
            effect3 && "rightToLeft"
          )}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
export { Slideshow };
