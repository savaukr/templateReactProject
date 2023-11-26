import React from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.menuLink} to={"/"}>
          Main page
        </AppLink>
        <AppLink className={cls.menuLink} to={"/about"}>
          About us
        </AppLink>
      </div>
    </div>
  );
};
