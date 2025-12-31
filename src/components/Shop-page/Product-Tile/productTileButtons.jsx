import { useOutletContext } from 'react-router-dom';

function DynamicButtonSection({ product }) {
  
  const {cart, setCart} = useOutletContext();
  const cartProduct = cart.get(product.id);

  return cartProduct ? (
    <input 
    type="number" 
    defaultValue={cartProduct.amount} 
    onChange={
      (e) => {
        const newCart = new Map(cart);
        newCart.set(product.id,{product, amount:e.target.value});
        setCart(newCart);
        console.log(newCart);
      }
    } />
  ) : ( 
    <button
      onClick={() => {
        const newCart = new Map(cart);
        newCart.set(product.id,{product, amount:1});
        setCart(newCart);
        console.log(newCart);
      }}
    >
      Add to Cart
    </button>
  );
}

function ProductTileButtons({ product }) {
  
  return (
    <div className="productButtons">
      <DynamicButtonSection
        product={product}
      />
    </div>
  );
}

export default ProductTileButtons;
