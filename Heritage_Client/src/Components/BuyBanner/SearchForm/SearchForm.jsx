import { Input, InputNumber, Select } from "antd";
// import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import './SearchForm.css'
const SearchForm = () => {
    // const [search, setSearch] = useState()
    // console.log(search)
    return (
        <div>
            <form action="">
                <Input size="large" placeholder="large size" prefix={<IoSearchOutline />} className="mt-5" />
                <div className="mt-8 grid grid-cols-3 gap-10">
                    <div className="">
                        <h1 className="flex items-center  gap-1 text-sm  font-semibold font-[Inter]"><IoLocationOutline color="#EE6611" className="text-xl" /> Your Location</h1>
                        <Select
                            defaultValue="lucy"
                            className="w-full mt-4 py-5 bg-[#ECF5FF] rounded-lg"
                            variant="borderless"
                            suffixIcon={<IoIosArrowDown color="EE6611" className="text-xl" />}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yimingheasdasd' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />

                    </div>
                    <div className="">
                        <h1 className="flex items-center  gap-1 text-sm  font-semibold font-[Inter]"><IoHomeSharp color="#EE6611" className="text-xl" /> Property Type</h1>
                        <Select
                            defaultValue="lucy"
                            className="w-full mt-4 py-5 bg-[#ECF5FF] rounded-lg"
                            variant="borderless"
                            suffixIcon={<IoIosArrowDown color="EE6611" className="text-xl" />}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yimingheasdasd' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />

                    </div>
                    <div className="">
                        <h1 className="flex items-center  gap-1 text-sm  font-semibold font-[Inter]"><RiMoneyDollarCircleFill color="#EE6611" className="text-xl" /> Budget</h1>
                        <InputNumber suffix="$" variant="borderless " className="w-full mt-4 bg-[#ECF5FF] py-1" />

                    </div>
                </div>
                <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-2 lg:px-5 rounded-[4px] flex justify-center items-center mt-8 lg:mt-8  gap-2  w-full '>
                    <IoSearchOutline className='text-2xl ' /> Find Property
                </button>
            </form>
        </div>
    );
};

export default SearchForm;