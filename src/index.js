// AJAX API call for Fetch weather forecast JSON data useing cors-anywhere.herokuapp.com PROXY for avoid same origin policy error
// Fetch: https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/  44418 -> location ID

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(fetchResult => {
        //console.log(fetchResult);
        return fetchResult.json();
    })
    .then(jsonData => {
        //console.log(jsonData);
        const today = jsonData.consolidated_weather[0];
        console.log(`Temperature in ${jsonData.title} stay between ${today.min_temp.toFixed(1)} and ${today.max_temp.toFixed(1)}.`);
    })
    .catch(error => {
        console.log(`ERROR! Cant get weather data: ${error}`)
    });
}
getWeather(44418);
getWeather(2487956);

// With async await
async function getWeatherAW(woeid) {
    try{
        const fetchResult = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const jsonData = await fetchResult.json();
        const today = jsonData.consolidated_weather[0]; 

        console.log(`Temperature in ${jsonData.title} stay between ${today.min_temp.toFixed(1)} and ${today.max_temp.toFixed(1)}.`);
    
        return jsonData;

    }catch(error){
        alert(`Something went wrong! Error: ${error}`);
    }
}
getWeatherAW(44418);
getWeatherAW(2487956);

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
console.log('No wait for London data will undefined: ', dataLondon);
