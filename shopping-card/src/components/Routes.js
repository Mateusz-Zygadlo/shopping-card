import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import HomePage from '../components/pages/HomePage';
import App from './App';
import ProductsPage from './pages/ProductsPage';
import ShoppingCardPage from './pages/ShoppingCardPage';

const Routes = () => {
    const [productsArr, setProductsArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ordersNumber, setOrdersNumber] = useState(0);

    const addProduct = (value) => {
        setProductsArr(value);
    }

    useEffect(() => {
        let total = 0;
        let orders = 0;
        if(productsArr.length == 0){
            return;
        }
        for(let i = 0; i < productsArr.length; i++){
            total += productsArr[i].amount * productsArr[i].price;
            orders += productsArr[i].amount;
        }

        setTotalPrice(total);
        setOrdersNumber(orders);
    }, [productsArr])


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
                        <HomePage ordersNumberProps={ordersNumber} />
                    )} />
                <Route 
                    exact 
                    path='/products' 
                    render={(props) => (
                        <ProductsPage ordersNumberProps={ordersNumber} addProductFunc={addProduct} />
                    )} />
                <Route 
                    exact 
                    path='/shopping-card' 
                    render={(props) => (
                        <ShoppingCardPage productsArrProps={productsArr} ordersNumberProps={ordersNumber} totalPriceProps={totalPrice} />
                    )} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;