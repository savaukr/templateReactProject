import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTheme } from "./theme/useTheme";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
// import MainPage from "../pages/MainPage/MainPage";
// import AboutPage from "../pages/AboutPage/AboutPage";
// import { Counter } from "./components/Counter";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
