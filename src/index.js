import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bookings from "./components/pages/Bookings";
import NavBar from "./components/global/NavBar";
import AdminScreen from "./admin/AdminScreen";
import Submitted from "./components/utility/Submitted";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { inject } from "@vercel/analytics";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/bookings" element={<Bookings />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route private exact path="/admin" element={<AdminScreen />} />
    </Routes>
  </BrowserRouter>
);
//this is used for analytics
inject();
