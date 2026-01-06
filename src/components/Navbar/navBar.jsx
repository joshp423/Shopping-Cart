import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar({ cart }) {
  let cartItems;
  if (cart) {
    cartItems = cart.size;
  }

  return (
    <div className="navBar">
      <h1>
        <Link to="/">Josh's Shop</Link>
      </h1>
      <div className="navLinks">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/shop">Shop</Link>
        </h3>
        <div className="navCart">
          <h3>
            <Link to="/cart">Your Cart</Link>
          </h3>
          <h3 id="cartItems" data-testid="navCartItems">
            {cartItems}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
