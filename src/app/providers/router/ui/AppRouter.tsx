import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

// import {MainPage} from from "pages/MainPage";
// import {  AboutPage } from "pages/AboutPage/index";

// import { AboutPageAsync } from "pages/AboutPage/index";
// import { MainPageAsync } from "pages/MainPage";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path={"/about"} element={<AboutPageAsync />} />
        <Route path={"/"} element={<MainPageAsync />} /> */}
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
