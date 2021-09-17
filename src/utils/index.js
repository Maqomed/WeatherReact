export const dateConverter = (timestamp) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayOfTheWeek = days[new Date(timestamp * 1000).getDay() - 1]
    const dayOfTheMonth = new Date(timestamp * 1000).getDate()
    const month = months[new Date(timestamp * 1000).getMonth()]
    const year = new Date(timestamp * 1000).getFullYear()
    return [dayOfTheWeek, dayOfTheMonth, month, year]
}
