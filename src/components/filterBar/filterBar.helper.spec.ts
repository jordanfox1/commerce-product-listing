import { filterProductList } from './filterBar.helper';
import { describe, it, expect } from 'vitest';
import { unfilteredProductList } from '../../data/mock/unfilteredProductList.mock';
import { expectedNameOutput } from '../../data/mock/expectedNameOutput.mock';
import { expectedPriceOutput } from '../../data/mock/expectedPriceOutput.mock';

describe('Filtering the list of products', () => {
    it('Should show all the items unfiltered when filtering by all', () => {
        expect(filterProductList('all', unfilteredProductList)).toEqual(unfilteredProductList);
    });

    it('Should order the products alphabetically when filtering by name', () => {
        expect(filterProductList('name', unfilteredProductList)).toEqual(expectedNameOutput);
    });


    it('Should order the products by price (low to high) when filtering by price', () => {
        expect(filterProductList('price', unfilteredProductList)).toEqual(expectedPriceOutput);
    });

    it('Should show only the products on sale when filtering by isSale', () => {
        const actualOutput = filterProductList('isSale', unfilteredProductList);
        const containsOnlyBeer: boolean = actualOutput.every(item => item.isSale === true);

        expect(containsOnlyBeer).toBe(true);
    });

    it('Should show only beer when filtering by beer', () => {
        const actualOutput = filterProductList('beer', unfilteredProductList);
        const containsOnlyBeer: boolean = actualOutput.every(item => item.type === 'Beer');

        expect(containsOnlyBeer).toBe(true);
    });

    it('Should show only wine when filtering by wine', () => {
        const actualOutput = filterProductList('wine', unfilteredProductList);
        const containsOnlyWine: boolean = actualOutput.every(item => item.type === 'Wine');

        expect(containsOnlyWine).toBe(true);
    });

    it('Should show only spirits when filtering by spirits', () => {
        const actualOutput = filterProductList('spirits', unfilteredProductList);
        const containsOnlySpirits = actualOutput.every(item => item.type === 'Spirits');

        expect(containsOnlySpirits).toBe(true);
    });

    it('Should show only cider when filtering by cider', () => {
        const actualOutput = filterProductList('cider', unfilteredProductList);
        const containsOnlyCider = actualOutput.every(item => item.type === 'Cider');

        expect(containsOnlyCider).toBe(true);
    });

});