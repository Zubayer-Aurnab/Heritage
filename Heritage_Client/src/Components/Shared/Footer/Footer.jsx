import logo from '../../../assets/logo/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiHandPeaceLight } from "react-icons/pi";
const Footer = () => {
    const hClass = 'text-[#667085] text-sm font-semibold font-[Montserrat]'
    const pClass = 'text-[#475467] text-base font-semibold font-[Montserrat]'
    return (
        <div className="mt-20 bg-[#ECF5FF]">
            <div className="  px-2 lg:px-0 lg:w-[90%] mx-auto py-10  ">
                <div className='flex flex-col lg:flex-row gap-20'>
                    {/* logo */}
                    <div className=''>
                        <div className='grid place-items-center lg:place-content-start'>
                            <img className='h-24' src={logo} alt="" />
                        </div>
                        <p className='font-[Montserrat] font-medium text-base pl-6 text-center lg:text-left'>Design amazing digital experiences <br /> that create more happy in the world </p>
                    </div>
                    {/* text  */}
                    <div className='flex-1 grid grid-cols-2 lg:grid-cols-5  place-items-center gap-20 lg:gap-0'>

                        <div>
                            <h1 className={hClass}>Product</h1>
                            <div className='mt-5 space-y-3'>
                                <p className={pClass}>Overview</p>
                                <p className={pClass}>Feature</p>
                                <p className={pClass}>Solutions</p>
                                <p className={pClass}>Tutorials</p>
                                <p className={pClass}>Pricing</p>
                                <p className={pClass}>Releases</p>
                            </div>
                        </div>
                        <div>
                            <h1 className={hClass}>Company</h1>
                            <div className='mt-5 space-y-3'>
                                <p className={pClass}>About us </p>
                                <p className={pClass}>Careers</p>
                                <p className={pClass}>Press</p>
                                <p className={pClass}>News</p>
                                <p className={pClass}>Media kit</p>
                                <p className={pClass}>contact</p>
                            </div>
                        </div>
                        <div>
                            <h1 className={hClass}>Resources</h1>
                            <div className='mt-5 space-y-3'>
                                <p className={pClass}>Blog</p>
                                <p className={pClass}>Newsletter</p>
                                <p className={pClass}>Events</p>
                                <p className={pClass}>Help center</p>
                                <p className={pClass}>Tutorials</p>
                                <p className={pClass}>Support</p>
                            </div>
                        </div>
                        <div>
                            <h1 className={hClass}>Social</h1>
                            <div className='mt-5 space-y-3'>
                                <p className={pClass}>Twitter</p>
                                <p className={pClass}>LinkedIn</p>
                                <p className={pClass}>Facebook</p>
                                <p className={pClass}>Github</p>
                                <p className={pClass}>Angeilist</p>
                                <p className={pClass}>Dribble</p>
                            </div>
                        </div>
                        <div>
                            <h1 className={hClass}>Legal</h1>
                            <div className='mt-5 space-y-3'>
                                <p className={pClass}>Terms</p>
                                <p className={pClass}>Privacy</p>
                                <p className={pClass}>Cookies</p>
                                <p className={pClass}>Licenses</p>
                                <p className={pClass}>Settings</p>
                                <p className={pClass}>Contact</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='h-[1px] w-full bg-[#acd5ff] mt-10 mb-5' />
                <div className='flex justify-between'>
                    <h1>2024 Heritage-Nest . All rights reserved.</h1>
                    <div className='flex gap-3'>
                        <FaTwitter className='text-[#0059B1] text-2xl ' />
                        <FaLinkedin className='text-[#0059B1] text-2xl' />
                        <FaFacebook className='text-[#0059B1] text-2xl' />
                        <PiHandPeaceLight className='text-[#0059B1] text-2xl' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;