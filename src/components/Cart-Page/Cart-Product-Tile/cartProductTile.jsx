import { useOutletContext } from 'react-router';

function CartProductTile({ cartItem, key  }) {

  return (
    <div className="cartProductTile" id={key}>
      <img src={cartItem.product.image} alt={cartItem.product.title} />
      <div className="productTitlePrice">
        <h2>{cartItem.product.title}</h2>
        <h3>${cartItem.product.price}</h3>
      </div>
      <h3>Amount in Cart:</h3>
      <input type="number" defaultValue={cartItem.amount} />
    </div>
  );
}

export default CartProductTile;
