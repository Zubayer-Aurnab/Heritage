
import { Link } from 'react-router-dom';
import video from '../../assets/video/7578550-uhd_3840_2160_30fps.mp4'
import { IoSearchOutline } from "react-icons/io5";
const Banner = () => {
    return (
        <div className="relative    ">
            <div>
                <video className='h-[70vh] w-full object-cover' src={video} loop muted autoPlay playsInline  ></video>
            </div>
            <div className="absolute flex items-center justify-center h-full w-full bottom-0 bg-gradient-to-t from-[#111111] z-10 ">
                <div className=" absolute space-y-6 lg:space-y-8 text-center ">

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1 className='text-4xl lg:text-6xl text-white font-[Montserrat] font-bold leading-[40px] lg:leading-[70px]'>Your Portal to India's <br />Exquisite Real Estate</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='text-white text-base font-[Poppins]'>seamlessly connecting you to the heartbeat of india's prime properties</p>
                    <Link to={'/buyers'} className='flex justify-center'>
                        <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] flex items-center mt-8 lg:mt-0  gap-2'>
                            <IoSearchOutline className='text-2xl ' /> Find Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;