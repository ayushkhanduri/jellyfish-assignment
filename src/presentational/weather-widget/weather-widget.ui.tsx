import { FC } from "react";

type IWeatherWidgetUI = {
    temperature: number;
    cityName: string;
    weatherType: WeatherApiTypes.IWeatherTypes;
}



const WEATHER_ICON = {
    'Clouds': 'wi-icon-802',
    'Clear': 'wi-icon-800',
    'Rain': 'wi-icon-501',
    'Snow': 'wi-icon-600'
}

const getIcon = (weatherType: WeatherApiTypes.IWeatherTypes) => {
    console.log(weatherType);
    return WEATHER_ICON[weatherType];
}
export const WeatherWidgetUI: FC<IWeatherWidgetUI> = (
    {
        temperature,
        cityName,
        weatherType
    }
) => (
    <div className='weather_view' id='weather-view'>
        <h3> {cityName}</h3>
        <div className=''>
            <i className={"wi "+ getIcon(weatherType)}></i>
            <p className='temperature'>{temperature}</p>
        </div>
    </div>
)