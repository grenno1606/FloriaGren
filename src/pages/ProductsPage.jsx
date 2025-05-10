import { IoChevronForwardOutline } from "react-icons/io5";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { TitleFilter } from "../components/common/TitleFilter";
import { Button } from "../components/buttons/Button";
import { PagiNav } from "../components/common/PagiNav";
import { Filter } from "../components/common/Filter";
import { ProductItem } from "../components/products/ProductItem";
import { IMG_PRODUCT1 } from "../contants/images";
import { Link } from "react-router";

function ProductsPage() {
  return (
    <div className="my-16 xl:mt-20">
      <Breadcrumb>Products</Breadcrumb>
      <div className="wrapper lg:flex lg:gap-3 mt-9">
        <div className="lg:w-1/4 py-3 pr-6">
          <TitleFilter>CATEGORIES</TitleFilter>
          <p className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
          </p>
          <TitleFilter>PRICE</TitleFilter>
          <ul className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
          </ul>
          <TitleFilter>SIZE</TitleFilter>
          <ul className="flex gap-3 items-center">
            <li>
              <Button variant="outlineBlack" shape="square">
                L
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                L
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                L
              </Button>
            </li>
          </ul>
          <TitleFilter>TAGS</TitleFilter>
          <ul className="flex items-center flex-wrap *:mr-2.5 *:mb-2.5">
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outlineBlack" shape="square">
                dff
              </Button>
            </li>
          </ul>
          <TitleFilter>BRAND</TitleFilter>
          <ul className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <li className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Floria
            </li>
          </ul>
        </div>
        <div className="lg:w-3/4">
          <Filter />
          <div className="flex flex-wrap justify-between *:w-1/2 *:px-[7.5px] -mx-[7.5px] md:*:w-1/3 xl:*:w-1/4">
            <div>
              <ProductItem
                img={IMG_PRODUCT1}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT1}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT1}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT1}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
          </div>
          <PagiNav />
        </div>
      </div>
    </div>
  );
}
export { ProductsPage };
