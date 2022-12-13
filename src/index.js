import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bookings from "./Bookings";
import { inject } from "@vercel/analytics";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <nav className="w-full mx-auto">
      <div className="w-full text-lg p-6 flex flex-row md:justify-end justify-center">
        <a className="text-white p-4" href="#media">Media</a>
        <a className="text-white p-4" href="#social">Social</a>
        <Link to={"/bookings"} className="text-white p-4" href="#TODO">Book a Show</Link>
      </div>
    </nav>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/bookings" element={<Bookings />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
inject();
