import Navbar from "../Navbar";
import WelcomeContent from "../WelcomeContent";

const HomePage = (props) => {
    return(
        <div>
            <Navbar ordersNumber={props.ordersNumberProps} />
            <WelcomeContent />
        </div>
    )
}

export default HomePage;;