import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar" className="w-full mx-auto">
      <div className="w-full text-lg p-6 flex flex-row md:flex-nowrap flex-wrap md:justify-end items-center justify-center">
        <div className="nav-right flex flex-end ">
          <Link to={"/"} href="#home" className="text-white md:p-4 p-2">
            Home
          </Link>
          <a className="text-white md:p-4 p-2" href="/#media">
            Media
          </a>
          <a className="text-white md:p-4 p-2" href="/#shows">
            Shows
          </a>
          <Link
            to={"/bookings"}
            className="text-white md:p-4 p-2"
          >
            Book a Show
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
