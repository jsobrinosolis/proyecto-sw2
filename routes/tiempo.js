const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {location: 'torrelodones', format: 'json', u: 'f'},
    headers: {
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
        'X-RapidAPI-Key': '4c76dd4318msh16b6c24ad054e42p1ff7f9jsn78c10b080470'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});