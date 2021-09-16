function Button({ getWeatherData }) {
    return (
        <button onClick={getWeatherData} className="bg-purple-100 mt-4 bg-opacity-50 hover:bg-purple-200 p-2 rounded-lg w-24 text-gray-600 text-lg font-bold">Search</button>

    )
}
export default Button