import { useContext } from 'react'
import { WeatherData } from './Home'
function Place({ countryName }) {
    const placeName = useContext(WeatherData)
    return (
        <p className="mt-10 text-2xl text-gray-600 font-bold">{placeName[1]} {placeName[2]}</p>
    )
}
export default Place