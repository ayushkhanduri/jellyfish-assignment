import { useCallback, useContext } from 'react';
import { CityDropdownComponent } from './components';
import { PredictionWidgetUI, WeatherWidgetUI } from './presentational';
import { LoaderUI } from './presentational/loader/loader.ui';
import { AppContext } from './providers/app.providers';
import { APP_ACTIONS } from './shared/actions';
import { Utils } from './shared/utils';
import { WeatherApi } from './shared/weather-api.service';

function App() {
  const appContext = useContext(AppContext);
  const fetchCityData = useCallback(async (city: SharedCustom.ICity) => {
    try {
      appContext.dispatch({
        type: APP_ACTIONS.FETCH_WEATHER_INFO
      });
      const responses: [WeatherApiTypes.ICurrentWeatherResponse, WeatherApiTypes.IForecastResponse] = await Promise.all([WeatherApi.fetchCurrentWeather(city.lat, city.lon), WeatherApi.fetchWeatherForecast(city.lat, city.lon)]);
      appContext.dispatch({
        type: APP_ACTIONS.WEATHER_INFO_SUCCESS
      });
      appContext.dispatch({
        type: APP_ACTIONS.SET_WEATHER_INFO,
        payload: {
          ...appContext,
          weatherInfo: responses[0]
        }
      })
      appContext.dispatch({
        type: APP_ACTIONS.SET_WEATHER_FORECAST,
        payload: {
          ...appContext,
          forecastInfo: responses[1]
        }
      })
    } catch (e) {
      console.log(e);
      appContext.dispatch({
        type: APP_ACTIONS.WEATHER_INFO_ERROR
      });
    }
  }, [appContext]);

  const onCitySelected = useCallback((city: SharedCustom.ICity) => {
    fetchCityData(city);
  }, []);

  return (
    <div className="App">
      <h3>Select city name</h3>

      <CityDropdownComponent onCitySelected={onCitySelected} />
      {
        !appContext.loader ? (
          <div>
            <WeatherWidgetUI weatherType={appContext?.weatherInfo?.weather[0]?.main} cityName={appContext?.weatherInfo?.name} temperature={Utils.kelvinToCelsius(appContext?.weatherInfo?.main?.temp)}/>
            <PredictionWidgetUI limit={3} rows={appContext?.forecastInfo?.list}/>
          </div>
        ) : <LoaderUI />
      }
    </div>
  );
}

export default App;
