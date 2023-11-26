import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider/ui/index";
import { AboutPageAsync } from "pages/AboutPage/index";
import { MainPageAsync } from "pages/MainPage";
// import {MainPage} from from "pages/MainPage";
// import {  AboutPage } from "pages/AboutPage/index";
// import { Counter } from "./components/Counter";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* This is app component*/}
      <Link className="menu-link" to={"/"}>
        Main page
      </Link>
      <Link to={"/about"}>About us</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
