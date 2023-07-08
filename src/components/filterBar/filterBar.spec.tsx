import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { FilterBar } from './filterBar';
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import { unfilteredProductList } from '../../data/mock/unfilteredProductList.mock';

describe('Filter Bar', () => {
    describe('When the user selects the name filter option', () => {
        it.skip('Should filter the product list by name', () => {
            const handleFilterChange = vitest.fn();
            render(<FilterBar unfilteredProductList={unfilteredProductList} onSelectedFilterChange={handleFilterChange} />);
            screen.logTestingPlaygroundURL()

            const nameOption = screen.getByRole('option', {
                name: /name/i
            })
            fireEvent.select(nameOption, { target: { value: 'name-option' } });

            expect(handleFilterChange).toHaveBeenCalledWith('name');
        });
    });
});
