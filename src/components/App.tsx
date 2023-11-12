import React, { Suspense } from "react";
import { Counter } from "./Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
// import AboutPage from "../pages/AboutPage/AboutPage";
// import MainPage from "../pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPageAsync";

const App = () => {
  return (
    <div className="app">
      {/* This is app component
      <Counter /> */}
      <Link className="menu-link" to={"/"}>
        Main page
      </Link>
      <Link to={"/about"}>About us</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
