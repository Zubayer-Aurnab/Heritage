import { Divider } from "antd";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import useRole from "../../Hooks/useRole";
import PropertyOwnerRoutes from "../PropertyOwnersRoutes/PropertyOwnerRoutes";



const Dashboard = () => {
    const { role } = useRole()
    console.log(role)
    return (
        <div className="flex ">
            <div className="bg-[#ecf5ff] w-[12%] p-4   h-screen" >
                {
                    role === "Admin" && <AdminRoutes />
                }
                {

                    role === 'Property Owner' && <PropertyOwnerRoutes />
                }

                <Divider>_</Divider>
                <Link to={'/'} className='flex justify-center'>
                    <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] flex items-center w-full  gap-2'>
                        <FaHome className='text-2xl ' /> Home
                    </button>
                </Link>

            </div>
            {/* outlet */}
            <div className=" w-[88%]" >
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
