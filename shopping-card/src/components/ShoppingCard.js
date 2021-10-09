const ShoppingCard = (props) => {
    const editingAmount = (e) => {
        const value = e.target.parentElement.parentElement.classList[0];
        const indexValue = props.productsArrProps.findIndex(item => item.name == value);
        const operator = e.target.innerHTML;

        let newArr = [...props.productsArrProps];
        if(operator == '-'){
            if(newArr[indexValue].amount - 1 < 1){
                return;
            }else{
                newArr[indexValue].amount -= 1;
            }
        }else if(operator == '+'){
            newArr[indexValue].amount += 1;
        }

        props.addProductFunc(newArr);
    }

    const deleteProduct = (e) => {
        const value = e.target.parentElement.parentElement.classList[0];
        const indexValue = props.productsArrProps.findIndex(item => item.name == value);
        const newArr = [...props.productsArrProps];
        newArr.splice(indexValue, 1);

        props.addProductFunc(newArr);
    }

    const totalPriceFunc = () => {
        let total = 0;
        for(let i = 0; i < props.productsArrProps.length; i++){
            total += props.productsArrProps[i].price * props.productsArrProps[i].amount;
        }

        return total;
    }

    return(
        <div>
            {props.productsArrProps.length ? 
                <div className="containerShoppingCard">
                    <div className="productsInfo">
                        <div className="productsInfoName">name</div>
                        <div className="productsInfoAmount">amount</div>
                        <div className="productsInfoPrice">price</div>
                    </div>
                    {props.productsArrProps.map((i, p) => (
                        <div key={p} className={`${i.name} shoppingCardProduct`}>
                            <div className="shoppingCardName">{i.name}</div>
                            <div div className="shoppingCardAmount">
                                <button onClick={(e)=>{editingAmount(e)}}>+</button>
                                <div>{i.amount}</div>
                                <button onClick={(e)=>{editingAmount(e)}}>-</button>
                            </div>
                            <div className="shoppingCardPrice">{`${i.amount * i.price}$`}</div>
                            <div className="delete">
                                <button onClick={(e)=>{deleteProduct(e)}}>delete</button>
                            </div>
                        </div>
                    ))}
                    <div className="totalPrice">
                        <div>{`total price: ${totalPriceFunc()}$`}</div>
                    </div>
                </div>    
                : <div className="emptyCard">ShoppingCard is empty</div>
            }
        </div>
    )
}

export default ShoppingCard;