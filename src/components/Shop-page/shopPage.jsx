import ProductTile from './Product-Tile/productTile';
import { useOutletContext } from 'react-router-dom';
import './shopPage.css';

function ShopPage() {
  const { products } = useOutletContext();

  if (!products) return <p>Loading Products</p>;
  return (
    <div className="shopPage">
      {products.map((item) => (
        <ProductTile key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ShopPage;
