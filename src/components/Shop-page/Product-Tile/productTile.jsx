import ProductTileButtons from './productTileButtons';
import './productTile.css';

function ProductTile({ product }) {
  return (
    <div className="productTile" data-testid="product-tile" id={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="productTileRightSide">
        <div className="productTitlePrice">
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
        </div>

        <div className="productDesc">
          <p>{product.description}</p>
          <p>
            Rating: {product.rating.rate}/5 - {product.rating.count}{' '}
            reviews{' '}
          </p>
        </div>

        <ProductTileButtons product={product} />
      </div>
    </div>
  );
}

export default ProductTile;
