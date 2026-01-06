import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../src/components/Navbar/navBar';

describe('NavBar', () => {

  const product = {
    id: '1',
    title: 'Test Product',
    price: 10,
    description: 'Test description',
    image: 'test.jpg',
    rating: { rate: 4.5, count: 10 },
  };

  const cartItem = {
    product,
    amount: 1,
  };

  //test that the navBar cart indicator is accurate with atc press
  test('Nav cart product amount indicator is accurate before and after a product is added', () => {
    let cart = new Map();

    const { rerender } = render(
      //if we dont wrap links in memory router it will crash
      <MemoryRouter>
        <NavBar cart={cart} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navCartItems')).toHaveTextContent('0');

    cart.set(product.id, cartItem);

    rerender(
      <MemoryRouter>
        <NavBar cart={cart} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navCartItems')).toHaveTextContent('1');
  });
});
