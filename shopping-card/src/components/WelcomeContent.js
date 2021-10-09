import { Link } from 'react-router-dom';

const WelcomeContent = () => {
    return(
        <div className="welcome-content">
            <h1>Welcome to my shop</h1>
            <button><Link to='/products'>Shop</Link></button>
        </div>
    )
}

export default WelcomeContent;