// const request = require("request");

// const geocode = (address, callback) => {
//   const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZ21vbmV5bWFzdGVyMjQiLCJhIjoiY2p1MW8xbWEwMDNubjQ5bGs5ZTZ3enU2cCJ9.XHZGOr73QgwQmP5ZavMGNA";

//   request({ url: url, json: true}, (err, res) => {
//     if(err){
//       callback("Unable to connect to location services.", undefined);
//     } else if(res.body.features.length === 0){
//       callback("Unable to find location", undefined)
//     } else{
//       callback(undefined, {
//         lon: res.body.features[0].center[0],
//         lat: res.body.features[0].center[1],
//         location: res.body.features[0].place_name
//       })
//     }
//   })
// };

// module.exports = geocode;







const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode






















//geocoding

// const geo = "https://api.mapbox.com/geocoding/v5/mapbox.places/LoAngeles.json?access_token=pk.eyJ1IjoiZ21vbmV5bWFzdGVyMjQiLCJhIjoiY2p1MW8xbWEwMDNubjQ5bGs5ZTZ3enU2cCJ9.XHZGOr73QgwQmP5ZavMGNA";

// request({url: geo, json: true}, (err, res) => {
//   if(err){
//     console.log(err);
//   } else if(res.body.features.length === 0){
//     console.log("Unable to find location");
//   } else {
//     const lon = res.body.features[0].center[0];
//     const lat = res.body.features[0].center[1];
//     console.log(lon, lat);
//   }
// });
