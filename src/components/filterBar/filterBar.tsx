import { Product } from '../../types/product.interface';
import { JSX, useState } from 'react';
import { filterProductList } from './filterBar.helper';
import React from 'react';
import './filterBar.css';

interface FilterBarProps {
  unfilteredProductList: Product[],
  onSelectedFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar = ({ unfilteredProductList, onSelectedFilterChange }: FilterBarProps): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchedProductList, setSearchedProductList] = useState(unfilteredProductList);

  const handleDropdownSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedFilter(selectedOption);

    // Filter the product list based on the selected option
    const filteredProductList = filterProductList(selectedOption, unfilteredProductList);

    // pass the filtered products to the parent component
    onSelectedFilterChange(filteredProductList);
  };

  const handleSearchChange = (event) => {
    const userInput = event.target.value.toLowerCase();

    // Filter the product list based on the search value
    const searchedProducts = unfilteredProductList.filter((product) => {
      return product.productName.toLowerCase().includes(userInput);
    });
    setSearchedProductList(searchedProducts);

    // Pass the filtered products to the parent component
    onSelectedFilterChange(searchedProducts);
  };

  return (
    <section className="filter-bar-container">
      <input
        placeholder="Search..."
        onChange={handleSearchChange}
        className="search-bar"
      />
      <select name="filter-dropdown" className="filter-dropdown" onChange={handleDropdownSelectChange}>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="beer">Beer</option>
        <option value="wine">Wine</option>
        <option value="spirits">Spirits</option>
        <option value="cider">Cider</option>
        <option value="isSale">On Sale Now</option>
      </select>
    </section>
  );
};