import React from "react";
import { Counter } from "./Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      {/* This is app component
      <Counter /> */}
      <Link className="menu-link" to={"/"}>
        Main page
      </Link>
      <Link to={"/about"}>About us</Link>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
