import {
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { SingleInput } from "../../components/forms/SingleInput";
import { IMG_LOGO, IMG_PAY } from "../../contants/images";
import { TitleFooter } from "../../components/common/TitleFooter";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 text-center py-5 border-t border-t-gray-400 ">
        <div className="wrapper lg:flex lg:gap-10 w-full">
          <div>
            <div className="w-40 mx-auto md:pt-5 cursor-pointer">
              <img src={IMG_LOGO} alt="image logo" />
            </div>
            <div className="mt-5 text-[14px]">
              Subscribe our newsletter and get <br />
              discount 30% off
            </div>
            <div className="mt-5 w-full max-w-3xs mx-auto">
              <SingleInput placeholder="Your email address..." size="sm">
                <FaPaperPlane />
              </SingleInput>
            </div>
            <ul className="mt-5 inline-flex items-center gap-0.5 *:cursor-pointer *:hover:text-pink-dark">
              <li className="p-2">
                <FaTwitter />
              </li>
              <li className="p-2">
                <FaInstagram />
              </li>
              <li className="p-2">
                <FaFacebook />
              </li>
              <li className="p-2">
                <FaTiktok />
              </li>
            </ul>
          </div>

          <div className="md:flex md:justify-between md:*:grow lg:grow">
            <div className="py-5">
              <TitleFooter>Customer Care</TitleFooter>
              <ul className="text-[14px] mt-2.5 *:mb-1.5 *:cursor-pointer *:hover:text-pink-dark font-medium">
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
            <div className="py-5">
              <TitleFooter>Customer Care</TitleFooter>
              <ul className="text-[14px] mt-2.5 *:mb-1.5 *:cursor-pointer *:hover:text-pink-dark font-medium">
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
            <div className="py-5">
              <TitleFooter>Customer Care</TitleFooter>
              <ul className="text-[14px] mt-2.5 *:mb-1.5 *:cursor-pointer *:hover:text-pink-dark font-medium">
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Support Center</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-center py-5 border-t border-t-gray-400">
        <div className="wrapper lg:flex lg:justify-between">
          <p className="pb-3.5 text-[14px]">
            c copyright 2022 | FloriaStore By <span>ShopiLaunch, </span>Powered
            by Shopify.
          </p>
          <img
            className="mx-auto lg:me-0 lg:h-5"
            src={IMG_PAY}
            alt="image pay"
          />
        </div>
      </div>
    </div>
  );
}
export { Footer };
