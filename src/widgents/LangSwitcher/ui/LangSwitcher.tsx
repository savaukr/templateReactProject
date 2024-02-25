import React from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import Button, {ThemeButton} from 'shared/ui/Button/Button';

type LangSwitcherProps = {
	className?: string;
};

const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation();
	const toggleLang = () => {
		void i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
	};

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleLang}
			className={classNames(cls.LangSwitcher, {}, [className ?? ''])}
		>
			{t('Мова')}
		</Button>
	);
};

export default LangSwitcher;
