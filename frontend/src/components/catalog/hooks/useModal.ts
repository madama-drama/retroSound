import { useState } from "react";

import { IProduct } from "@/entities/products/products";

export function useModal() {
  const [modalProduct, setModalProduct] = useState<IProduct | null>(null);

  const onCloseModal = () => {
    setModalProduct(null);
  };

  const onOpenModal = (product: IProduct) => {
    setModalProduct(product);
  };

  return { modalProduct, onCloseModal, onOpenModal };
}