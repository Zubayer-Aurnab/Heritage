import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";

const AdminRoutes = () => {
    return (
        <div className="space-y-5">
            <Link to={'/dashboard/manageUsers'} className='flex justify-center  '>
                <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-2 rounded-[4px] flex items-center w-full  gap-2'>
                    <FaPeopleGroup className='text-2xl ' /> Manage Users
                </button>
            </Link>
            <Link to={'/buyers'} className='flex justify-center '>
                <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-2  w-full rounded-[4px] flex items-center  gap-2'>
                    <HiHomeModern className='text-2xl ' />   manage Property
                </button>
            </Link>
        </div>
    );
};

export default AdminRoutes;