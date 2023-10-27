import React from "react";
import flag from "../assets/ro.png";

const logo2A = "https://2afarm.ro/wp-content/uploads/2018/10/logo.svg";

const navbarLinks = [
  {
    name: "ACASĂ",
    href: "/",
  },
  {
    name: "DESPRE NOI",
    href: "/",
  },
  {
    name: "CONTACT",
    href: "/",
  },
];

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center font-semibold top-0 z-50 h-14 fixed w-full bg-white pl-10 border-b border-gray-100">
      <a href="/">
        <img src={logo2A} width={110} alt="2Afarm" />
      </a>

      <div>
        <ul className="flex flex-row">
          {navbarLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className=" text-gray-400 px-3 py-5 mx-2 hover:text-primary-color ease-out duration-300"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <a
          href="/"
          className="bg-primary-color bg-opacity-20 text-secondary-color px-3 py-4"
        >
          COMENZI
        </a>

        <a href="/" className="px-3 ">
          <img src={flag} alt="flag" className="w-7 h-7 rounded-full" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
