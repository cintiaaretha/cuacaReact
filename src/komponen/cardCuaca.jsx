import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi'
import { ambilInfoCuaca } from '../utils/kodeCuaca'
import { ambilTemaCuaca } from '../utils/temaCuaca'
import VisualCuaca from './visualCuaca'
import Forecast from './forecast'
import './cardCuaca.css'

export default function CardCuaca({ name, cuaca, forecast, error }) {

  if (error || !cuaca) {
    return (
      <div className="weather-card weather-card--error">
        <h3>{name}</h3>
        <p>Data tidak tersedia</p>
      </div>
    )
  }

  const info = ambilInfoCuaca(cuaca.kodeCuaca)
  const tema = ambilTemaCuaca(cuaca.kodeCuaca, cuaca.isMalam)
  const icon = info.icon

  return (
    <div className={`weather-card ${tema.gradient}`}>

      <VisualCuaca tipe={tema.decoration} />

      <div className="weather-card__content">

        <div className="weather-card__top">
          <h3 className="weather-card__region">
            {name}
          </h3>

          <div className="weather-card__icon">
            {icon}
          </div>
        </div>

        <h1 className="weather-card__temp">
          {Math.round(cuaca.suhu)}°C
        </h1>

        <p className="weather-card__condition">
          {info.label}
        </p>

        {typeof cuaca.suhuTerasa === 'number' && (
          <p className="weather-card__feels-like">
            Terasa seperti {Math.round(cuaca.suhuTerasa)}°C
          </p>
        )}

        <div className="weather-card__glass">

          <div className="weather-card__stat">
            <WiHumidity className="weather-card__icon-small" />
            <span>Kelembapan: {cuaca.kelembapan}%</span>
          </div>

          <div className="weather-card__stat">
            <WiStrongWind className="weather-card__icon-small" />
            <span>Kecepatan Angin: {cuaca.kecepatanAngin} km/j</span>
          </div>

        </div>

        {(cuaca.matahariTerbit || cuaca.matahariTerbenam) && (

          <div className="weather-card__glass weather-card__glass--sun">

            {cuaca.matahariTerbit && (
              <div className="weather-card__stat">
                <WiSunrise className="weather-card__icon-small" />
                <span>Matahari Terbit: {cuaca.matahariTerbit}</span>
              </div>
            )}

            {cuaca.matahariTerbenam && (
              <div className="weather-card__stat">
                <WiSunset className="weather-card__icon-small" />
                <span>Matahari Terbenam: {cuaca.matahariTerbenam}</span>
              </div>
            )}

          </div>

        )}

        {forecast && (
          <Forecast data={forecast} />
        )}

      </div>
    </div>
  )
}