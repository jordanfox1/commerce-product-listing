import { JSX, useState } from 'react';
import { ProductCardContainer } from '../components/productCardContainer/productCardContainer';
import { FilterBar } from '../components/filterBar/filterBar';
import { productList } from '../data/productList';

export const ProductsPage = (): JSX.Element => {
  const [filteredProductList, setFilteredProductList] = useState(productList);

  const handleSelectedFilterChange = (filteredProducts) => {
    setFilteredProductList(filteredProducts);
  };

  return (
    <>
      <FilterBar unfilteredProductList={productList} onSelectedFilterChange={handleSelectedFilterChange} />
      <ProductCardContainer productList={filteredProductList} />
    </>
  );
};