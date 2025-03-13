import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import Style from "./app-header.module.css";

export const AppHeader = () => {
  return (
    <div className={Style.headerBlock}>
      <h1 className={Style.nameSite}>RetroSound</h1>

      <ul className={Style.list}>
        <li>
          <NavLink to="/" className={({ isActive }) => cx(Style.item, isActive ? Style.active : Style.passive)}>
            <p>каталог</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className={({ isActive }) => cx(Style.item, isActive ? Style.active : Style.passive)}>
            карта
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chats"
            className={({ isActive }) => cx(Style.item, isActive ? Style.active : Style.passive)}
          >
            чаты
          </NavLink>
        </li>
        <li>
          <NavLink to="/personalAccount" className={Style.buttonPersonalAccount}>
            личный кабинет
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
