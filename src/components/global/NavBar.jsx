import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [sidebarIsExpanded, setSidebarIsExpanded] = useState(false);

  return (
    <header className="w-full mx-auto">
      <nav id="navbar" className="w-full">
        <div className="w-full md:p-6 p-2 flex flex-col md:flex-row items-center content-center justify-evenly   md:justify-between md:flex-nowrap text-lg text-white">
          <div className="text-xl flex flex-1 flex-row w-full  md:justify-end justify-evenly items-center">
            <Link to={"/"} title="Home" className="md:p-4 p-2">
              Home
            </Link>
            {/*
            <a
              href={"/media"}
              title="View our photos and videos"
              className="md:p-4 p-2"
            >
              Media
  </a> */}
            <a
              href={"/#shows"}
              title="See our upcoming shows"
              className=" md:p-4 p-2"
            >
              Shows
            </a>
            <Link
              to={"/bookings"}
              title="Book a show with us"
              className=" md:p-4 p-2"
            >
              Bookings
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
