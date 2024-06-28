

export const readableDateGen = (date: Date) => {
        
    const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
} 
