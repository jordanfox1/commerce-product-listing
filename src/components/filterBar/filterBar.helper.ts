import { Product } from "../../types/product.interface";

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

function orderProductListByName(productListToSort: Product[]) {
    return productListToSort.sort(compareProductNames);
}

function compareProductNames(a, b) {
    if (a.productName < b.productName) {
        return -1;
    }

    if (a.productName > b.productName) {
        return 1;
    }
    return 0;
}

function orderProductListByPrice(productListToSort: Product[]) {
    const sortedProductList = productListToSort.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));

        return priceA - priceB;
    });

    return sortedProductList;
}
