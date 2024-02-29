import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotFoundPages.module.scss';
import {useTranslation} from 'react-i18next';

type NotFoundPagesProps = {
	className?: string;
};

const NotFoundPages = ({className}: NotFoundPagesProps) => {
	const {t} = useTranslation();
	return (<div className={classNames(cls.NotFoundPages, {}, [className ? className : ''])}>
		{t('Сторінка не знайдена')}
	</div>
	);
};

export default NotFoundPages;

