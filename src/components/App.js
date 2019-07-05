import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, message } from 'antd';
import Search from './Search';
import Widget from './Widget';
import OpenWeatherMap from '../services/OpenWeatherMap';
import config from '../config';

const Header = styled(Layout.Header)`
    background: rgb(22, 82, 240);
    
`;
const Content = styled(Layout.Content)`
    background: #fff;
    padding: 50px;
    text-align: center;
`;
const Logo = styled.h3.attrs(props => ({
    children: 'Weather'
}))`
    color: #fff;
`;

message.config({
    top: 200
});

const App = () => {
    const [data, setData] = useState({ id: null });
    const [timer, setTimer] = useState(null);
    const onSearchSubmit = async cityName => {
        if (cityName.trim().length > 2) {
            try {
                setData((await OpenWeatherMap.byCityName(cityName)).data);
            }
            catch (e) {
                console.log(e.response);
                message.warning(e.response.data.message);
            }
        }
        else {
            message.warning('Enter at least 2 characters');
        }
    };

    useEffect(() => {
        if (timer) {
            clearInterval(timer);
        }
        if (data.id) {
            const timer = setInterval(async () => {
                setData((await OpenWeatherMap.byCityId(data.id)).data);
            }, config.interval);

            setTimer(timer)
        }
    }, [data.id]);

    return (
        <Layout>
            <Header>
                <Logo/>
            </Header>
            <Content>
                <Search onSearchSubmit={ onSearchSubmit } />
                { data.id && (
                    <Widget data={ data }/>
                ) }
            </Content>
        </Layout>
    );
};

export default App;
