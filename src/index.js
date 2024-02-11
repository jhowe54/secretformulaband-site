import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bookings from "./components/pages/Bookings";
import NavBar from "./components/global/NavBar";
import Submitted from "./components/utility/Submitted";
import NotFound from "./components/errors/NotFound";
import Media from "./components/pages/Media"
import Login from "./components/admin/Login";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { inject } from "@vercel/analytics";

import Epk from "./components/pages/Epk";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/bookings" element={<Bookings />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/media" element={<Media />} />
      <Route path='/epk' element={<Epk />}/>
      <Route path='/admin' element={<Login/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
);
//this is used for analytics
inject();
