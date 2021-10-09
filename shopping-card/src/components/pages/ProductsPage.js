import Cards from "../Cards";
import Navbar from "../Navbar";

const ProductsPage = (props) => {
    return(
        <div>
            <Navbar ordersNumber={props.ordersNumberProps} />
            <Cards addArrProducts={props.addProductFunc} />
        </div>
    )
}

export default ProductsPage;;