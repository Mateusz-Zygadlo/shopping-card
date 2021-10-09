import Navbar from "../Navbar";

const ShoppingCardPage = (props) => {
    return(
        <div>
            <Navbar ordersNumber={props.ordersNumberProps} />
            <div>
                Hello shopping card page
            </div>
        </div>
    )
}

export default ShoppingCardPage;