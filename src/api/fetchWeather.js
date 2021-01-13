import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '8ce67921aca7a2a887f7def3cc0e7741';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }

    });
    return data;
}