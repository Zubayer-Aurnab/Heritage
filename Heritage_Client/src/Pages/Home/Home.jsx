import Banner from "../../Components/Banner/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import PropertySection from "../../Components/PropertySection/PropertySection";
import PropertySection2 from "../../Components/PropertySection2/PropertySection2";
import NavBar from "../../Components/Shared/NavBar/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <PropertySection />
            <PropertySection2 />
            <PropertySection />
            <OurServices />
        </div>
    );
};

export default Home;