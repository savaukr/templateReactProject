import {type RouteProps} from 'react-router-dom';
import {MainPageAsync} from 'pages/MainPage';
import {AboutPageAsync} from 'pages/AboutPage';
import {NotFoundPages} from 'pages/NotFoundPages';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	// must be last
	[AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutesPath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutesPath.about,
		element: <AboutPageAsync />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutesPath.not_found,
		element: <NotFoundPages />,
	},
};
