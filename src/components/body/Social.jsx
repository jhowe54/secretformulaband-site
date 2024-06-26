import React from "react";
import { FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="w-full">
      <h2 id="social" className="text-5xl my-2">
        Social Media
      </h2>
      <div className="flex md:flex-row md:wrap-none justify-center md:gap-12 gap-6 md:p-12 p-6">
        <div className=" flex flex-col items-center">
          <a
            id="insta"
            href="https://www.instagram.com/secretformulaband/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram id="insta-icon" size={70} />
          </a>
        </div>
        <div className=" flex flex-col items-center">
          <a
            id="facebook"
            href="https://www.facebook.com/SecretFormulaBand"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook id="insta-icon" size={70} />
          </a>
        </div>

        {
          <div className=" flex flex-col items-center">
            <a
              id="spotify"
              href="https://open.spotify.com/artist/1Inr5ZqHEMGQ4fhrK91QMs"
              target="_blank"
              rel="noreferrer"
            >
              <FaSpotify id="insta-icon" size={70} />
            </a>
          </div>
        }
      </div>
      <div className="flex flex-col">
        <a href="mailto:secretformulaband@gmail.com">
        email:{" "}
        <span className="text-blue-300 text-sm">
          secretformulaband@gmail.com
        </span>
      </a>
      <Link to={"/epk"} title="presskit" className=" md:p-4 p-2 text-blue-300">
        Press Kit
      </Link>
      </div>
      
    </div>
  );
}

export default Social;
