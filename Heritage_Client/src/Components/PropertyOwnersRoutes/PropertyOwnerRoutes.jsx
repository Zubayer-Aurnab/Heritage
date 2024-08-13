import { HiHomeModern } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const PropertyOwnerRoutes = () => {
    return (
        <div className="space-y-5">
            <Link to={'/dashboard/post'} className='flex justify-center  '>
                <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-2 rounded-[4px] flex items-center w-full  gap-2'>
                    <IoMdAddCircleOutline className='text-2xl ' /> Post Property
                </button>
            </Link>
            <Link to={'/buyers'} className='flex justify-center '>
                <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-2  w-full rounded-[4px] flex items-center  gap-2'>
                    <HiHomeModern className='text-2xl ' />  My Property
                </button>
            </Link>
        </div>
    );
};

export default PropertyOwnerRoutes;