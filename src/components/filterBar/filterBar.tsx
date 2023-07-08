import { Product } from '../../types/product.interface';
import { JSX } from 'react';

interface FilterBarProps {
    filterOptions: {
        name?: string;
        price?: string;
        type?: string;
        isSale?: string;
    }
}

export const FilterBar = ({ filterOptions }: FilterBarProps): JSX.Element => {
  return (
    <section className="filter-bar-container">
      <select name="filter-dropdown" className="filter-dropdown">
        <option value="name-option">Name</option>
        <option value="price-option">Price</option>
        <option value="type-option">Type</option>
        <option value="on-sale-option">Currently On Sale</option>
      </select>
    </section>
  );
};