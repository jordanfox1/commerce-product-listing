import { Product } from '../../types/product.interface';
import { JSX, useState } from 'react';
import { filterProductList } from './filterBar.helper';

interface FilterBarProps {
  unfilteredProductList: Product[],
  onSelectedFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar = ({ unfilteredProductList, onSelectedFilterChange }: FilterBarProps): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedFilter(selectedOption);

    // Filter the product list based on the selected option
    const filteredProductList = filterProductList(selectedOption, unfilteredProductList);

    // pass the filtered products to the parent component
    onSelectedFilterChange(filteredProductList);
    console.log(filteredProductList)
  };

  return (
    <section className="filter-bar-container">
      <select name="filter-dropdown" className="filter-dropdown" onChange={handleFilterChange}>
        <option value="all-option">All</option>
        <option value="name-option">Name</option>
        <option value="price-option">Price</option>
        <option value="type-option">Type</option>
        <option value="on-sale-option">On Sale Now</option>
      </select>
    </section>
  );
};