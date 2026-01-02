import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import './cartProductTile.css';

function CartProductTile({ cartItem  }) {

  const { cart, setCart } = useOutletContext();
  const [removing, setRemoving] = useState(false);
  const product = cartItem.product;
  return (
    <div className={`cartProductTile ${removing ? "removing" : ""}`} id={cartItem.product.id}>
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

                const valueNumber = Number(e.target.value);
                if (valueNumber === 0) {
                  const newCart = new Map(cart);
                  newCart.delete(product.id);
                  setCart(newCart);
                }
                else {
                  const newCart = new Map(cart);
                  newCart.set(product.id,{product, amount:e.target.value});
                  setCart(newCart);
                }
              }
            }              
          />
          <button
            onClick={
              () => {
                
                setRemoving(true)

                setTimeout(() => {
                  setRemoving(false);
                  const newCart = new Map(cart);
                  newCart.delete(product.id);
                  setCart(newCart);
                }, 500)
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
