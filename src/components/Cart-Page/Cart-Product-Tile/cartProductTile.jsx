import { useOutletContext } from 'react-router';
import './cartProductTile.css';

function CartProductTile({ cartItem  }) {

  const { cart, setCart } = useOutletContext();
  const product = cartItem.product;
  return (
    <div className="cartProductTile" id={cartItem.product.id}>
      <img src={cartItem.product.image} alt={cartItem.product.title} />
      <div className='cartProductRightSide'>
        <div className="cartProductTitlePrice">
          <h2>{cartItem.product.title}</h2>
          <h3>${cartItem.product.price}</h3>
        </div>
        <div className='cartProductEdit'>
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
                const item = document.getElementById(product.id);
                item.classList.add("removing");

                setTimeout(() => {
                  const newCart = new Map(cart);
                  newCart.delete(product.id);
                  setCart(newCart);
                }, 125);
              }
            }
            className='cartRFCButton'
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductTile;
