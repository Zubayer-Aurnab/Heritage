import Banner from "../../Components/Banner/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import PropertySection from "../../Components/PropertySection/PropertySection";
import PropertySection2 from "../../Components/PropertySection2/PropertySection2";
import Footer from "../../Components/Shared/Footer/Footer";
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
            <Footer />
        </div>
    );
};

export default Home;