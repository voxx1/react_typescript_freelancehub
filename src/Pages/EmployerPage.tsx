import Header from '../Components/UI/Header'
import Footer from '../Components/UI/Footer'
import NewOrder from '../Components/EmployersPageOffers/NewOrder'
import { useLocation } from "react-router-dom";
import NewOrderStep2 from '../Components/EmployersPageOffers/NewOrderStep2'
import NewOrderStep3 from '../Components/EmployersPageOffers/NewOrderStep3';



const EmployerPage = () => {

    const location = useLocation();

    let currentOrderState = <NewOrder />
    if (location.pathname === `employer`) {
        currentOrderState = <NewOrder />
    } else if (location.pathname === `/employer/step2`) {
        currentOrderState = <NewOrderStep2 />
    } else if (location.pathname === `/employer/step3`) {
        currentOrderState = <NewOrderStep3 />
    }

    return (
        <>
            <Header />
            {currentOrderState}
            <Footer />
        </>
    )
}

export default EmployerPage