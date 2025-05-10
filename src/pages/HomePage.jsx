import { Blog } from "../components/blogs/Blog";
import { TitleBlog } from "../components/blogs/TitleBlog";
import { Button } from "../components/buttons/Button";
import { Banner } from "../components/common/Banner";
import { Slideshow } from "../components/common/Slideshow";
import { TitleSection } from "../components/common/TitleSection";
import { TitleWidget } from "../components/common/TitleWidget";
import { ProductCart } from "../components/products/ProductCart";
import { ProductHorizontal } from "../components/products/ProductHorizontal";
import { ProductItem } from "../components/products/ProductItem";
import { ProductWishlist } from "../components/products/ProductWishlist";
import {
  IMG_BANNER1,
  IMG_BLOG1,
  IMG_PRODUCT1,
  IMG_SLIDE1,
} from "../contants/images";

function HomePage() {
  return (
    <div>
      {/* <Button variant="outline">Shop now</Button> */}
      {/* <Banner
        img={IMG_BANNER1}
        subtitle={"GERMANY TULIP"}
        title={"Big Sale 30% Off"}
        buttonName={"View All Collection"}
      /> */}
      {/* <ProductItem
        img={IMG_PRODUCT1}
        salePercent={"-52%"}
        name={"Angel Centerpiece"}
        priceOld={"$54.00"}
        price={"$26.00"}
      /> */}
      {/* <ProductHorizontal
        imgProduct={IMG_PRODUCT1}
        name={"Sapphire Skies Bouquet"}
        price={"$52.00"}
      />
       */}
      {/* <Blog
        title={"Flowers To Give This Wedding's Day"}
        img={IMG_BLOG1}
        day={"23"}
        month={"AUG"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente hic
        labore sed ullam. Eos voluptatem repellat consectetur rem iusto.
      </Blog> */}
      {/* <Slideshow
        image={IMG_SLIDE1}
        title_small={"Welcome Floria"}
        title_big={"Beautiful Flowers Gift"}
        description={"10% Off Your First Order"}
        className={"text-center left-1/2 -translate-x-1/2 w-full"}
        // classNameTTSmall={twMerge(value === 3 && "upToDown")}
        // classNameTTBig={twMerge(value === 3 && "scale")}
        // classNameDescription={twMerge(value === 3 && "leftToRight")}
        // classNameButton={twMerge(value === 3 && "rightToLeft")}
      ></Slideshow> */}
      {/* <TitleSection>BEST SELLER</TitleSection> */}
      {/* <TitleWidget>Featured Products</TitleWidget> */}
      {/* <TitleBlog
        img={IMG_BLOG1}
        day={"23"}
        month={"August"}
        year={"2025"}
        title={"Where Do Tulips Come From?"}
        commentCount={"0"}
        author={"Phan Thuý"}
      ></TitleBlog> */}
      {/* <ProductWishlist
        img={IMG_PRODUCT1}
        name={"Angel Centerpiece"}
        price={"$34.00"}
      ></ProductWishlist> */}
      <ProductCart
        img={IMG_PRODUCT1}
        name={"Baby First Block"}
        price={"$138.00"}
      ></ProductCart>
    </div>
  );
}
export { HomePage };
