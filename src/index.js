import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bookings from "./Bookings";
import { inject } from "@vercel/analytics";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AdminScreen from "./admin/AdminScreen";
import Submitted from "./Submitted";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <nav id="navbar" className="w-full mx-auto">
      <div className="w-full text-lg p-6 flex flex-row md:flex-nowrap flex-wrap md:justify-end justify-center">
      <Link to={"/"} className="text-white md:p-4 p-2">Home</Link>
        <a className="text-white md:p-4 p-2" href="#media">Media</a>
        <a className="text-white md:p-4 p-2" href="#shows">Shows</a>
        <Link to={"/bookings"} className="text-white md:p-4 p-2" href="#TODO">Book a Show</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/bookings" element={<Bookings />} />
      <Route path="/submitted" element={<Submitted/>} />
      <Route private exact path="/admin" element={<AdminScreen />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
inject();
