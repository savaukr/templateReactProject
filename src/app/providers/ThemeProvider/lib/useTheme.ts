import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext} from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
type useThemeResult = {
	toggleTheme: () => void;
	theme: Theme | undefined;
};

export function useTheme(): useThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);
	const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
	const toggleTheme = () => {
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {theme, toggleTheme};
}
