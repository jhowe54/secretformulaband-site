import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar" className="w-full mx-auto">
      <div className="w-full text-lg p-6 flex flex-row md:flex-nowrap flex-wrap md:justify-end items-center justify-center">
        <div className="nav-right flex flex-end ">
          <Link to={"/"} className="text-white md:p-4 p-2">
            Home
          </Link>
          <Link className="text-white md:p-4 p-2 " href="#media">
            Media
          </Link>
          <Link className="text-white md:p-4 p-2 self end" href="#shows">
            Shows
          </Link>
          <Link
            to={"/bookings"}
            className="text-white md:p-4 p-2 flex-1 self-end"
          >
            Book a Show
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
