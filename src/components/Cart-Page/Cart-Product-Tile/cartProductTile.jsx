import { useOutletContext } from 'react-router';

function CartProductTile({ cartItem, index }) {
//   const { setCart } = useOutletContext();

  return (
    <div className="cartProductTile" id={index}>
      <img src={cartItem.image} alt={cartItem.title} />
      <div className="productTitlePrice">
        <h2>{cartItem.title}</h2>
        <h3>${cartItem.price}</h3>
      </div>
      <input type="number" defaultValue={cartItem.quantity} />
    </div>
  );
}

export default CartProductTile;
