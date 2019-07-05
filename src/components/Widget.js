import React from 'react';
import moment from 'moment';
import { Card } from 'antd';
import OpenWeatherMap from '../services/OpenWeatherMap';

const Widget = ({ data }) => {
    const {
        weather: [ { icon, main } ]
    } = data;

    return (
        <Card title={ `Weather in ${ data.name }, ${ data.sys.country }` }>
            <div>
                <img
                    src={ OpenWeatherMap.getIconSrc(icon) }
                    alt={ main }
                />
                <span>{ data.main.temp } °F</span>
            </div>
            <p>Weather: { main }</p>
            <p>Pressure: { data.main.pressure } hpa</p>
            <p>Wind speed: { data.wind.speed } m/h</p>
            <p>Sunrise: { moment(data.sys.sunrise * 1000).format('HH.mm') }</p>
            <p>Sunset: { moment(data.sys.sunset * 1000).format('HH.mm') }</p>
        </Card>
    )
};

export default Widget;