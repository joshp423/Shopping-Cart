import ProductTileButtons from './productTileButtons';
import './productTile.css';

function ProductTile({ product }) {
  return (
    <div className="productTile" id={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="productTitlePrice">
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
      </div>

      <div className="productDesc">
        <p>{product.description}</p>
        <p>Rating: {product.rating.rate}/5 - {product.rating.count} reviews </p>
      </div>

      <ProductTileButtons product={product} />
    </div>
  );
}

export default ProductTile;
