import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import App from './App';
import ProductsPage from './pages/ProductsPage';
import ShoppingCardPage from './pages/ShoppingCardPage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route 
                    exact 
                    path='/' 
                    render={(props) => (
                        <App />
                    )} />
                <Route 
                    exact 
                    path='/home' 
                    render={(props) => (
                        <HomePage />
                    )} />
                <Route 
                    exact 
                    path='/products' 
                    render={(props) => (
                        <ProductsPage />
                    )} />
                <Route 
                    exact 
                    path='/shopping-card' 
                    render={(props) => (
                        <ShoppingCardPage />
                    )} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;