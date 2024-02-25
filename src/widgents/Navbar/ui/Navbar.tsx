import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Navbar.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import {AppLinkTheme} from 'shared/ui/AppLink/AppLink';

type NavbarProps = {
	className?: string;
};

// const LangComponent = () => {
//   const { t, i18n } = useTranslation();
//   const toggleLang = () => {
//     i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
//   };
//   return <button onClick={toggleLang}>{t("Зміна мови")}</button>;
// };s

export const Navbar = ({className}: NavbarProps) => {
	const {t, i18n} = useTranslation();
	return (
		<div className={classNames(cls.navbar, {}, [className ? className : ''])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					{t('Головна сторінка')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					{t('Про сайт')}
				</AppLink>
			</div>
		</div>
	);
};
