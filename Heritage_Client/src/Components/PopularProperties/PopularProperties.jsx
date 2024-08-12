
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../Card/Card';
import './PP.css'

// eslint-disable-next-line react/prop-types
const PopularProperties = ({ title }) => {
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

                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper  "
                    >
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                        <SwiperSlide><Card /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PopularProperties;
