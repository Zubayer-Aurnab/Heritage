import BuyBanner from "../../Components/BuyBanner/BuyBanner";
import FlatList from "../../Components/FlatList/FlatList";
import PopularProperties from "../../Components/PopularProperties/PopularProperties";
import Footer from "../../Components/Shared/Footer/Footer";
import NavBar from "../../Components/Shared/NavBar/NavBar";
import Testimonials from "../../Components/Testimonials/Testimonials";


const BuyerPage = () => {
    return (
        <div>

            <BuyBanner />
            <FlatList />
            <PopularProperties title={'Popular Properties'} />
            <div className="h-[2px] bg-slate-200 w-[90%] mx-auto mt-20" />
            <PopularProperties title={'New Listed  Properties'} />
            <Testimonials />

        </div>
    );
};

export default BuyerPage;