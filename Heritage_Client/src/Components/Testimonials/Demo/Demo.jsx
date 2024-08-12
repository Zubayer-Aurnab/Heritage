import { FaStar } from "react-icons/fa";

const Demo = () => {
    return (
        <div className="p-8 bg-[#ECF5FF] space-y-7 flex flex-col items-center">
            <div className="flex gap-1">
                <FaStar color="#FEC84B " className="text-2xl" />
                <FaStar color="#FEC84B " className="text-2xl" />
                <FaStar color="#FEC84B " className="text-2xl" />
                <FaStar color="#FEC84B " className="text-2xl" />
                <FaStar color="#F4E6C5 " className="text-2xl" />
            </div>
            <p className="font-[Poppins] text-[#818181] text-lg font-normal text-center">The level of security provided by Cypherplay is unmatched  <br /> i feel confident using card for boht every purchase and travel its the peace of mind i was looking for </p>
            <img className="w-20 h-20  rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&s" alt="" />
            <h1 className="font-[Montserrat] text-xl font-semibold">Mike john</h1>
            <p className="font-[Poppins] text-[#818181] text-lg font-normal">Marketing manager,XYZ</p>
        </div>
    );
};

export default Demo;