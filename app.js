// const geocode = require("./utils/geocode");
// const forecast = require("./utils/forecast");


// //celcius query string
// const celcius = "?units=si";
// //spanish
// const es = "?lang=es";





// geocode("New York City", (err, data) => {
//   console.log("error", err);
//   console.log("data", data);
// })







//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)




// forecast("-75.70kk88", 44.1545, (err, data) => {
//   console.log('Error', err)
//   console.log('Data', data)
// })




const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})