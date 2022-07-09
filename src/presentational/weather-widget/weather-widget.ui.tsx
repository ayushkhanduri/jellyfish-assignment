import { FC } from "react";

type IWeatherWidgetUI = {
    temperature: number;
    cityName: string
}
export const WeatherWidgetUI: FC<IWeatherWidgetUI> = (
    {
        temperature,
        cityName
    }
) => (
    <div className='weather_view' id='weather-view'>
        <h3> {cityName}</h3>
        <div className=''>
            <div className='logo'>{}</div>
            <p className='temperature'>{temperature}</p>
        </div>
    </div>
)