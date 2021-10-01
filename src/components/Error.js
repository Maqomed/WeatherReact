import { useContext } from 'react'
import { WeatherData } from './Home'
function Error() {
    const isIncorrect = useContext(WeatherData)
    return (

        isIncorrect[0] ? (<p className="flex justify-center bg-red-400 rounded p-2 mt-2 md:w-1/3">Enter correct city name</p>)
            : (<div></div>)
    )
}
export default Error