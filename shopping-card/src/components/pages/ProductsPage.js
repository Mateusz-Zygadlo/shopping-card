import React, { useState, useEffect } from 'react';
import Cards from "../Cards";
import Navbar from "../Navbar";

const ProductsPage = () => {
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
        <div>
            <Navbar ordersNumber={ordersNumber} />
            <Cards addArrProducts={addProduct} />
        </div>
    )
}

export default ProductsPage;;