import { render, screen, fireEvent, cleanup, waitFor, createEvent, act, getByRole } from '@testing-library/react';
import { ProductsPage } from './productsPage';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

// TODO: these test cases can be improved by asserting that each item has expected properties rather than asserting the array length
describe('ProductsPage', () => {
  describe('renders filtered products correctly based on selected filter', () => {
    beforeEach(() => {
      cleanup();
    });
    //   screen.logTestingPlaygroundURL();

    it('should render all products when all option is selected', () => {
      render(<ProductsPage />);

      // Initially, all products should be rendered
      expect(screen.getAllByRole('product-card')).toHaveLength(8);
    });

    it('should render only beer when beer is selected', async () => {
      render(<ProductsPage />);

      const dropdown = screen.getByRole('combobox');

      userEvent.selectOptions(dropdown, 'Beer');

      const beerOption = await screen.findByRole('option', {
        name: /beer/i
      });

      userEvent.click(beerOption);

      await waitFor(() => {
        expect(screen.getAllByRole('product-card')).toHaveLength(4);
      });
    });

    it('should render only wine when wine is selected', async () => {
      render(<ProductsPage />);

      const dropdown = screen.getByRole('combobox');

      userEvent.selectOptions(dropdown, 'Wine');

      const wineOption = await screen.findByRole('option', {
        name: /wine/i
      });

      userEvent.click(wineOption);

      await waitFor(() => {
        expect(screen.getAllByRole('product-card')).toHaveLength(2);
      });
    });

    it('should render only spirits when spirits is selected', async () => {
      render(<ProductsPage />);

      const dropdown = screen.getByRole('combobox');

      userEvent.selectOptions(dropdown, 'Spirits');

      const spiritsOption = await screen.findByRole('option', {
        name: /spirits/i
      });

      userEvent.click(spiritsOption);

      await waitFor(() => {
        expect(screen.getAllByRole('product-card')).toHaveLength(1);
      });
    });

    it('should render only cider when cider is selected', async () => {
      render(<ProductsPage />);

      const dropdown = screen.getByRole('combobox');

      userEvent.selectOptions(dropdown, 'Cider');

      const ciderOption = await screen.findByRole('option', {
        name: /cider/i
      });

      await userEvent.click(ciderOption);

      await waitFor(() => {
        expect(screen.getAllByRole('product-card')).toHaveLength(1);
      });
    });

    describe('Search bar', () => {
      it('should render the items matching the user input of Pure Blonde Crate', async () => {
        render(<ProductsPage />);
        const searchBar = screen.getByRole('textbox');

        await userEvent.type(searchBar, "Pure Blonde Crate")

        await waitFor(() => {
          expect(screen.getAllByRole('product-card')).toHaveLength(1);
        });
      });

      it('should render the items matching the user input of Victoria Bitter', async () => {
        render(<ProductsPage />);
        const searchBar = screen.getByRole('textbox');

        await userEvent.type(searchBar, "Victoria Bitter")

        await waitFor(() => {
          expect(screen.getAllByRole('product-card')).toHaveLength(1);
        });
      });
    })
  });
});
