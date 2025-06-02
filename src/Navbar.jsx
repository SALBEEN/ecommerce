import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-yellow-600/20 backdrop-blur-md z-50 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl md:text-5xl font-extrabold text-blue-400">
            ShopEase
          </div>
          <div
            className=" text-3xl md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>
          <ul className="hidden md:flex lg:flex space-x-15 text-white px-10 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="https://portfolio-iy81.vercel.app/#">Portfolio</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {open && (
          <ul className="md:hidden mt-4 flex flex-col space-y-4 text-white text-lg">
            <li className="w-full bg-slate-700 p-3 rounded-xl hover:bg-black hover:text-white hover:font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="w-full bg-slate-700 p-3 rounded-xl hover:bg-black hover:text-white hover:font-bold">
              <Link to="/product">Products</Link>
            </li>
            <li className="w-full bg-slate-700 p-3 rounded-xl hover:bg-black hover:text-white hover:font-bold">
              <Link to="/project">Projects</Link>
            </li>
            <li className="w-full bg-slate-700 p-3 rounded-xl hover:bg-black hover:text-white hover:font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
