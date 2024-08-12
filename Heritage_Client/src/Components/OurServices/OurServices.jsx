import { TbSmartHome } from "react-icons/tb";

const OurServices = () => {
    return (
        <div className="mt-60 lg-[90%] mx-auto">
            <h1 className="text-4xl font-bold font-[Montserrat] text-center">Other Services</h1>
            <div className="mt-24 flex flex-col lg:flex-row  items-center lg:justify-center gap-24">
                <div className="bg-[#ECF5FF] flex gap-4 rounded-md p-5 w-96 border">
                    <div >
                        <div className="bg-[#EE6611] p-3 rounded-md">
                            <TbSmartHome className="text-3xl" color="white" />
                        </div>
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl font-semibold font-[Montserrat] ">Advanced Property Search</h1>
                        <p className="text-[#6B7280] text-base font-medium mt-3">Effortlessly find your dream property with advance search filters</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex gap-4 rounded-md p-5 w-96 border">
                    <div >
                        <div className="bg-[#EE6611] p-3 rounded-md">
                            <TbSmartHome className="text-3xl" color="white" />
                        </div>
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl font-semibold font-[Montserrat] ">Virtual Tours and Multimedia</h1>
                        <p className="text-[#6B7280] text-base font-medium mt-3">Effortlessly find your dream property with advance search filters</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex gap-4 rounded-md p-5 w-96 border">
                    <div >
                        <div className="bg-[#EE6611] p-3 rounded-md">
                            <TbSmartHome className="text-3xl" color="white" />
                        </div>
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl font-semibold font-[Montserrat] ">Secure online Transactions</h1>
                        <p className="text-[#6B7280] text-base font-medium mt-3">Effortlessly find your dream property with advance search filters</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurServices;