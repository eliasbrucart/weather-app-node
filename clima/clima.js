const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=14beb2edd7c90114fadb9308dbf4927f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}