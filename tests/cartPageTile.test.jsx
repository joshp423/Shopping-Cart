import { describe, test, expect, vi} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';

//mock what comes back from react router dom by mocking the whole thing
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

//test that quantity field updates update the map
describe('Cart Map', () => {
  test('CartProductTile input updates cart map', async () => {

    const { default: CartProductTile } = await import(
      '../src/components/Cart-Page/Cart-Product-Tile/cartProductTile'
    );

    const mockSetCart = vi.fn(); //creates a mock function for passing to setCart

    const product = {
      //create fake product object to look for
      id: 1,
      title: 'Test Product',
      price: 10,
      image: 'test.jpg',
    };
    
    const cartItem = { //create fake map product to match
        product,
        amount: 1,
    };

    const cart = new Map([[product.id, cartItem]]); // creates new cart map with fake products

    useOutletContext.mockReturnValue({
      cart,
      setCart: mockSetCart, //now when useOutletContext is called in the test it will return our fake cart and mockSetCart
    });

    render(<CartProductTile cartItem={cartItem} />); //render fake DOM so input field exists

    const quantityInput = screen.getByTestId('quantityInput');

    fireEvent.change(quantityInput, { target: { value: '3' } });//make the fake input change to value 3

    const updatedCart = mockSetCart.mock.calls[0][0]; //grab the map passed to mockSetCart

    expect(updatedCart).toBeInstanceOf(Map);//check it is a map

    expect(updatedCart.get(product.id).amount).toBe("3");//check amount was updated to 3
  });

  test('Remove from cart button removes item from map', async () => {

    vi.useFakeTimers();

    const { default: CartProductTile } = await import(
      '../src/components/Cart-Page/Cart-Product-Tile/cartProductTile'
    );

    const mockSetCart = vi.fn(); //creates a mock function for passing to setCart

    const product = {
      //create fake product object to remove and look for
      id: 1,
      title: 'Test Product',
      price: 10,
      image: 'test.jpg',
    };
    
    const cartItem = { //create fake map product to match
        product,
        amount: 1,
    };

    const cart = new Map([[product.id, cartItem]]); // creates new cart map with fake products

    useOutletContext.mockReturnValue({
      cart,
      setCart: mockSetCart, //now when useOutletContext is called in the test it will return our fake cart and mockSetCart
    });

    render(<CartProductTile cartItem={cartItem} />); //render fake DOM so button exists

    const removeButton = screen.getByRole('button', {name: /remove from cart/i,});

    fireEvent.click(removeButton); //click the button

    vi.advanceTimersByTime(500)//because of timer advance time

    const updatedCart = mockSetCart.mock.calls[0][0]; //grab the map passed to mockSetCart

    expect(updatedCart).toBeInstanceOf(Map);//check it is a map

    expect(updatedCart.has(product.id)).toBe(false); //check product is removed

    vi.useRealTimers();
  })
});



