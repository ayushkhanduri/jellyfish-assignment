import { FC } from "react"
import { Utils } from "../../shared/utils"

type IPredictionWidgetUI = {
    limit: number
    rows: WeatherApiTypes.IForecastItem[]
}

export const PredictionWidgetUI: FC<IPredictionWidgetUI> = (
    {
        rows=[], limit
    }
) => (
    <div className="predication-widget" style={{display: "flex"}}>
        {
            rows?.slice(0, 3)?.map(row => (
                <div key={row.dt} style={{ width: `${100 / limit}%` }}>
                    <h4>{Utils.getDayFromUTC(row.dt)}</h4>
                    <i></i>
                    <div className="max">{row.main.temp_max}</div>
                    <div className="min">{row.main.temp_min}</div>
                </div>
            ))
        }

    </div>
)