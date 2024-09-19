import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import Contactus from "./Pages/Contactus.jsx";
import Blog from "./Pages/Blog.jsx";
import Foootball from "./Pages/Foootball.jsx";
import Baseball from "./Pages/Baseball.jsx";
import Cricket from "./Pages/Cricket.jsx";
import NewLogoArtwork from "./Pages/NewLogoArtwork.jsx";
import PhotoWall from "./Pages/PhotoWall.jsx";
import Superdesgin from "./Pages/Superdesgin.jsx";
import Tool from "./Pages/Tool.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="football" element={<Foootball />} />
      <Route path="baseball" element={<Baseball />} />
      <Route path="cricket" element={<Cricket />} />
      <Route path="New-Logo-Artwork" element={<NewLogoArtwork />} />
      <Route path="PHOTO-WALL" element={<PhotoWall />} />
      <Route path="Super-Desgin" element={<Superdesgin />} />
      <Route path="tool" element={<Tool />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
