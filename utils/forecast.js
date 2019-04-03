// const request = require('request')


// const forecast = (lon, lat, callback) => {
// 	const url = `https://api.darksky.net/forecast/2b612ddbf712e95e8c56a40aa9461b99/${lon},${lat}`;

// 	request({url: url, json: true}, (err, res) => {
// 		if (err) {
// 			callback('Unable to connect to weather service!', undefined)
// 	} else if (res.body.err) {
// 			callback('Unable to find location', undefined)
// 	} else {
// 			callback(undefined, "running")
// 	}
// 	});
		
// }

// module.exports = forecast;



const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast





























// const url = `https://api.darksky.net/forecast/2b612ddbf712e95e8c56a40aa9461b99/37.8267,-122.4233`;

// request({url: url, json: true}, (err, res) => {
//   if(err){
//     console.log("Unable to connect to weather service.");
//   } else if(res.body.err){
//     console.log(res.body.err)
//   } else{
//       console.log(res.body.daily.data[0].summary);
//   }
// });
