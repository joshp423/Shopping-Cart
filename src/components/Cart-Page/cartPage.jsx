import CartProductTile from './Cart-Product-Tile/cartProductTile';
import { useOutletContext } from 'react-router-dom';

function CartPage() {
  const { cart, setCart } = useOutletContext();

  return (
    <div className="cartPage">
      <h1>Cart</h1>
      {Array.from(cart.values()).map(item => (
        <CartProductTile
          cartItem={item}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default CartPage;
