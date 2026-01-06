import { useOutletContext } from 'react-router-dom';

function DynamicButtonSection({ product }) {
  const { cart, setCart } = useOutletContext();
  const cartProduct = cart.get(product.id);

  return cartProduct ? (
    <>
      <input
        data-testid="productQuantityInput"
        type="number"
        value={cartProduct.amount}
        min="1"
        onChange={(e) => {
          const valueNumber = Number(e.target.value);
          if (valueNumber === 0) {
            const newCart = new Map(cart);
            newCart.delete(product.id);
            setCart(newCart);
          } else {
            const newCart = new Map(cart);
            newCart.set(product.id, { product, amount: e.target.value });
            setCart(newCart);
          }
        }}
      />
      <button
        onClick={() => {
          const newCart = new Map(cart);
          newCart.delete(product.id);
          setCart(newCart);
        }}
        className="productRFCButton"
      >
        Remove from cart
      </button>
    </>
  ) : (
    <button
      onClick={() => {
        setTimeout(() => {
          const newCart = new Map(cart);
          newCart.set(product.id, { product, amount: 1 });
          setCart(newCart);
        }, 100);
      }}
      className="productATCButton"
    >
      Add to Cart
    </button>
  );
}

function ProductTileButtons({ product }) {
  return (
    <div className="productButtons">
      <DynamicButtonSection product={product} />
    </div>
  );
}

export default ProductTileButtons;
