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

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* This is app component
      <Counter /> */}
      <Link className="menu-link" to={"/"}>
        Main page
      </Link>
      <Link to={"/about"}>About us</Link>
      <button onClick={toggleTheme}>Change theme</button>
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
