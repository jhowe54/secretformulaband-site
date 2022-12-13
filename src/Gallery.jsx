import { useEffect, useState } from "react";

function Gallery() {
  return (
    <>
      <h2 className="text-5xl mb-4">Gallery</h2>
      <div className="accordion-container w-full">
        <div id="acc-img-1" className="accordion-img"></div>
        <div id="acc-img-2" className="accordion-img"></div>
        <div id="acc-img-3" className="accordion-img"></div>
        <div id="acc-img-4" className="accordion-img"></div>
        <div id="acc-img-5" className="accordion-img"></div>
      </div>
      <iframe
        className="my-4"
        id="video"
        src="https://www.youtube.com/embed/KJto3mxMruQ"
        title="Secret Formula Band - Charlotte, NC"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Gallery;
