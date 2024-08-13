import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosURL from "../../Hooks/useAxiosURL";
import Loader from "../../Components/Loader/Loader";
import { MdPlace } from "react-icons/md";
import { Divider, Input, Slider } from "antd";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
import OurServices from "../../Components/OurServices/OurServices";
import PopularProperties from "../../Components/PopularProperties/PopularProperties";
import './PD.css'
const PropertyDetails = () => {
    const [loader, setLoader] = useState(false)
    const [details, setDetails] = useState(false)
    const API = useAxiosURL()
    const params = useParams()
    // console.log(params.id)
    console.log(details)
    const fetchDetails = async () => {
        setLoader(true)
        const res = await API.get(`/single-property/${params?.id}`)
        setDetails(res.data)
        setLoader(false)
    }
    useEffect(() => {
        fetchDetails()
    }, [params])
    return (
        <div>
            {
                loader ? <div className=""> <Loader /></div>
                    :
                    <>
                        <div className="w-[90%] mx-auto flex  gap-8">
                            {/* left section */}
                            <div className="  w-[70%]">
                                {/* header */}
                                <div className="flex items-center justify-between my-6">
                                    <div>
                                        <h1 className="font-[Montserrat] font-semibold text-xl mt-2">{details.name}</h1>
                                        <p className="text-[#6B7280] text-base font-normal flex items-center  font-[Poppins] mt-1 "> <MdPlace color="#EE6611" className="text-2xl mr-2" /> {details.location}</p>
                                    </div>
                                    <div >
                                        <h1 className="text-3xl font-extrabold font-[Montserrat]"> {details.price} $</h1>
                                    </div>
                                </div>
                                <Divider />
                                {/* img grid */}
                                <div className="">
                                    <div>
                                        <img className="h-[50vh] w-full object-cover" src={details?.imageArray?.[0] || ""} alt="" />
                                    </div>
                                    <div className="mt-5 grid grid-cols-7 gap-5">
                                        <div className="col-span-3">
                                            <img className="h-[20vh] w-full object-cover" src={details?.imageArray?.[1] || ""} alt="" />
                                        </div>
                                        <div className="col-span-3">
                                            <img className="h-[20vh] w-full object-cover" src={details?.imageArray?.[2] || ""} alt="" />
                                        </div>
                                        <div className="col-span-1">
                                            <img className="h-[20vh] w-full object-cover" src={details?.imageArray?.[3] || ""} alt="" />

                                        </div>

                                    </div>

                                </div>
                                {/* overview */}
                                <div className="bg-[#E5E7EB] p-6 mt-16 rounded-lg">
                                    <h1 className="font-[Montserrat] font-semibold text-2xl">Overview</h1>
                                    <div className="bg-white mt-10 p-2 flex justify-evenly gap-32 shadow-xl">
                                        <div className="flex items-center gap-2 " >
                                            <IoBedOutline className="text-xl" /> <p className="text-base "><span className="font-bold">{details.bed}</span> Beds</p>
                                        </div>
                                        <div className="flex items-center gap-2 " >
                                            <MdOutlineBathtub className="text-xl" /> <p className="text-base "><span className="font-bold">{details.bath}</span> Bath</p>
                                        </div>
                                        <div className="flex items-center gap-2 " >
                                            <MdBalcony className="text-xl" /> <p className="text-base "><span className="font-bold">{details.balcony}</span> Balcony</p>
                                        </div>
                                        <div className="flex items-center gap-2 " >
                                            <MdOutlineChair className="text-xl" /> <p className="text-base "><span className="font-bold"></span> Furnished</p>
                                        </div>

                                    </div>
                                    <div className="mt-10  grid grid-cols-4 gap-10   ">
                                        <div className="w-full ">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Carpet Area</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1"> {details.area} sqft</p>

                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Floor</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1"> {details.floor} th Floor</p>

                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Transaction Type</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1"> Ready to move</p>

                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Lift</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1">{details.lift}</p>

                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Facing</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1">{details.facing}</p>

                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg text-[#5C5C5C]  font-normal">Age of construction</p>
                                            <p className="text-base text-[#101010]  font-medium mt-1">New construction</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right section */}
                            <div className=" w-[30%]">
                                <div className="">
                                    <div className="bg-[#ECF5FF] p-6 mt-[137px]">
                                        <div>
                                            <p className="text-[#6B7280] font-normal text-lg">Property Value</p>
                                            <p className="font-bold text-4xl my-3">{details.price} $</p>
                                            <p className="text-[#6B7280] text-xl">
                                                Your bid can not be than 10% of the <br /> property minimum value
                                            </p>
                                        </div>
                                        <div className="space-y-3 mt-6">
                                            <div>
                                                <p className="mb-2">Min</p>
                                                <Input size="large" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Max</p>
                                                <Input size="large" />
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <Slider range defaultValue={[0, Number(details.price)]} />
                                        </div>
                                        <div className='flex justify-center mt-10'>
                                            <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] flex items-center mt-8 lg:mt-0  gap-2'>
                                                Bid Property
                                            </button>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="w-full mt-16">
                                            <iframe className="w-full h-[54.5vh]  rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.037102606541!2d77.42963770863702!3d23.241736885830456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c438147b2d7bd%3A0xdba54c95bd1c66b2!2sGolden%20Tulip!5e0!3m2!1sen!2sbd!4v1723582595055!5m2!1sen!2sbd"   allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="-mt-28">
                            <OurServices />
                        </div>
                        <PopularProperties />
                    </>
            }

        </div>
    );
};

export default PropertyDetails;