import Cards from "../Cards";
import Navbar from "../Navbar";

const ProductsPage = (props) => {
    return(
        <div>
            <Navbar ordersNumber={props.ordersNumberProps} />
            <Cards {...props} />
        </div>
    )
}

export default ProductsPage;;