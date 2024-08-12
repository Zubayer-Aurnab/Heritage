import { Tabs } from 'antd';
import img1 from '../../assets/images/img4.jpg';
import './BuyBanner.css'
import SearchForm from './SearchForm/SearchForm';

const BuyBanner = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Buy',
            children: <SearchForm />,
        },
        {
            key: '2',
            label: 'Rent',
            children: <SearchForm />,
        },
        {
            key: '3',
            label: 'PG',
            children: <SearchForm />,
        },
        {
            key: '4',
            label: 'Plot',
            children: <SearchForm />,
        },
        {
            key: '5',
            label: 'Commercial',
            children: <SearchForm />,
        },
    ];
    return (
        <div>
            <div className='relative mb-40'>
                <img className='h-[40vh] w-full object-cover' src={img1} alt="" />
                <div className='bg-white  w-[50%] mx-auto p-8 absolute -bottom-28 left-1/2 transform -translate-x-1/2 rounded-lg shadow-xl'>

                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

                </div>
            </div>

        </div>
    );
};

export default BuyBanner;