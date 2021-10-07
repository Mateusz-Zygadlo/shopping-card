import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import App from './App';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/home' component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;