import { JSX, useState } from 'react';
import { ProductCardContainer } from '../components/productCardContainer/productCardContainer';
import { FilterBar } from '../components/filterBar/filterBar';
import { productList } from '../data/productList';
import { filterProductList } from '../components/filterBar/filterBar.helper';

export const ProductsPage = (): JSX.Element => {
    const [filteredProductList, setFilteredProductList] = useState(productList);

    const handleSelectedFilterChange = (filteredProducts) => {
        setFilteredProductList(filteredProducts);
        // Do something with the filtered products, such as updating the UI or performing further actions
    };

    return (
        <>
            <FilterBar unfilteredProductList={productList} onSelectedFilterChange={handleSelectedFilterChange} />
            <ProductCardContainer productList={filteredProductList} />
        </>
    );
};