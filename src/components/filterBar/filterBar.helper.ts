import { Product } from "../../types/product.interface";

/**
 * Used to filter the products rendered to the screen
 * @param selectedOption - The selected filtering option.
 * @param productListToFilter - The list of products to filter.
 * @returns The filtered product list based on the selected option.
 */
export const filterProductList = (selectedOption: string, productListToFilter: Product[]): Product[] => {
  switch (selectedOption) {
  case 'all':
    return productListToFilter;
  case 'name':
    return orderProductListByName(productListToFilter);
  case 'price':
    return orderProductListByPrice(productListToFilter);
  case 'isSale':
    return productListToFilter.filter(product => product.isSale);
  default:
    return productListToFilter.filter(product => product.type.toLowerCase() === selectedOption.toLowerCase());
  }
};

/**
 * Orders the product list by product name in alphabetical order.
 * @param {Product[]} productListToSort - The product list to be sorted.
 * @returns {Product[]} A new array representing the sorted product list sorted by name.
 */
function orderProductListByName(productListToSort: Product[]) {
  const sortedProductList = [...productListToSort].sort(compareProductNames);
  return sortedProductList;
}

/**
 * Compares function to be passed to sort the names.
 * @param a - The first product for comparison.
 * @param b - The second product for comparison.
 * @returns A negative value if a should be placed before b, a positive value if a should be placed after b, or 0 if they are equal.
 */
function compareProductNames(currentProduct: Product, nextProduct: Product) {
  if (currentProduct.productName < nextProduct.productName) {
    return -1;
  }

  if (currentProduct.productName > nextProduct.productName) {
    return 1;
  }
  return 0;
}

/**
 * Orders the product list by price from low to high.
 * @param productListToSort - The product list to be sorted.
 * @returns new array representing product list sorted by price.
 */
function orderProductListByPrice(productListToSort: Product[]) {
  const sortedProductList = [...productListToSort].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    return priceA - priceB;
  });

  return sortedProductList;
}
