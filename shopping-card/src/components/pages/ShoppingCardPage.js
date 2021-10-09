import Navbar from "../Navbar";
import ShoppingCard from "../ShoppingCard";

const ShoppingCardPage = (props) => {
    return(
        <div>
            <Navbar ordersNumber={props.ordersNumberProps} />
            <ShoppingCard {...props} />
        </div>
    )
}

export default ShoppingCardPage;