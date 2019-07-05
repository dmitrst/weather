import axios from 'axios';
import config from '../config';

const axiosClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

const defaultParams = {
    APPID: config.owmAppid,
    units: config.owmUnits,
};

const OpenWeatherMap = {
    getIconSrc: icon => `http://openweathermap.org/img/wn/${icon}@2x.png`,

    /**
     * Example of API response here https://openweathermap.org/current.
     * */
    byCityName: cityName => axiosClient.get('/', {
        params: {
            ...defaultParams,
            q: cityName,
        }
    }),
    byCityId: cityId => axiosClient.get('/', {
        params: {
            ...defaultParams,
            id: cityId,
        }
    })
};

export default OpenWeatherMap;
