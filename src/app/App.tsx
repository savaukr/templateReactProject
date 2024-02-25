import React, {Suspense} from 'react';

// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import {useTheme} from './providers/ThemeProvider/ui/index';
import {Navbar} from 'widgents/Navbar';
import {AppRouter} from './providers/router';
import {Sidebar} from 'widgents/Sidebar';

// import { AboutPageAsync } from "pages/AboutPage/index";
// import { MainPageAsync } from "pages/MainPage";
// import {MainPage} from from "pages/MainPage";
// import {  AboutPage } from "pages/AboutPage/index";

import {classNames} from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme ?? ''])}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
