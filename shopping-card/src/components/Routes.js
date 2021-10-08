import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import App from './App';
import ProductsPage from './pages/ProductsPage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/home' component={HomePage} />
                <Route exact path='/products' component={ProductsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;