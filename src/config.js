export default {
    interval: parseInt(process.env.REACT_APP_INTERVAL) || 15000,
    owmAppid: process.env.REACT_APP_OWM_APPID || '94232ce3711c4757ccef73f0c461d603',
    owmUnits: process.env.REACT_APP_OWM_UNITS || 'imperial'
}