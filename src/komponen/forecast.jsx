import { ambilInfoCuaca } from '../utils/kodeCuaca'
import './forecast.css'

export default function Forecast({ data }) {
  return (
    <div className="forecast">
      <h4>
        Prakiraan Cuaca
      </h4>

      <div className="forecast-list">
        {data.map((hari,index)=>{
          const info = ambilInfoCuaca(hari.kodeCuaca)

          return (
            <div
              className="forecast-item"
              key={index}>
              <p> {hari.hari} </p>
              <span> {info.icon} </span>
              <b> {Math.round(hari.suhu)}° </b>
              {typeof hari.suhuMin === 'number' && (
                <small>
                  {Math.round(hari.suhuMin)}°
                </small>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}