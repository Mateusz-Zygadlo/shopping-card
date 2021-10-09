import React, { useState, useEffect } from "react";

const Cards = (props) => {
    const productsArr = [
        {name: 'Huawei', price: 599, amount: 1},
        {name: 'Xiaomi', price: 449, amount: 1},
        {name: 'Samsung', price: 2799, amount: 1},
        {name: 'Motorola', price: 1299, amount: 1},
        {name: 'OnePlus', price: 3399, amount: 1},
        {name: 'realme', price: 399, amount: 1},
        {name: 'nokia', price: 549, amount: 1},
        {name: 'Oppo', price: 729, amount: 1},
        {name: 'Asus', price: 479, amount: 1},
    ];

    const [shoppingProducts, setShoppingProducts] = useState(props.productsArrProps || []);

    useEffect(() => {
        props.addProductFunc([...shoppingProducts]);
    }, [shoppingProducts])

    
    const setValue = (e) => {
        const value = e.target.parentElement.parentElement.classList[0];
        const indexValue = productsArr.findIndex(item => item.name == value);

        for(let key in shoppingProducts){
            if(shoppingProducts[key].name == productsArr[indexValue].name){
                let newArr = [...shoppingProducts];
                newArr[key].amount += 1;
                
                setShoppingProducts(newArr);

                return; 
            }
        }

        setShoppingProducts(shoppingProducts.concat(productsArr[indexValue]));

        return;
    }

    return(
        <div>
            <h1 className="ProductsH1">Products</h1>
            <div className="containerCards">
                {productsArr.map((item, i) => (
                    <div key={i} className={`${item.name} card`}>
                        <div className="productImg"></div>
                        <div className="productName">{item.name}</div>
                        <div className="productPrice">{item.price}$</div>
                        <div className="productButton">
                            <button onClick={(e)=>{setValue(e)}}>Add to shopping cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;