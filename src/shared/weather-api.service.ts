import { HttpService } from "./http.service";

const { REACT_APP_WEATHER_API } = process.env;

export class WeatherApi {
    static async fetchCurrentWeather(lat: number, lon: number) {
        try {
            const response = await HttpService.get<WeatherApiTypes.ICurrentWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API}`);
            return Promise.resolve(response);
        }catch (e) {
            return Promise.reject(e);
        }
    }

    static async fetchWeatherForecast(lat: number, lon: number) {
        try {
            const response = await HttpService.get<WeatherApiTypes.IForecastResponse>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API}`);
            return Promise.resolve(response);
        }catch (e) {
            return Promise.reject(e);
        }
    }
}