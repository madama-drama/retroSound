import { useState } from "react";

import { getProductName } from "@/entities/products/getProductname";
import { IProduct } from "@/entities/products/products";

export function useSearch(products: IProduct[] | undefined) {
  const [searchItem, setSearchItem] = useState("");
  const [foundProduct, setFoundProduct] = useState(products);

  const handleInput = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value;

    setSearchItem(searchTerm);

    const filteredItems = products?.filter((product) => {
      const productName = getProductName(product);

      productName.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    setFoundProduct(filteredItems);
  };

  return { searchItem, foundProduct, handleInput };
}