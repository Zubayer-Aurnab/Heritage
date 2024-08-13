import axios from "axios";


const axiosURL = axios.create({
    baseURL: "https://heritage-server-opal.vercel.app"
})

const useAxiosURL = () => {
    return (axiosURL);
};

export default useAxiosURL;