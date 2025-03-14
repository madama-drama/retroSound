import React from "react";

import { ArrowDown } from "@/images/arrowDown";

import Style from "./filter.module.css";

export const Filter = () => {
  return (
    <div className={Style.dropDown}>
      <button className={Style.filter}>
        <p>Фильтр</p>
        <ArrowDown />
      </button>
      <div className={Style.dropContent}>
        <input type="text" placeholder="цена от" className={Style.parameter} />
        <input type="text" placeholder="цена до" className={Style.parameter} />

        <div className={Style.dropDown_genr}>
          <button className={Style.parameter}>жанр</button>
          <div className={Style.dropContent_genr}></div>
        </div>

        <div className={Style.dropDown_color}>
          <button className={Style.parameter}>цвет</button>
          <div className={Style.dropContent_color}></div>
        </div>

        <div className={Style.dropDown_year}>
          <button className={Style.parameter}>год выпуска</button>
          <div className={Style.dropContent_year}></div>
        </div>
      </div>
    </div>
  );
};
