

const Banner = () => {
    return (
        <div className="relative ">
            <div>
                <video src="../../assets/video"></video>
            </div>
            <div className="absolute flex items-center h-20 md:h-44 w-full left-0 bottom-[1px] lg:bottom-0 bg-gradient-to-t from-[#2b292b] z-10">
                <div className="px-2 md:px-10 absolute bottom-0 md:bottom-6">

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>Your Portal to India's <br />Exquisite Real Estate</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>seamlessly connecting you to the heartbeat of india's prime properties</p>
                    <button>
                        Find Property
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;