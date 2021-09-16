import { useEffect, useState } from 'react'
import { apiCall } from '../utils/index'
import axios from 'axios'
import Error from './Error'
import Button from './Button'
import Place from './Place'
import Date from './Date'
import Temperature from './Temperature'
import { dateConverter } from '../utils/index'
function Home() {
    const [query, setQuery] = useState('')
    const [cityName, setCityName] = useState('')
    const [countryName, setCountryName] = useState()
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [currentTemp, setCurrentTemp] = useState()
    const [date, setDate] = useState([])

    const getWeatherData = () => {
        // const result = apiCall(query)
        // console.log(result)
        axios.get(`${process.env.REACT_APP_BASE_URL}weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(function (response) {
                baseWeatherInfo(response)
                setDate(dateConverter(response.data.dt))
            }).catch(function (error) {
                setIsIncorrect(true)
            })
    }
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=baku&&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(function (response) {
                baseWeatherInfo(response)
            })
    }, [])

    const baseWeatherInfo = (response) => {
        setCountryName(response.data.sys.country)
        setCityName(response.data.name)
        setIsIncorrect(false)
        setCurrentTemp(Math.floor(response.data.main.temp))
        setDate(dateConverter(response.data.dt))
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
                />
                <Error isIncorrect={isIncorrect} />
                <Button getWeatherData={getWeatherData} />
                <Place cityName={cityName} countryName={countryName} />
                <Date date={date} />
                <Temperature currentTemp={currentTemp} />
            </div>
        ) : (
            <div>Loading...</div>
        )



    )
}

export default Home