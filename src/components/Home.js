import { useEffect, useState } from 'react'
import { getCurrentCityData, getDefaultCityData } from '../api/index'
import Error from './Error'
import Button from './Button'
import Place from './Place'
import Date from './Date'
import Temperature from './Temperature'
import Loader from './Loader'
import { dateConverter } from '../utils/index'
function Home() {
    const [query, setQuery] = useState('')
    const [cityName, setCityName] = useState('')
    const [countryName, setCountryName] = useState()
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [currentTemp, setCurrentTemp] = useState()
    const [description, setDescription] = useState('')
    const [date, setDate] = useState([])

    useEffect(() => {
        getDefaultCityData().then(response =>
            baseWeatherInfo(response)
        )
    }, [])

    const getWeatherData = () => {
        getCurrentCityData(query).then(response => {
            baseWeatherInfo(response)
            setDate(dateConverter(response.data.dt))

        }).catch(() =>
            setIsIncorrect(true)
        )
        setQuery('')
    }
    const baseWeatherInfo = (response) => {
        setCountryName(response.data.sys.country)
        setCityName(response.data.name)
        setIsIncorrect(false)
        setCurrentTemp(Math.floor(response.data.main.temp))
        setDate(dateConverter(response.data.dt))
        setDescription((response.data.weather[0].description).toUpperCase())
    }

    return (
        cityName.length > 0 ? (
            <div className="flex flex-col items-center">
                <input
                    className="bg-purple-100 bg-opacity-50 shadow-lg border rounded w-1/3 mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Enter the city"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                />
                <Error isIncorrect={isIncorrect} />
                <Button getWeatherData={getWeatherData} />
                <Place cityName={cityName} countryName={countryName} />
                <Date date={date} />
                <Temperature currentTemp={currentTemp} />
                <p className="mt-10 text-2xl text-white font-bold">{description}</p>
            </div>
        ) : (
            <Loader />
        )



    )
}

export default Home