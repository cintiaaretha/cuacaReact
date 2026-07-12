import './visualCuaca.css'

export default function VisualCuaca({ tipe }) {
  switch (tipe) {
    case 'cerah':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-sun" />
        </div>
      )

    case 'cerah-malam':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-moon" />
          <div className="wx-stars">
            {
              Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="wx-star" style={{ "--i": i }} />
              ))
            }
          </div>
        </div>
      )

    case 'cerah-berawan':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-sun wx-sun--small" />
          <div className="wx-cloud wx-cloud--a" />
          <div className="wx-cloud wx-cloud--b" />
        </div>
      )

    case 'cerah-berawan-malam':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-moon wx-moon--small" />
          <div className="wx-stars wx-stars--few">
            {
              Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="wx-star" style={{ "--i": i }} />
              ))
            }
          </div>
          <div className="wx-cloud wx-cloud--a wx-cloud--night" />
          <div className="wx-cloud wx-cloud--b wx-cloud--night" />
        </div>
      )

    case 'berawan':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-cloud wx-cloud--a" />
          <div className="wx-cloud wx-cloud--b" />
          <div className="wx-cloud wx-cloud--c" />
        </div>
      )

    case 'berawan-malam':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-cloud wx-cloud--a wx-cloud--night" />
          <div className="wx-cloud wx-cloud--b wx-cloud--night" />
          <div className="wx-cloud wx-cloud--c wx-cloud--night" />
        </div>
      )

    case 'berkabut':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-fog-band wx-fog-band--1" />
          <div className="wx-fog-band wx-fog-band--2" />
          <div className="wx-fog-band wx-fog-band--3" />
        </div>
      )

    case 'berkabut-malam':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-fog-band wx-fog-band--1" />
          <div className="wx-fog-band wx-fog-band--2" />
          <div className="wx-fog-band wx-fog-band--3" />
        </div>
      )

    case 'hujan':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-cloud wx-cloud--a" />
          <div className="wx-cloud wx-cloud--b" />
          <div className="wx-rain">
            {
              Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className="wx-raindrop"
                  style={{ "--i": i }}
                />
              ))
            }
          </div>
        </div>
      )

    case 'badai':
      return (
        <div className="wx-deco" aria-hidden="true">
          <div className="wx-cloud wx-cloud--dark-a" />
          <div className="wx-cloud wx-cloud--dark-b" />
          <div className="wx-bolt" />
          <div className="wx-rain wx-rain--storm">
            {
              Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="wx-raindrop"
                  style={{ "--i": i }}
                />
              ))
            }
          </div>
        </div>
      )

    default:
      return null
  }
}