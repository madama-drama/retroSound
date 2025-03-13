import { IProduct } from "./products";

export const getProductName = (product: IProduct) => {
  return product.category === "Граммофон" ? product.name : product.songerName + " " + "`" + product.songName + "`";
};
