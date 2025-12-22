import { Link } from "react-router";

function NavBar() {
    return (
        <div
            className="navBar"
        >
            <h1>Josh's Shop</h1>
            <div
                className="navLinks"
            >
                <Link to="/">Home</Link>
                <Link to="/shop">Home</Link>
                <Link to="/shop">Home</Link>
            </div>
            
        </div>
    )
}