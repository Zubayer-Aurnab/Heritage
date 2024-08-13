
import { IoSearchOutline } from 'react-icons/io5'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import PlayBtn from '../PlayBtn/PlayBtn'
import { Link } from 'react-router-dom';
const PropertySection2 = () => {
    return (
        <div className='lg:mb-40 mt-44 lg:mt-80 px-2 lg:px-0 lg:w-[90%] mx-auto flex flex-col-reverse lg:flex-row-reverse justify-between'>
            {/* image section */}
            <div className='flex-1'>
                <div className='relative mt-40 lg:mt-0' >
                    <img className='h-[16rem] lg:h-[22rem] w-[28rem] rounded-lg' src={img3} alt="" />
                    <div className='absolute right-[100px] lg:right-52 top-[-100px] lg:top-[-120px]'>
                        <img className='h-52 lg:h-60   lg:w-[30rem]  object-cover rounded-lg shadow-2xl' src={img4} alt="" />
                        <div className='absolute left-[270px] lg:left-[-25px]  top-[70px] lg:top-[70px]'>
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
                <Link to={'/buyers'} className=''>
                    <button className='bg-[#ECF5FF] text-[#0059B1]  font-[Poppins] py-3 px-5 rounded-[4px] flex items-center  gap-2'>
                        <IoSearchOutline className='text-2xl text-[#0059B1] ' /> Find Property
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PropertySection2;