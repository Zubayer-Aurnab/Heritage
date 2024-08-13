
import NavBar from "../../Components/Shared/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Divider, Input } from "antd";
import { IoIosLogIn } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import img1 from '../../assets/images/img6.jpg'
import Footer from "../../Components/Shared/Footer/Footer";
import './RG.css'
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
const Registration = () => {
    const { GoogleAuth, createUser, UpdateUser } = useAuth()
    const [email, setEmail] = useState()
    const [Photo, setPhoto] = useState()
    const [Password, setPassword] = useState()
    const [Name, setName] = useState()


    const GoogleLogin = () => {
        GoogleAuth()
            .then(res => {
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                    photo: res?.user?.photoURL
                }
                console.log(userInfo)
                toast.success("Sign In successful")
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data)
                //         Swal.fire({
                //             position: "center",
                //             icon: "success",
                //             title: "Registration successful",
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //         navigate(location?.state ? location.state : '/')
                //     })
            })
            .catch()
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!Photo) {
            return toast.error("Photo is Required")
        }
        if (!Name) {
            return toast.error("Name is Required")
        }
        if (!email) {
            return toast.error("Email is Required")
        }
        if (!Password) {
            return toast.error("Password is Required")
        }
        console.log(email, Photo, Password)

        createUser(email, Password).then(res => {
            UpdateUser(Name, Photo)
                .then(res => {
                    const user = { email, Name, Photo }
                    console.log(user)
                    toast.success(`Sign Up Successful`)
                    // axiosPublic.post('/users', user)
                    //     .then(res => {
                    //         if (res.data.insertedId) {
                    //             Swal.fire({
                    //                 position: "center",
                    //                 icon: "success",
                    //                 title: "Registration successful",
                    //                 showConfirmButton: false,
                    //                 timer: 1500
                    //             });
                    //             navigate(location?.state ? location.state : '/')
                    //         }
                    //     })

                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            toast.error(`error: ${err.message}`)
            // Swal.fire({
            //     icon: "error",
            //     title: `error: ${err.message}`,
            //     text: `error: ${err.message}`,
            //     footer: '<a href="#">Why do I have this issue?</a>'
            // });
        })

    }
    return (
        <div>
            <NavBar />
            <div className='relative mb-96'>
                <img className='h-[40vh] w-full object-cover' src={img1} alt="" />
                <div className='bg-[#FDF0E7]  w-[50%] mx-auto p-8 absolute top-20 left-1/2 transform -translate-x-1/2 rounded-lg shadow-xl z-50'>
                    <form
                        onSubmit={handelSubmit}
                    >
                        <h1 className='text-[#D95D0F] font-[Montserrat] text-4xl font-semibold text-center'>Sign Up </h1>
                        <div>
                            <h1 className='text-[#D95D0F] font-[Poppies] text-lg'>Photo URL</h1>
                            <Input onChange={() => setPhoto(event.target.value)} size="large" placeholder=" Photo Link" />
                        </div>
                        <div>
                            <h1 className='text-[#D95D0F] font-[Poppies] text-lg mt-4'>Name</h1>
                            <Input onChange={() => setName(event.target.value)} size="large" placeholder=" Name" />
                        </div>
                        <div className="mt-4">
                            <h1 className='text-[#D95D0F] font-[Poppies] text-lg'>Email</h1>
                            <Input onChange={() => setEmail(event.target.value)} type="email" size="large" placeholder=" Email" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-[#D95D0F] font-[Poppies] text-lg'>Password</h1>
                            <Input.Password
                                size="large"
                                placeholder=" Password"
                                iconRender={(visible) => (visible ? <FiEye /> : <FiEyeOff />)}
                                onChange={() => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#D95D0F] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] flex items-center mt-8 lg:mt-8  gap-2'>
                                <IoIosLogIn className='text-2xl ' /> Sign Up
                            </button>
                        </div>
                        <Divider>or</Divider>


                    </form>
                    <div className='flex justify-center'>
                        <button
                            onClick={GoogleLogin}
                            className='bg-[#FDF0E7] text-[#D95D0F]  font-[Poppins] py-3 px-5 rounded-[4px] flex items-center border border-[#D95D0F]  gap-2'>
                            <FcGoogle className='text-2xl ' /> Google
                        </button>
                    </div>
                    {/*  eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Already Have Account ? <span><Link className='underline' to={'/login'}>Log In</Link></span></p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Registration;