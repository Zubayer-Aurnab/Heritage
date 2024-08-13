import { Divider, Input } from "antd";
import './Post.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosURL from "../../Hooks/useAxiosURL";

import useAuth from "../../Hooks/useAuth";

const PostProperty = () => {
    const { user } = useAuth()
    console.log(user?.email)
    const API = useAxiosURL()
    const h1Class = "text-base font-semibold font-[Montserrat] mb-2 text-[#0059b1]"
    const [image1, setimage1] = useState('')
    const [image2, setimage2] = useState('')
    const [image3, setimage3] = useState('')
    const [image4, setimage4] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [area, setArea] = useState('')
    const [place, setPlace] = useState('')
    const [bed, setBed] = useState('')
    const [bath, setBath] = useState('')
    const [balcony, setBalcony] = useState('')
    const [furnished, setFurnished] = useState('')
    const [floor, setFloor] = useState('')
    const [lift, setLift] = useState('')
    const [facing, setFacing] = useState('')
    const [price, setPrice] = useState('')


    const handelPost = async (e) => {
        e.preventDefault()
        const form = e.target;
        const imagesSet = [image1, image2, image3, image4].filter(image => image !== '').length;
        if (imagesSet < 2) {
            toast.error("Please upload at least 2 images before proceeding.");
            return;
        }
        const fields = [
            { value: name, message: "Name is required" },
            { value: location, message: "Location is required" },
            { value: area, message: "Area is required" },
            { value: place, message: "Place is required" },
            { value: bed, message: "Number of beds is required" },
            { value: bath, message: "Number of baths is required" },
            { value: balcony, message: "Number of balconies is required" },
            { value: furnished, message: "Furnished status is required" },
            { value: floor, message: "Floor number is required" },
            { value: lift, message: "Lift availability is required" },
            { value: facing, message: "Facing direction is required" },
            { value: price, message: "price is required" },
        ];
        for (let field of fields) {
            if (!field.value) {
                return toast.error(field.message);
            }
        }

        const PostData = {
            imageArray: [image1, image2, image3, image4],
            name,
            location,
            area,
            place,
            bed, bath, balcony,
            furnished, floor, lift, facing, price,
            added_by: user?.email
        }
        if (!user.email) {
            return
        }
        const res = await API.post("/post", PostData)
        if (res.data.insertedId) {
            setName('');
            setLocation('');
            setArea('');
            setPlace('');
            setBed('');
            setBath('');
            setBalcony('');
            setFurnished('');
            setFloor('');
            setLift('');
            setFacing('');
            setimage1('');
            setimage2('');
            setimage3('');
            setimage4('')
            form.reset();
            toast.success("Post Added successfully")
        }


    }


    return (
        <div className="">
            <h1 className="my-5 text-4xl font-semibold text-center font-[Montserrat] ">Post Your Property</h1>
            <div className="">
                <form
                    onSubmit={handelPost}
                    className="shadow-2xl w-[95%]   mx-auto rounded-lg p-4  over" action="">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="">
                            <h1 className={h1Class}>Image 1</h1>
                            <Input onChange={() => setimage1(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div >
                            <h1 className={h1Class}>Image 2</h1>
                            <Input onChange={() => setimage2(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div >
                            <h1 className={h1Class}>Image 3</h1>
                            <Input onChange={() => setimage3(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div >
                            <h1 className={h1Class}>Image 4</h1>
                            <Input onChange={() => setimage4(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                    </div>
                    <Divider className="my-10" />
                    <div className="grid grid-cols-4 gap-5 ">
                        <div className="">
                            <h1 className={h1Class}>Name</h1>
                            <Input onChange={() => setName(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Location</h1>
                            <Input onChange={() => setLocation(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Place</h1>
                            <Input onChange={() => setPlace(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Area (sqft)</h1>
                            <Input onChange={() => setArea(event.target.value)} placeholder="IMAGE 1" variant="filled" />
                        </div>
                    </div>
                    <Divider className="my-10" />
                    <div className="grid grid-cols-4 gap-5 ">
                        <div className="">
                            <h1 className={h1Class}>BED</h1>
                            <Input onChange={() => setBed(event.target.value)} type="number" placeholder="BED" variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>BATH</h1>
                            <Input onChange={() => setBath(event.target.value)} type="number" placeholder="BATH " variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>BALCONY</h1>
                            <Input onChange={() => setBalcony(event.target.value)} type="number" placeholder="BALCONY " variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Furnished (Yes/No)</h1>
                            <Input onChange={() => setFurnished(event.target.value)} placeholder="Furnished " variant="filled" />
                        </div>
                    </div>
                    <Divider className="my-10" />
                    <div className="grid grid-cols-4 gap-5 ">
                        <div className="">
                            <h1 className={h1Class}>Floor</h1>
                            <Input onChange={() => setFloor(event.target.value)} placeholder="Floor" variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Lift</h1>
                            <Input onChange={() => setLift(event.target.value)} type="number" placeholder="Lift " variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Facing</h1>
                            <Input onChange={() => setFacing(event.target.value)} placeholder="Facing " variant="filled" />
                        </div>
                        <div className="">
                            <h1 className={h1Class}>Price $</h1>
                            <Input onChange={() => setPrice(event.target.value)} placeholder="Facing " variant="filled" />
                        </div>

                    </div>

                    <div className='flex justify-center my-10 w-60 mx-auto'>
                        <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] w-full flex justify-center items-center mt-8 lg:mt-0  gap-1'>
                            <IoMdAddCircleOutline className='text-2xl ' /> Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProperty;