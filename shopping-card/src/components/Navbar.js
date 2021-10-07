import '../App.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <h1>shopping-card-project</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="navbar-shopping-card">
                <span className="material-icons shopping-card">
                    shopping_cart
                </span>
                <div className="count">12</div>
            </div>
        </div>
    )
}

export default Navbar;