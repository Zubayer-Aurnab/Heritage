
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../Card/Card';
import './PP.css'
import { useEffect, useState } from 'react';
import useAxiosURL from '../../Hooks/useAxiosURL';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PopularProperties = ({ title }) => {
    const API = useAxiosURL()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    console.log(data)
    const fetchProperty = async () => {
        setLoading(true)
        const res = await API.get('/all-property')
        setData(res.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchProperty()
    }, [])
    return (
        <div className="w-[90%] mx-auto mt-20">
            <div className="flex justify-between">
                <h1 className="font-[Montserrat] font-semibold text-2xl">{title}</h1>
                <h1 className="font-[Poppins] font-semibold text-[#0059B1] text-base underline">See all property</h1>
            </div>
            <div className='mt-10  '>
                <div className=' relative'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={40}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper  "
                    >
                        {
                            loading ? <Loader /> :
                                data.map((item, i) => (

                                    <SwiperSlide key={i}>
                                        <Link to={`/propertyDetails/${item._id}`}>
                                            <Card img={item.imageArray[0]} name={item.name} location={item.location} price={item.price} />
                                        </Link>
                                    </SwiperSlide>

                                ))
                        }

                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default PopularProperties;
