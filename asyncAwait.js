const myFun = async () => {
    let lahoreW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("26 Deg")
        }, 2000);
    })
    let karachiW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("36 Deg")
            // reject("Weather is not found")
        }, 5000);
    })
    let allp = Promise.allSettled([lahoreW, karachiW])
    console.log(allp)
    // To check which one is not working and not exicuting the async/await thats it
    console.log("Lahore data is fetching.......")
    let lahoreWeather = await lahoreW
    console.log("Lahore data is Fetched!")
    console.log("Karachi data is fetching......")
    let karachiWeather = await karachiW
    console.log("Karachi data is Fetched!")
    return[`Lahore: ${lahoreWeather}`, `Karachi: ${karachiWeather}`]
    
}
myFun().then((data) => {
    console.log(data)
})
.catch((err)=> {
    console.log("Karachi:", err)
})