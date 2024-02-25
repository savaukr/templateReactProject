import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme, Theme} from 'app/providers/ThemeProvider/ui';
import LightIcon from 'shared/assets/icons/light-icon.svg';
import DarkIcon from 'shared/assets/icons/dark-icon.svg';
import Button from 'shared/ui/Button/Button';
// import PngIcon from "shared/assets/icons/full.png";

import cls from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
	className?: string;
};

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
			onClick={toggleTheme}
		>
			{/* <PngIcon width="30" height="30" /> */}
			{theme === Theme.LIGHT ? (
				<LightIcon className={cls.lightIcon} />
			) : (
				<DarkIcon />
			)}
		</Button>
	);
};

export default ThemeSwitcher;
