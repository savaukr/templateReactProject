import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

// import {MainPage} from from "pages/MainPage";
// import {  AboutPage } from "pages/AboutPage/index";

// import { AboutPageAsync } from "pages/AboutPage/index";
// import { MainPageAsync } from "pages/MainPage";

const AppRouter = () => (

	<Routes>
		{/* <Route path={"/about"} element={<AboutPageAsync />} />
        <Route path={"/"} element={<MainPageAsync />} /> */}
		{Object.values(routeConfig).map(({path, element}) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader/>}>
						<div className='page-wrapper'>{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>

);

export default AppRouter;
