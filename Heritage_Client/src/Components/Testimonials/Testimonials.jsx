
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Demo from './Demo/Demo';
import './TM.css';
const Testimonials = () => {
    return (
        <div>
            <h1 className="font-[Montserrat] text-4xl font-bold text-center mt-24">Testimonials</h1>
            <div className='w-[90%] mx-auto  mt-10'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full !py-10"
                >
                    <SwiperSlide><Demo /></SwiperSlide>
                    <SwiperSlide><Demo /></SwiperSlide>
                    <SwiperSlide><Demo /></SwiperSlide>
                    <SwiperSlide><Demo /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;