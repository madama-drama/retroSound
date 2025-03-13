import React, { FC } from "react";

import { getProductName } from "@/entities/products/getProductname";
import { IProduct } from "@/entities/products/products";
// import { ActiveHeart } from "@/images/activeHeart";
import { Heart } from "@/images/heart";

import Style from "./mini-catalog-card.module.css";

interface IMiniCardProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}
export const MiniCard: FC<IMiniCardProps> = ({ product, onClick }) => {
  return (
    <>
      <div className={Style.blockMiniCard} key={product.id}>
        <button className={Style.withoutButtonStyle} onClick={() => onClick(product)}>
          <div className={Style.pictureBlock}>
            <img src={product.image} alt="" className={Style.previewImage} />
            <div className={Style.positionHeart}>
              <Heart />
            </div>
          </div>

          <div className={Style.blockWithPriceAndName}>
            <h3 className={Style.nameProduct}>{getProductName(product)}</h3>
            <p className={Style.price}>{product.price} ₽</p>
          </div>
        </button>

        <button className={Style.buttonToBacket}>в чат с продавцом</button>
      </div>
    </>
  );
};
