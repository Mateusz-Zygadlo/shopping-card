import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <h1>shopping-card-project</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Shop</Link></li>
                </ul>
                <div className="navbar-shopping-card">
                    <Link to='/shopping-card'>
                        <span className="material-icons shopping-card">
                            shopping_cart
                        </span>
                    </Link>
                    <div className="count">{props.ordersNumber}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;