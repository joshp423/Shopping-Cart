import { useOutletContext } from 'react-router';
import './cartProductTile.css';

function CartProductTile({ cartItem  }) {

  const { cart, setCart } = useOutletContext();
  const product = cartItem.product;
  return (
    <div className="cartProductTile" id={cartItem.product.id}>
      <img src={cartItem.product.image} alt={cartItem.product.title} />
      <div className='cartProductRightSide'>
        <div className="productTitlePrice">
          <h2>{cartItem.product.title}</h2>
          <h3>${cartItem.product.price}</h3>
        </div>
        <h3>Amount in Cart:</h3>
        <input 
          type="number"
          min="1"
          value={cartItem.amount} 
          onChange={
            (e) => {
                const newCart = new Map(cart);
                newCart.set(cartItem.product.id,{product, amount:e.target.value});
                setCart(newCart);
              }
          }
        />
        <button
          onClick={
            () => {
              const newCart = new Map(cart);
              newCart.delete(product.id);
              setCart(newCart);
            }
          }
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartProductTile;
