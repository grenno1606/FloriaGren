import { IoCaretForwardOutline } from "react-icons/io5";
import { Button } from "../buttons/Button";

function Banner({ img, subtitle, title, buttonName }) {
  return (
    <div className="relative py-0 mt-4 md:px-0 overflow-hidden group">
      <img
        className="bg-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
        src={img}
        alt="image banner"
      />
      <div className="absolute top-[15px] left-[30px] leading-[3.5rem] md:top-5 md:left-5">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <Button variant="ghost" size="sm">
          {" "}
          {buttonName}
          <IoCaretForwardOutline className="h-full" />
        </Button>
      </div>
    </div>
  );
}
export { Banner };
