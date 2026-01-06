import { describe, test, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';

//mock what comes back from react router dom by mocking the whole thing
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import ProductTile from '../src/components/Shop-page/Product-Tile/productTile';
import { act } from 'react';

describe('ProductTile', () => {
  let setCartMock;
  let cart;

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

  beforeEach(() => {
    vi.useFakeTimers();

    cart = new Map();
    setCartMock = vi.fn((newCart) => {
      cart = newCart;
      useOutletContext.mockReturnValue({ cart, setCart: setCartMock });
    });

    useOutletContext.mockReturnValue({
      cart,
      setCart: setCartMock,
    });
  });

  //test that add to cart button updates cart map and that buttons change after
  test('cart map is updating correctly from atc button and ui updating', async () => {
    const { rerender } = render(<ProductTile product={product} />);

    const atcButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    expect(atcButton).toBeInTheDocument(); //check button is there

    fireEvent.click(atcButton); //click button

    await act(async () => {
      //process the timeout for animations
      vi.advanceTimersByTime(100);
    });

    rerender(<ProductTile product={product} />); //re-render updated cart

    expect(cart.has(product.id)).toBe(true); //check cart updated
    expect(cart.get(product.id).amount).toBe(1);

    expect(
      //check ui
      screen.getByRole('button', { name: /remove from cart/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  //test that rfc button updates cart map and buttons change after
  test('cart map updating correctly after rfc button clicked and ui changes back', async () => {
    const mockSetCart = vi.fn(); //creates a mock function for passing to setCart

    const cart = new Map([[product.id, cartItem]]); // creates new cart map with fake products

    useOutletContext.mockReturnValue({
      cart,
      setCart: mockSetCart, //now when useOutletContext is called in the test it will return our fake cart and mockSetCart
    });

    const { rerender } = render(<ProductTile product={product} />);

    const rfcButton = screen.getByRole('button', {
      name: /remove from cart/i,
    });
    expect(rfcButton).toBeInTheDocument(); //check button is there

    //click button
    fireEvent.click(rfcButton);

    const updatedCart = mockSetCart.mock.calls[0][0]; //grab the map passed to mockSetCart

    expect(updatedCart.has(product.id)).toBe(false); //check product is removed

    useOutletContext.mockReturnValue({
      //update the mocked outlet context
      cart: updatedCart,
      setCart: mockSetCart,
    });

    //re-render updated cart
    rerender(<ProductTile product={product} />);

    //check ui changes back
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  //test that input form updates cart map

  test('cart map updating correctly after input amount adjusted', async () => {
    const mockSetCart = vi.fn(); //creates a mock function for passing to setCart

    const cart = new Map([[product.id, cartItem]]); // creates new cart map with fake products

    useOutletContext.mockReturnValue({
      cart,
      setCart: mockSetCart, //now when useOutletContext is called in the test it will return our fake cart and mockSetCart
    });

    render(<ProductTile product={product} />);

    const productInput = screen.getByTestId('productQuantityInput');

    expect(productInput).toBeInTheDocument(); //check button is there

    fireEvent.change(productInput, { target: { value: '3' } }); //make the fake input change to value 3

    const updatedCart = mockSetCart.mock.calls[0][0]; //grab the map passed to mockSetCart

    expect(updatedCart).toBeInstanceOf(Map); //check it is a map

    expect(updatedCart.get(product.id).amount).toBe('3'); //check amount was updated to 3
  });
});
