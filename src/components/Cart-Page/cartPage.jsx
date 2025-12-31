import CartProductTile from './Cart-Product-Tile/cartProductTile';
import { useOutletContext } from 'react-router-dom';

function CartPage() {
  const { cart, setCart } = useOutletContext();
  return (
    <div className="cartPage">
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <CartPage
          key={item.id}
          product={item}
          index={index}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default CartPage;
