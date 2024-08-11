import Logo from '../../../assets/logo/logo.png'

const NavBar = () => {
    return (
        <div>
            <div className="bg-[#ECF5FF] flex justify-between  items-center  px-24 ">
                <div className='flex gap-10'>
                    <p>Buy</p>
                    <p>Sell</p>
                    <p>Service</p>
                </div>
                <div><img className='h-20 w-20 ' src={Logo} alt="" /></div>
                <div className='flex gap-10'>
                    <p>Manage Rentals</p>
                    <p>Sign in</p>
                </div>

            </div>
        </div>
    );
};

export default NavBar;