import {
  IoBagOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Button } from "../../components/buttons/Button";
import { IMG_LOGO } from "../../contants/images";
import { useEffect, useState } from "react";
import { Modal } from "../../components/forms/Modal";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  function showLoginForm() {
    setShowLogin(!showLogin);
  }

  function showRegisterForm() {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Modal isOpen={showLogin} onClose={setShowLogin}>
        <div className="w-full pb-5 border-b border-b-gray-650">
          <img src={IMG_LOGO} alt="image logo" className="w-3/5 mx-auto" />
        </div>
        <div className="w-full flex flex-col items-center gap-5">
          <p className="font-semibold">Great to have you back!</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-500 p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-500 p-3"
          />
          <span className="text-gray-700 font-medium">
            Forgot your password?
          </span>
        </div>
        <Button className={"w-full"}>LOG IN</Button>
        <div className="flex justify-between items-center gap-2.5 font-semibold">
          <p className="text-gray-700">Don't have an account?</p>
          <button
            onClick={showRegisterForm}
            className="cursor-pointer hover:text-pink-dark hover:border-b-pink-dark pb-[1px] border-b border-b-black"
          >
            Register now
          </button>
        </div>
      </Modal>
      <Modal isOpen={showRegister} onClose={setShowRegister}>
        <div className="w-full flex flex-col items-center gap-5">
          <p className="font-bold text-3xl mb-2.5">REGISTER</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-500 p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-500 p-3"
          />
        </div>
        <Button className="w-full">REGISTER</Button>
        <Button className="w-full" variant="second">
          Back to login
        </Button>
      </Modal>

      <div
        className={twMerge(
          "absolute top-0 left-0 right-0 z-40 bg-white xl:bg-transparent transition-all duration-300 shadow-md xl:shadow-none",
          showHeader && "fixed xl:bg-white xl:shadow-md moveHeader"
        )}
      >
        <div className="wrapper">
          <div className="flex py-[18px] relative z-[2] items-center xl:py-[25px]">
            <div className="text-black flex flex-col gap-y-1.5 xl:hidden">
              <span className="w-6 h-[2px] bg-black" />
              <span className="w-3 h-[2px] bg-black" />
              <span className="w-[18px] h-[2px] bg-black" />
            </div>
            <ul className="items-center gap-4 hidden xl:flex text-base font-bold *:px-[15px] 2xl:text-lg *:hover:text-pink-dark *:hover:cursor-pointer *:hover:underline">
              <li className="!pl-0">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/products">SHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
            </ul>
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 xl:scale-[165%] hover:cursor-pointer"
            >
              <img width={100} height={25} src={IMG_LOGO} alt="image logo" />
            </Link>
            <div className="ml-auto flex items-center gap-4 *:cursor-pointer">
              <Button icon={true} variant="ghost" size="lg">
                <IoSearchOutline />
              </Button>
              <Button
                icon={true}
                variant="ghost"
                size="lg"
                className="hidden xl:block"
                onClick={showLoginForm}
              >
                <IoPersonOutline />
              </Button>
              <Link to="/wishlist">
                <Button
                  icon={true}
                  variant="ghost"
                  size="lg"
                  className="hidden xl:block"
                >
                  <IoHeartOutline />
                </Button>
              </Link>
              <Link to="cart">
                <div className="relative">
                  <Button icon={true} variant="ghost" size="lg">
                    <IoBagOutline />
                  </Button>
                  <span className="absolute -top-2.5 -right-1 text-[14px] text-pink-dark font-semibold">
                    3
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Header };
