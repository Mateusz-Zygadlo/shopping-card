const ShoppingCard = (props) => {
    return(
        <div className="containerShoppingCard">
            <div className="productsInfo">
                <div>name</div>
                <div>amount</div>
                <div>price</div>
            </div>
            <div>
            {props.productsArrProps.map((i, p) => (
                <div key={p} className={`${i.name} shoppingCardProduct`}>
                    <div className="shoppingCardName">{i.name}</div>
                    <div className="shoppingCardAmount">
                        <button>+</button>
                        <div>{i.amount}</div>
                        <button>-</button>
                    </div>
                    <div className="shoppingCardPrice">{`${i.amount * i.price}$`}</div>
                </div>
            ))}
            </div>
            <div className="totalPrice">
                <div>totalPrice: 12324234$</div>
            </div>
        </div>
    )
}

export default ShoppingCard;