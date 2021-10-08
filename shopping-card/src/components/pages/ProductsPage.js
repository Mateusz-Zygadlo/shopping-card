import React, { useState } from 'react';
import Cards from "../Cards";
import Navbar from "../Navbar";

const ProductsPage = () => {
    const [productsArr, setProductsArr] = useState([]);

    const addProduct = (value) => {
        setProductsArr(value);
    }

    return(
        <div>
            <Navbar />
            <Cards addArrProducts={addProduct} />
        </div>
    )
}

export default ProductsPage;;