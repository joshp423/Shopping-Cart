import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';

vi.mock(
  '../src/components/Cart-Page/Cart-Product-Tile/cartProductTile',
  () => ({
    default: ({ cartItem }) => (
      <div data-testid="cart-product-tile">{cartItem.product.title}</div>
    ),
  })
);

//mock what comes back from react router dom by mocking the whole thing
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import CartPage from '../src/components/Cart-Page/cartPage';

describe('cartPage', () => {
  //test tiles render correctly with two products in the cart
  test('dom is updating accurately from cart', () => {
    const mockCart = new Map([
      [
        1,
        {
          product: { id: 1, title: 'Product 1', image: 'img1.jpg' },
          amount: 1,
        },
      ],
      [
        2,
        {
          product: { id: 2, title: 'Product 2', image: 'img2.jpg' },
          amount: 1,
        },
      ],
    ]);

    const mockSetCart = vi.fn();

    useOutletContext.mockReturnValue({
      cart: mockCart,
      setCart: mockSetCart,
    });

    render(<CartPage />);

    // Your Cart should show because cart has products
    expect(screen.getByText('Your Cart')).toBeInTheDocument();

    // Are two tiles rendered?
    const tiles = screen.getAllByTestId('cart-product-tile');
    expect(tiles).toHaveLength(2);
  });
});
