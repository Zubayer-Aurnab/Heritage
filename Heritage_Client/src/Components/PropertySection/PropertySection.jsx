import { IoSearchOutline } from 'react-icons/io5'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'

import PlayBtn from '../PlayBtn/PlayBtn'

const PropertySection = () => {
    return (
        <div className='mt-24 px-2 lg:px-0 lg:w-[90%] mx-auto flex flex-col-reverse lg:flex-row justify-between'>
            {/* image section */}
            <div className='flex-1 mt-12 lg:mt-0'>
                <div className='relative'>
                    <img className='lg:h-[22rem] w-[28rem] rounded-lg' src={img1} alt="" />
                    <div className='absolute left-28 bottom-[-90px]'>
                        <img className='lg:h-60 w-[30rem] object-cover rounded-lg shadow-2xl' src={img2} alt="" />
                        <div className='absolute right-64 lg:right-28  top-[70px] lg:top-[-35px]'>
                            <PlayBtn />
                        </div>
                    </div>
                </div>
            </div>
            {/* text section */}
            <div className=' flex-1'>
                <div className='flex gap-2  items-center '>
                    <div className='h-1 w-16 bg-orange-600 '></div>
                    <p className='font-semibold text-lg font-[Poppins]'>Property buying</p>
                </div>
                <h1 className='text-3xl lg:text-5xl  font-[Montserrat] font-bold my-6 lg:my-8'>Efficient and Transparent <br /> Home Buying Solutions</h1>
                <p className=' text-base font-[Poppins] mb-10 text-[#667085]'>it is  a long  established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout</p>
                <div className=''>
                    <button className='bg-[#ECF5FF] text-[#0059B1]  font-[Poppins] py-3 px-5 rounded-[4px] flex items-center  gap-2'>
                        <IoSearchOutline className='text-2xl text-[#0059B1] ' /> Find Property
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertySection;