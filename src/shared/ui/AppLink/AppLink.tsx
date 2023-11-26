import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
