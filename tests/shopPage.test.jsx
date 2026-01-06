import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';

//mock what comes back from react router dom by mocking the whole thing
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import ShopPage from '../src/components/Shop-page/shopPage';

//test that product tiles are displaying accurately
describe('ShopPage', () => {
  test('dom is rendering products correctly', () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Product 1',
        image: 'img1.jpg',
        rating: { rate: 5, count: 250 },
      },
      {
        id: 2,
        title: 'Product 2',
        image: 'img2.jpg',
        rating: { rate: 5, count: 250 },
      },
    ];

    const mockSetProducts = vi.fn();
    const mockSetCart = vi.fn();
    const mockCart = new Map();

    useOutletContext.mockReturnValue({
      products: mockProducts,
      setProducts: mockSetProducts,
      cart: mockCart,
      setCart: mockSetCart,
    });

    render(<ShopPage />);

    const tiles = screen.getAllByTestId('product-tile');

    expect(tiles).toHaveLength(2);
  });
});
