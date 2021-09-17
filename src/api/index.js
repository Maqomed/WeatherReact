import axios from "axios"
export const getCurrentCityData = async (query) => {
    try {
        const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        return resp
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const getDefaultCityData = async () => {
    try {
        const resp = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=baku&&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        return resp
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
