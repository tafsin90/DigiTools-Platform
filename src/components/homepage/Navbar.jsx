import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { gradients } from "../../styles";

function Navbar({cartItems}) {
  return (
      <div className="navbar bg-base-100 shadow-sm px-[10%] py-4">
        <div className="hover:cursor-pointer navbar-start">
          <a className={`text-4xl font-bold ${gradients.primary} bg-clip-text text-transparent`}>DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 items-center relative">
          {
            cartItems.length > 0 ? <p className="absolute right-53 bottom-5 bg-red-500 rounded-full h-5 w-5 text-white text-sm flex justify-center items-center">{cartItems.length}</p> : ""
          }
          <IoCartOutline className="text-2xl hover:cursor-pointer"></IoCartOutline>
          <p className="text-xl hover:cursor-pointer">Login</p>
          <a className={`btn rounded-full text-lg p-5 ${gradients.primary} text-white`}>Get Started</a>
        </div>
      </div>
  );
}

export default Navbar;
