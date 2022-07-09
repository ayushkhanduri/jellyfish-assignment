// no point of using redux for such a small app, this file maintains the global state of the app
import { createContext, FC, useReducer } from 'react';
import { APP_ACTIONS } from '../shared/actions';

const appInitState: AppState.Store = {
    loader: false,
    error: false,
    weatherInfo: null,
    forecastInfo: null
}

export const AppContext = createContext({
    ...appInitState
} as ReduxType.ContextType<AppState.Store>)


export const AppReducer = (initState = appInitState, action: ReduxType.Action<AppState.Store>): AppState.Store => {
    switch (action.type) {
        case APP_ACTIONS.SET_WEATHER_INFO: {
            return {
                ...initState,
                weatherInfo: action.payload.weatherInfo
            }
        }
        case APP_ACTIONS.FETCH_WEATHER_INFO: {
            return {
                ...initState,
                loader: true
            }
        }
        case APP_ACTIONS.WEATHER_INFO_SUCCESS: {
            return {
                ...initState,
                loader: false,
                error: false
            }
        }
        case APP_ACTIONS.WEATHER_INFO_ERROR: {
            return {
                ...initState,
                loader: false,
                error: true
            }
        }
        case APP_ACTIONS.SET_WEATHER_FORECAST: {
            return {
                ...initState,
                loader: false,
                error: false,
                forecastInfo: action.payload.forecastInfo
            }
        }

        default: {
            return initState
        }
    }
}
export const AppProvider: FC<SharedCustom.AuxProps> = ({
    children
}) => {
    const [AppState, dispatch] = useReducer(AppReducer, appInitState);
    return (
        <AppContext.Provider value={{
            dispatch: dispatch,
            ...AppState
        }}>
            {
                children
            }
        </AppContext.Provider>
    )
}