import { IoChevronForwardOutline } from "react-icons/io5";
import { Button } from "../buttons/Button";

function PagiNav() {
  return (
    <div className="flex items-center justify-center pb-5 mb-8 gap-2.5">
      <Button variant="third">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline" className="py-[15px] px-4">
        <IoChevronForwardOutline />
      </Button>
    </div>
  );
}
export { PagiNav };
