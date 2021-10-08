const Cards = () => {
    const productsArr = [
        {name: 'Huawei', price: 599},
        {name: 'Xiaomi', price: 449},
        {name: 'Apple', price: 3999},
        {name: 'Samsung', price: 2799},
        {name: 'Motorola', price: 1299},
        {name: 'OnePlus', price: 3399},
        {name: 'realme', price: 399},
        {name: 'nokia', price: 549},
        {name: 'Oppo', price: 729},
        {name: 'Asus', price: 479},
    ];
    
    
    
    return(
        <div>
            <h1 className="ProductsH1">Products</h1>
            <div className="containerCards">
                {productsArr.map((item, i) => (
                    <div key={i} className="card">
                        <div className="productImg"></div>
                        <div className="productName">{item.name}</div>
                        <div className="productPrice">{item.price}$</div>
                        <div className="productButton">
                            <button>Add to shopping cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;