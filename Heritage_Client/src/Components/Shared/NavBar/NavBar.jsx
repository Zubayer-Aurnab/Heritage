import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'
import useAuth from '../../../Hooks/useAuth';
import Dropdown from '../../Dropdown/Dropdown';
// import { Dropdown } from 'antd';

const NavBar = () => {
    const { user } = useAuth()
    // console.log(user)
    return (
        <div>
            <div className="bg-[#ECF5FF] flex flex-col lg:flex-row justify-between  items-center  px-24 ">
                <div className='flex gap-10'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/buyers'}>Buy</NavLink>
                    <p>Sell</p>
                    <p>Service</p>
                </div>
                <div><img className='h-20 w-22 ' src={Logo} alt="" /></div>
                <div className='flex items-center gap-10'>
                   
                    {
                        user ?
                            <Dropdown />

                            :
                            <Link to={'/login'}>
                                <a className="">Log In</a>
                            </Link>

                    }

                </div>

            </div>
        </div>
    );
};

export default NavBar;