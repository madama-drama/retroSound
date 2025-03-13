import React, { useRef } from "react";

import { Filter } from "@/components/filter/filter";
import { getProductName } from "@/entities/products/getProductname";
import { useProductsQuery } from "@/entities/products/products";
import { ArrowTop } from "@/images/arrowTop";

import { useButtonToTop } from "./hooks/useBurrontoTop";
import { useModal } from "./hooks/useModal";
import { useSearch } from "./hooks/useSearch";

import { Modal } from "../modal/modal";

import { MiniCard } from "./mini-catalog-card/mini-catalog-card";
import { ProductDetails } from "./product-details/product-details";

import Style from "./catalog.module.css";

export const Catalog = () => {
  const { data: products, isLoading: isProductsLoading } = useProductsQuery();

  //работа с поисковой системой по каталогу
  const { searchItem, foundProduct, handleInput } = useSearch(products);

  ///обработка нажатия на кнопку
  const { visualButton, catalogRef } = useButtonToTop();
  const tofilterAndSearchBlock = useRef<HTMLDivElement>(null);

  const clickToTop = () => {
    tofilterAndSearchBlock.current?.scrollIntoView({ behavior: "smooth" });
  };

  //открытие модального окна
  const { modalProduct, onCloseModal, onOpenModal } = useModal();

  if (isProductsLoading) {
    return <div>загрузка</div>;
  }

  const productsArray = products!.map((product) => (
    <MiniCard product={product} key={product.id} onClick={onOpenModal} />
  ));

  return (
    <div className={Style.catalogBlock}>
      <div ref={tofilterAndSearchBlock} className={Style.filterAndSearchBlock}>
        <Filter />

        <div>
          <input
            className={Style.searchInCatalog}
            placeholder="Поиск по каталогу"
            type="text"
            onChange={handleInput}
            value={searchItem}
          />
          {searchItem ? (
            <div className={Style.searchResult}>
              <ul>
                {foundProduct?.map((product) => (
                  <li className={Style.searchItem} key={product.id}>
                    {getProductName(product)}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className={Style.cards} ref={catalogRef}>
        {productsArray}

        {visualButton && (
          <button className={Style.buttonToTop} onClick={clickToTop}>
            <ArrowTop />
          </button>
        )}
      </div>

      {modalProduct && (
        <Modal onClose={onCloseModal}>
          <ProductDetails product={modalProduct} />
        </Modal>
      )}
    </div>
  );
};
