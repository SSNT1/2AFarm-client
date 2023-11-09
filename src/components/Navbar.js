import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SiteLang from "./SiteLang";
import { Link as ScrollLink } from "react-scroll";

const logo2A = "https://2afarm.ro/wp-content/uploads/2018/10/logo.svg";

function Navbar({ navbarLinks, ordersButtonText }) {
  const [showNav, setShowNav] = useState(true);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="flex flex-row justify-between items-center font-semibold top-0 z-50 h-14 fixed w-full bg-white pl-3 sm:pl-10 border-b border-gray-100">
      <a href="/">
        <img src={logo2A} width={110} alt="2Afarm" />
      </a>

      <ul className="hidden xl:flex md:flex-row ">
        {navbarLinks.map((link) => {
          return (
            <li key={link.name}>
              <ScrollLink
                to={link.href}
                className="cursor-pointer text-gray-400 px-3 py-5 mx-2 hover:text-primary-color ease-out duration-300"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
              >
                {link.name}
              </ScrollLink>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center items-center">
        {ordersButtonText && (
          <a
            target="_blank"
            rel="noreferrer"
            href="http://comenzi.2afarm.ro/"
            className="bg-primary-color bg-opacity-20 text-secondary-color px-3 py-4"
          >
            {ordersButtonText}
          </a>
        )}
        <SiteLang
          wrapperClassName="px-2 py-2 h-auto hidden xl:flex "
          dropdownClassName="flex flex-col bg-primary-color bg-opacity-80 px-2 py-2  absolute right-0 top-[54px] cursor-pointer ease-out duration-500"
        />

        <div>
          <div onClick={handleShowNav} className="xl:hidden">
            {showNav ? (
              <AiOutlineMenu
                size={45}
                className="text-primary-color cursor-pointer px-3"
              />
            ) : (
              <AiOutlineClose
                size={45}
                className="text-primary-color cursor-pointer px-3"
              />
            )}
          </div>

          <div
            className={
              !showNav
                ? "bg-primary-color bg-opacity-90 backdrop-blur-sm ease-out duration-500 fixed right-0 top-[54px] h-full w-full  "
                : "ease-out duration-500 fixed left-[-100%]"
            }
          >
            <SiteLang
              wrapperClassName="flex justify-end p-5 border-b border-gray-300"
              dropdownClassName="flex flex-row-reverse p-5 absolute right-[50px] top-0"
              dropdownImageClassName="ml-2"
            />

            <ul className="flex flex-col">
              {navbarLinks.map((link) => {
                return (
                  <li key={link.name} className="p-5 border-b border-gray-300">
                    <ScrollLink
                      onClick={handleShowNav}
                      to={link.href}
                      className=" text-gray-200  hover:text-primary-color ease-out duration-300"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
