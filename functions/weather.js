const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  try {
    const latLongitude = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.city},${event.queryStringParameters.state},${event.queryStringParameters.country}&appid=${process.env.OPEN_WEATHER_API_KEY}`);

    const latLongJson = await latLongitude.json();
    const lat = latLongJson[0].lat;
    const lon = latLongJson[0].lon;

    // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`);

    const data = await response.json();

    return { 
      statusCode: 200, 

      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
