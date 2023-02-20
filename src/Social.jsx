import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {
  return (
    <div className="w-full">
      <h2 id="social" className="text-5xl mb-2">
        Social
      </h2>
      <div className="flex md:flex-row flex-col justify-center gap-8 p-6">
        <div className=" flex flex-col items-center">
          <a id="insta" href="https://www.instagram.com/secretformulaband/">
            <FaInstagram id="insta-icon" size={70} />
          </a>

          <a
            className="text-blue-300 mt-2"
            href="https://www.instagram.com/secretformulaband/"
          >
            @secretformulaband
          </a>
        </div>
        <div className=" flex flex-col items-center">
          <a id="facebook" href="https://www.facebook.com/SecretFormulaBand">
            <FaFacebook id="insta-icon" size={70} />
          </a>

          <a
            className="text-blue-300 mt-2"
            href="https://www.instagram.com/secretformulaband/"
          >
            @secretformulaband
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
