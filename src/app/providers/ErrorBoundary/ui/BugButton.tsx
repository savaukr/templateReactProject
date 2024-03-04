import React, {useEffect, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BugButton.module.scss';
import Button from 'shared/ui/Button/Button';

type BugButtonProps = {
	className?: string;
};

const BugButton = ({className}: BugButtonProps) => {
	const [error, setError] = useState(false);
	const onThrowError = () => {
		setError(true);
	};

	useEffect(() => {
		if (error) {
			console.log('ERROR');
			throw new Error();
		}
	}, [error]);

	return (
		<Button onClick={onThrowError} className={classNames(cls.BugButton, {}, className ? [className] : [])}>
            throw error
		</Button>
	);
};

export default BugButton;
