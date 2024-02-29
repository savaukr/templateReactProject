import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import Loader from '../Loader/Loader';

type PageLoaderProps = {
	className?: string;
};

const PageLoader = ({className}: PageLoaderProps) => (
	<div className={classNames(cls.PageLoader, {}, [className ? className : ''])}>
		<Loader/>
	</div>
);

export default PageLoader;
