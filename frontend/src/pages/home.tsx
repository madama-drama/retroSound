import React, { useRef } from "react";
import cx from "classnames";

import { AppHeader } from "@/components/app-header/app-header";

import { Catalog } from "../components/catalog/catalog";

import Style from "./home.module.css";

import image from "../images/vinyl-disk.png";

export const HomePage = () => {
  const toCatalog = useRef<HTMLDivElement>(null);

  const scrolltoRef = () => {
    toCatalog.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className={Style.page}>
      <AppHeader />

      <div className={Style.position}>
        <img src={image} alt="" className={Style.img} />

        <div className={Style.blockWithTitle}>
          <h1 className={cx(Style.title)}>
            ПОГРУЗИТЕСЬ
            <br />В МИР
          </h1>
          <h1 className={cx(Style.title, Style.secondHalfOfTitle)}>
            ВИНТАЖНОГО
            <br />
            ЗВУКА
          </h1>
        </div>

        <div className={Style.previewBlock}>
          <p className={Style.preview}>
            Найдите свой идеальный граммофон или пластинку. Настоящая классика, которая оживает с каждым оборотом
            пластинки.
          </p>

          <button className={Style.toCatalog} onClick={scrolltoRef}>
            В католог
          </button>
        </div>
      </div>

      <div ref={toCatalog}>
        <Catalog />
      </div>
    </div>
  );
};
