import { describe, it, expect, beforeEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { ProductCard } from './productCard';

describe('ProductCard', () => {
  beforeEach(() => {
    cleanup(); // Clear the DOM before each test
  });
  
  const product = {
    index: 1,
    isSale: true,
    price: "14.99",
    productImage: "Product_2.jpeg",
    productName: "Victoria Bitter 4x6x375ml",
    type: "Beer"
  };

  it('Should render the product name, image and price to the DOM', () => {
    render(<ProductCard product={product} />);

    const nameElement = screen.getByText('Victoria Bitter 4x6x375ml');
    const imageElement = screen.getByAltText('A picture of the listed product');
    const priceElement = screen.getByText('14.99');

    expect(nameElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });

  it('Should render on sale sticker to the Dom if the item is on sale', () => {
    render(<ProductCard product={product} />); // on sale should be set to true for this test run

    const saleSticker = screen.getAllByText('Sale');

    expect(saleSticker).toBeTruthy();
  });
  it('Should NOT render on sale sticker to the Dom if the item is NOT on sale', () => {
    const notOnSaleProduct = {
      index: 1,
      isSale: false, // on sale should be set to false for this test run
      price: "14.99",
      productImage: "Product_2.jpeg",
      productName: "Victoria Bitter 4x6x375ml",
      type: "Beer"
    };
    render(<ProductCard product={notOnSaleProduct} />);

    const saleStickers = screen.queryAllByText('Sale');

    expect(saleStickers.length).toBe(0);
  });
});