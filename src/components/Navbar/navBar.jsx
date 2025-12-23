import { Link } from "react-router";

function NavBar({cartItems}) {
    return (
        <div
            className="navBar"
        >
            <h1>Josh's Shop</h1>
            <div
                className="navLinks"
            >
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <div className="navCart">
                    <Link to="/cart">
                        <h3>Your Cart</h3>
                        <h3>{cartItems}</h3>
                    </Link>

                </div>

            </div>
            
        </div>
    )
}

export default NavBar