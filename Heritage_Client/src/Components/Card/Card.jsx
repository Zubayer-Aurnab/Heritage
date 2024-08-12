
import { MdPlace } from "react-icons/md";
const Card = () => {
    return (
        <div >
            <div className=" bg-[#F9FAFB]">
                <img className="object-cover h-96" src="https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/newsletter/42442.jpg?1541618191" alt="" />
                <div className="p-4">
                    <div className="flex justify-between mt-2">
                        <span className="bg-[#C5E2FF] rounded px-2 text-[14px]" > Apartment</span>
                        <div className="flex items-center gap-2" >
                            <div className="h-[10px] w-[10px] bg-[#EE6611]" />
                            <h1>Ready To Move</h1>
                        </div>
                    </div>
                    <div className="h-[2px] bg-slate-200 mt-3" />
                    <div >
                        <h1 className="font-[Montserrat] font-semibold text-xl mt-2">SunnySlop Suites</h1>
                        <p className="text-[#6B7280] text-base font-normal flex items-center  font-[Poppins] mt-1 "> <MdPlace color="#EE6611" className="text-2xl mr-2" /> Uttara Park ,UTTARA, Bangladesg</p>
                        <h1 className="font-[Montserrat] text-2xl font-semibold mt-5">$200999</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;