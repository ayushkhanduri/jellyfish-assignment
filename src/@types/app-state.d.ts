export as namespace AppState;

export interface Store {
    weatherInfo: WeatherApiTypes.ICurrentWeatherResponse;
    forecastInfo: WeatherApiTypes.IForecastResponse
    loader: boolean;
    error: boolean
}