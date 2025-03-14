import React from "react";

import { getProductName } from "@/entities/products/getProductname";
import { IProduct } from "@/entities/products/products";
import { Heart } from "@/images/heart";

import Style from "./product-details.module.css";

export const ProductDetails = ({ product }: { product: IProduct }) => {
  if (!product) {
    return null;
  }

  const productName = getProductName(product);

  return (
    <div className={Style.modalFilling}>
      <div className={Style.imageBlock}>
        <img src={product.image} alt={productName} className={Style.image_large} />
        <div className={Style.positionHeart}>
          <Heart />
        </div>
      </div>

      <div className={Style.leftHalfofModal}>
        <div className={Style.productDescription}>
          <h3 className={Style.title}>
            {product.category} {productName}
          </h3>
          <p className={Style.price}>{product.price} ₽</p>
          <p className={Style.description}>{product.description}</p>
        </div>

        <button className={Style.toChatWithSeller}>
          <p >Перейти в чат с продавцом</p>
        </button>
      </div>
    </div>
  );
};
