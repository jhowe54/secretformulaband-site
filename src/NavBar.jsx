import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {

  const location = useLocation();
  const navigate = useNavigate();
  const path     = location.pathname;

  return (
    <nav id="navbar" className="w-full mx-auto">
      <div className="w-full text-lg p-6 flex flex-row md:flex-nowrap flex-wrap md:justify-end items-center justify-center">
        <div className="nav-right flex flex-end ">
          <Link to={"/"} className="text-white md:p-4 p-2">
            Home
          </Link>
          <a className="text-white md:p-4 p-2 " href="#media">
            Media
          </a>
          <a className="text-white md:p-4 p-2 self end" href="#shows">
            Shows
          </a>
          <Link
            to={"/bookings"}
            className="text-white md:p-4 p-2 flex-1 self-end"
            href="#TODO"
          >
            Book a Show
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
