import Card from "../Card/Card";



const PopularProperties = () => {
    return (
        <div className="w-[90%] mx-auto mt-20">
            <div className="flex justify-between">
                <h1 className="font-[Montserrat] font-semibold text-2xl">Popular Properties</h1>
                <h1 className="font-[Poppins] font-semibold text-[#0059B1] text-sm underline">See all property</h1>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};

export default PopularProperties;