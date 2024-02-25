import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from 'widgents/ThemeSwitcher';
import {LangSwitcher} from 'widgents/LangSwitcher';

type SidebarProps = {
	className?: string;
};

const Sidebar = ({className}: SidebarProps) => {
	const {t, i18n} = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [
				className ?? '',
			])}
		>
			<button onClick={onToggle}>
				{collapsed ? t('Відкрити меню') : t('Закрити меню')}
			</button>
			<div className='switchers'>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
