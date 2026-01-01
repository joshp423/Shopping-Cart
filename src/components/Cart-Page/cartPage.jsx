import CartProductTile from './Cart-Product-Tile/cartProductTile';
import { useOutletContext } from 'react-router-dom';
import './cartPage.css';

function CartPage() {
  const { cart, setCart } = useOutletContext();

  return cart.size ? (
    <div className="cartPage">
      <h1>Your Cart</h1>
      {Array.from(cart.values()).map(item => (
        <CartProductTile
          cartItem={item}
          setCart={setCart}
        />
      ))}
    </div>
  ) : (
    <div className="cartPage">
      <h1>No Items in Cart</h1>
    </div>
  );
}

export default CartPage;
