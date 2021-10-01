function Temperature({ currentTemp }) {
    return (
        <div className="flex justify-center mt-10 bg-purple-100 bg-opacity-50 md:w-1/4 h-full border-2 rounded shadow-lg">
            <div className="m-auto text-gray-600 text-8xl font-bold p-10">{currentTemp}°C</div>
        </div>
    )
}
export default Temperature