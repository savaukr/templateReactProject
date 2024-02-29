import {classNames} from 'shared/lib/classNames/classNames';
import './Loader.scss';

type LoaderProps = {
	className?: string;
};

const Loader = ({className}: LoaderProps) => (
	<div className={classNames('lds-roller', {}, [className ? className : ''])}>
		<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
	</div>
);

export default Loader;
