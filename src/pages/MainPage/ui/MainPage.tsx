import {BugButton} from 'app/providers/ErrorBoundary';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
	const {t} = useTranslation();

	return (<div>
		<BugButton />
		<div>{t('Головна сторінка')}</div>
	</div>);
};

export default MainPage;
