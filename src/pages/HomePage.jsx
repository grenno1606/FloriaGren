import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Slideshow } from "../components/common/Slideshow";
import { Banner } from "../components/common/Banner";
import {
  IMG_BANNER1,
  IMG_BANNER2,
  IMG_BANNER3,
  IMG_BG,
  IMG_BLOG1,
  IMG_PRODUCT1,
  IMG_SLIDE1,
  IMG_SLIDE2,
  IMG_SLIDE3,
} from "../contants/images";
import { TitleSection } from "../components/common/TitleSection";
import { ProductItem } from "../components/products/ProductItem";
import { Button } from "../components/buttons/Button";
import { TitleWidget } from "../components/common/TitleWidget";
import { ProductHorizontal } from "../components/products/ProductHorizontal";
import { SingleInput } from "../components/forms/SingleInput";
import { FaPaperPlane } from "react-icons/fa";
import { Blog } from "../components/blogs/Blog";
function HomePage() {
  const [value, setValue] = useState(1);

  function prevSlide() {
    setValue((prev) => (prev === 1 ? 3 : prev - 1));
  }

  function nextSlide() {
    setValue((prev) => (prev === 3 ? 1 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 xl:mt-0 overflow-hidden">
      <div className="w-[300%] relative group">
        <div className="absolute top-1/2 left-0 right-2/3 z-10 flex justify-between -translate-y-1/2">
          <span
            onClick={prevSlide}
            className="opacity-0 w-12 h-12 bg-white shadow-bold flex justify-center items-center cursor-pointer transition duration-500 hover:bg-pink-dark group-hover:opacity-100 group-hover:translate-x-10 hover:text-white"
          >
            <MdOutlineArrowBackIos />
          </span>
          <span
            onClick={nextSlide}
            className="opacity-0 w-12 h-12 bg-white shadow-bold flex justify-center items-center cursor-pointer transition duration-500 hover:bg-pink-dark group-hover:opacity-100 group-hover:-translate-x-10 hover:text-white"
          >
            <MdOutlineArrowForwardIos />
          </span>
        </div>
        <div
          className={twMerge(
            "flex transition-transform duration-500 *:select-none",
            value === 1 && "translate-x-0",
            value === 2 && "-translate-x-1/3",
            value === 3 && "-translate-x-2/3"
          )}
        >
          <div className="w-1/3">
            <Slideshow
              image={IMG_SLIDE3}
              titleSmall="TOP TREND"
              titleBig="Beautiful Flowers Gift"
              description="10% Off Your First Order"
              className="sm:left-8 lg:left-16 xl:left-32"
              effect1={value === 1}
              effect2={value === 2}
              effect3={value === 3}
            />
          </div>
          <div className="w-1/3">
            <Slideshow
              image={IMG_SLIDE2}
              titleSmall="Welcome Floria"
              titleBig="Beautiful Flowers Gift"
              description="10% Off Your First Order"
              className="text-center left-1/2 -translate-x-1/2 w-full"
              effect1={value === 1}
              effect2={value === 2}
              effect3={value === 3}
            />
          </div>
          <div className="w-1/3">
            <Slideshow
              image={IMG_SLIDE1}
              titleSmall="Welcome Floria"
              titleBig="Beautiful Flowers Gift"
              description="10% Off Your First Order"
              className="text-center left-1/2 -translate-x-1/2 w-full"
              effect1={value === 1}
              effect2={value === 2}
              effect3={value === 3}
            />
          </div>
        </div>
      </div>

      <div className="md:flex md:px-[15px] md:gap-4 wrapper">
        <Banner
          img={IMG_BANNER1}
          subtitle="GERMANY TULIP"
          title="Big Sale 30% Off"
          buttonName="View All Collection"
        />
        <Banner
          img={IMG_BANNER2}
          subtitle="BEST FRAGNANCE"
          title="Bouquet Roses"
          buttonName="View All Collection"
        />
        <Banner
          img={IMG_BANNER3}
          subtitle="TUTI FRUITY"
          title="Impact Love"
          buttonName="View All Collection"
        />
      </div>

      <section className="mt-7 wrapper">
        <div>
          <TitleSection>BEST SELLER</TitleSection>
        </div>
        <p className="text-base font-medium pt-5 block text-center text-gray-800">
          Best Seller Product This Week!
        </p>
        <div className="flex flex-wrap mt-9 -mx-[7.5px]">
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
          <div className="w-1/2 px-[7.5px] md:w-1/3 lg:w-1/4">
            <ProductItem
              img={IMG_PRODUCT1}
              salePercent="-52%"
              name="Angel Centerpiece"
              originalPrice="$54.00"
              price="$26.00"
            />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${IMG_BG})`,
        }}
        className="py-[100px] bg-no-repeat bg-cover bg-fixed bg-center"
      >
        <div className="w-full wrapper">
          <div className="sm:w-3/4 md:w-3/5">
            <div className="text-black text-[28px] font-normal leading-8 mb-4 sm:text-[32px] lg:text-4xl xl:text-[45px]">
              Florist Boutique & Decor
            </div>
            <div className="flex items-center gap-2.5 text-base md:text-[22px] xl:text-2xl">
              <p className="font-semibold">$20.00</p>
              <span className="font-normal line-through">$50.00</span>
            </div>
            <div>Expired</div>
            <p className="text-gray-800 mb-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore commodi reiciendis officia aspernatur dolores, harum
              repudiandae atque saepe quos quas! Lorem ipsum dolor sit amet
              consectetur adipisicing.
            </p>
            <Button>SHOP NOW</Button>
          </div>
        </div>
      </section>

      <section className="py-5 mt-10 mb-8 wrapper">
        <div className="md:flex md:justify-between md:-mx-[15px] md:*:px-[15px]">
          <div>
            <div className="mb-10">
              <TitleWidget>Featured Products</TitleWidget>
            </div>
            <div className="">
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
                divider={false}
              />
            </div>
          </div>

          <div>
            <div className="mb-10">
              <TitleWidget>Featured Products</TitleWidget>
            </div>
            <div className="">
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
                divider={false}
              />
            </div>
          </div>

          <div>
            <div className="mb-10">
              <TitleWidget>Featured Products</TitleWidget>
            </div>
            <div>
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
              />
              <ProductHorizontal
                imgProduct={IMG_PRODUCT1}
                name="Sapphire Skies Bouquet"
                price="$52.00"
                divider={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 ">
        <div className="md:flex md:justify-between md:*:w-1/2 md:py-20 wrapper">
          <div>
            <TitleSection className="md:text-4xl">Get update</TitleSection>
            <p className="text-base font-normal pt-1 block text-center">
              Subscribe our newsletter and get <br />
              discount 30% off
            </p>
          </div>

          <div className="px-[30px] mt-5 mx-auto w-full max-w-xl">
            <SingleInput isRed={true} placeholder="Your email address...">
              <FaPaperPlane />
            </SingleInput>
          </div>
        </div>
      </section>

      <section className="pt-7 wrapper">
        <div>
          <TitleSection>Our Blogs</TitleSection>
        </div>
        <div className="py-12 flex justify-between items-center flex-wrap -mx-[7.5px]">
          <div className="px-[7.5px] w-full sm:w-1/2">
            <Blog
              title="Flowers To Give This Wedding's Day"
              img={IMG_BLOG1}
              day="23"
              month="AUG"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              sapiente hic labore sed ullam. Eos voluptatem repellat consectetur
              rem iusto.
            </Blog>
          </div>
          <div className="px-[7.5px] w-full sm:w-1/2">
            <Blog
              title="Flowers To Give This Wedding's Day"
              img={IMG_BLOG1}
              day="23"
              month="AUG"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              sapiente hic labore sed ullam. Eos voluptatem repellat consectetur
              rem iusto.
            </Blog>
          </div>
        </div>
      </section>
    </div>
  );
}
export { HomePage };
