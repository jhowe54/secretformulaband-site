import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="w-full mx-auto">
      <nav id="navbar" className="w-full">
        <div className="w-full md:p-6 p-2 flex flex-col md:flex-row items-center content-center justify-evenly   md:justify-between md:flex-nowrap text-lg text-white">
          <div className="md:block hidden flex-0">
            <h1 className="text-2xl">Secret Formula Band</h1>
          </div>
          <div className="flex flex-1 flex-col md:flex-row w-full  justify-end items-center">
            <Link to={"/"} title="Home" className="md:p-4 p-2">
              Home
            </Link>
            <a
              href={"/#media"}
              title="View our photos and videos"
              className="md:p-4 p-2"
            >
              Media
            </a>
            <a
              href={"/#shows"}
              title="See our upcoming shows"
              className=" md:p-4 p-2"
            >
              Upcoming Shows
            </a>
            <Link
              to={"/bookings"}
              title="Book a show with us"
              className=" md:p-4 p-2"
            >
              Book a Show
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
