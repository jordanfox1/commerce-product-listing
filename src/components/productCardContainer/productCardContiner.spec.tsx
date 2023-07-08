import { cleanup, render, screen } from '@testing-library/react';
import { ProductCardContainer } from './productCardContainer';
import { describe, it, expect, beforeEach } from 'vitest';
import { Product } from '../../types/product.interface';

describe('ProductCardContainer', () => {
  beforeEach(() => {
    cleanup(); // Clear the DOM before each test
  });
  const productList: Product[] = [
    {
      index: 0,
      isSale: true,
      price: "$14.99",
      productImage: "Product_2.jpeg",
      productName: "Victoria Bitter 4x6x375ml",
      type: "Beer",
    },
    {
      index: 1,
      isSale: false,
      price: "$24.99",
      productImage: "Product_3.jpeg",
      productName: "Kirin Megumi 4x6x330ml",
      type: "Beer",
    },
    {
      index: 2,
      isSale: true,
      price: "$4.99",
      productImage: "Product_4.jpeg",
      productName: "Panhead CH Johnny Octane Can",
      type: "Beer",
    },
    {
      index: 3,
      isSale: false,
      price: "$25.99",
      productImage: "Product_5.jpeg",
      productName: "Aquila Spark SauvB Bottle",
      type: "Wine",
    },
  ];

  it('Should render the list of products to the DOM', () => {
    render(<ProductCardContainer productList={productList} />);

    productList.forEach((product) => {
      const productNameElement = screen.getByText(product.productName);
      const priceElement = screen.getByText(product.price);

      expect(productNameElement).toBeTruthy();
      expect(priceElement).toBeTruthy();
    });
  });

  it('Should render the correct number of products based on the input list', () => {
    render(<ProductCardContainer productList={productList} />);
    const productCards = screen.getAllByRole('product-card');
    expect(productCards.length).toBe(productList.length);
  });
});
