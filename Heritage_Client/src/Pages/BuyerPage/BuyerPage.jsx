import BuyBanner from "../../Components/BuyBanner/BuyBanner";
import FlatList from "../../Components/FlatList/FlatList";
import PopularProperties from "../../Components/PopularProperties/PopularProperties";
import Footer from "../../Components/Shared/Footer/Footer";
import NavBar from "../../Components/Shared/NavBar/NavBar";


const BuyerPage = () => {
    return (
        <div>
            <NavBar />
            <BuyBanner />
            <FlatList />
            <PopularProperties />
            <Footer />
        </div>
    );
};

export default BuyerPage;