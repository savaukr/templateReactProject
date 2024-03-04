import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button/Button';

type PageErrorProps = {
	className?: string;
};

const PageError = ({className}: PageErrorProps) => {
	const {t} = useTranslation();
	const reloadPage = () => {
		location.reload();
	};

	return <div className={classNames(cls.PageError, {}, className ? [className] : [])}>
		<p>{t('Вибачте, виникла непередбачуванна помилка')}</p>
		<Button onClick={reloadPage}>{t('Оновити сторінку')}</Button>
	</div>;
};

export default PageError;
