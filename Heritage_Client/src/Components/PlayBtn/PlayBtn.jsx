import { IoMdPlay } from "react-icons/io";


const PlayBtn = () => {
    return (
        <div>
            <div className='w-16 h-16 rounded-full bg-[#0059B1] flex items-center justify-center shadow-2xl'>
                <IoMdPlay className='text-4xl ml-2' color='white' />
            </div>
        </div>
    );
};

export default PlayBtn;