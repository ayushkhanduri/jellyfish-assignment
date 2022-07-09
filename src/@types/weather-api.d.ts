export as namespace WeatherApiTypes;

export type ICoordinates = {
    lon: number;
    lat: number
}

export type IWeather = {
    id: number,
    main: IWeatherTypes,
    description: string,
    icon: string
}

export type IMain = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}

export type ISys = {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

export type IWind = {
    speed: number,
    deg: number,
    gust: number
}

export type ICloud = {
    all: number
}
export type ICurrentWeatherResponse = {
    coord: ICoordinates
    weather: IWeather[],
    base: string,
    main: IMain,
    visibility: number,
    wind: IWind,
    clouds: ICloud,
    dt: number,
    "sys": ISys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export type IForecastItem = {
    dt: number,
    main: IMain & {
        temp_kf: number
    },
    weather: IWeather[],
    clouds: ICloud,
    wind: IWind,
    visibility: number,
    pop: number,
    sys: {
        pod: string
    },
    dt_txt: string
}

export type ICity = {
    id: number,
    name: string,
    coord: ICoordinates,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}
export type IForecastResponse = {
    cod: string,
    message: number,
    cnt: number,
    list: IForecastItem[],
    city: ICity
}

type IWeatherTypes = 'Clouds' | 'Clear' | 'Rain' | 'Snow' ; // KEEP ON ADDING OTHER STRINGS AND UPDATE THE WEATHER_ICON OBJECT