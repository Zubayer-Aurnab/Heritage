import { IoArrowDownCircleOutline } from "react-icons/io5";


const FlatList = () => {
    return (
        <div className="w-[90%] mx-auto grid grid-cols-4 gap-10 ">
            <div className="bg-[#FDF0E7] p-5 ">
                <h1 className="text-[#D95D0F] text-4xl font-[Montserrat] font-bold">2K+</h1>
                <p className="font-[Poppins] font-normal text-base mb-8 mt-2">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#EE6611] underline" href="">View all</a>
                    <IoArrowDownCircleOutline color="#EE6611" className="text-2xl" />
                </div>
            </div>
            <div className="bg-[#ECF5FF] p-5 ">
                <h1 className="text-[#0059B1] text-4xl font-[Montserrat] font-bold">2K+</h1>
                <p className="font-[Poppins] font-normal text-base mb-8 mt-2">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#0059B1] underline" href="">View all</a>
                    <IoArrowDownCircleOutline color="#0059B1" className="text-2xl" />
                </div>
            </div>
            <div className="bg-[#FDF0E7] p-5 ">
                <h1 className="text-[#D95D0F] text-4xl font-[Montserrat] font-bold">2K+</h1>
                <p className="font-[Poppins] font-normal text-base mb-8 mt-2">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#EE6611] underline" href="">View all</a>
                    <IoArrowDownCircleOutline color="#EE6611" className="text-2xl" />
                </div>
            </div>
            <div className="bg-[#ECF5FF] p-5 ">
                <h1 className="text-[#0059B1] text-4xl font-[Montserrat] font-bold">2K+</h1>
                <p className="font-[Poppins] font-normal text-base mb-8 mt-2">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#0059B1] underline" href="">View all</a>
                    <IoArrowDownCircleOutline color="#0059B1" className="text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default FlatList;