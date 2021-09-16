function Error({ isIncorrect }) {
    return (

        isIncorrect ? (<p className="flex justify-center bg-red-400 rounded p-2 mt-2 w-1/3">Enter correct city name</p>)
            : (<div></div>)

    )

}

export default Error