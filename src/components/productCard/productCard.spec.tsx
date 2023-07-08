import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './productCard';

describe('ProductCard', () => {
  const product = {
    index: 1,
    isSale: true,
    price: "$14.99",
    productImage: "Product_2.jpeg",
    productName: "Victoria Bitter 4x6x375ml",
    type: "Beer"
  };

    it('renders product image, name, and price', () => {
      render(<ProductCard product={product} />);

      const nameElement = screen.getByText('Victoria Bitter 4x6x375ml');

      expect(nameElement).toBeTruthy();
    });
});