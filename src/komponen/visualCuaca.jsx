import './visualCuaca.css'

export default function VisualCuaca({ tipe }) {
  return (
    <div
      className={`wx-deco ${tipe.includes('malam') ? 'wx-deco--night' : ''}`}
      aria-hidden="true">
      {(() => {
        switch (tipe) {
          case 'cerah':
            return (
              <>
                <div className="wx-sun">
                  <div className="wx-sun-rays" />
                </div>

                <div className="wx-bird wx-bird--1">︵</div>
                <div className="wx-bird wx-bird--2">︵</div>
              </>
            )

          case 'cerah-malam':
            return (
              <>
                <div className="wx-moon" />
                <div className="wx-stars">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span
                      key={i}
                      className={`wx-star wx-star--${i % 3}`}
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
              </>
            )

          case 'cerah-berawan':
            return (
              <>
                <div className="wx-sun wx-sun--small">
                  <div className="wx-sun-rays" />
                </div>
                <div className="wx-cloud wx-cloud--a" />
                <div className="wx-cloud wx-cloud--b" />
                <div className="wx-bird wx-bird--1">︵</div>
              </>
            )

          case 'cerah-berawan-malam':
            return (
              <>
                <div className="wx-moon wx-moon--small" />
                <div className="wx-stars wx-stars--few">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className={`wx-star wx-star--${i % 3}`}
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
                <div className="wx-cloud wx-cloud--a wx-cloud--night" />
                <div className="wx-cloud wx-cloud--b wx-cloud--night" />
              </>
            )

          case 'berawan':
            return (
              <>
                <div className="wx-cloud wx-cloud--a" />
                <div className="wx-cloud wx-cloud--b" />
                <div className="wx-cloud wx-cloud--c" />
                <div className="wx-cloud wx-cloud--d" />
              </>
            )

          case 'berawan-malam':
            return (
              <>
                <div className="wx-stars wx-stars--few">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={`wx-star wx-star--${i % 3}`}
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
                <div className="wx-cloud wx-cloud--a wx-cloud--night" />
                <div className="wx-cloud wx-cloud--b wx-cloud--night" />
                <div className="wx-cloud wx-cloud--c wx-cloud--night" />
                <div className="wx-cloud wx-cloud--d wx-cloud--night" />
              </>
            )

          case 'berkabut':
          case 'berkabut-malam':
            return (
              <>
                <div className="wx-fog-band wx-fog-band--1" />
                <div className="wx-fog-band wx-fog-band--2" />
                <div className="wx-fog-band wx-fog-band--3" />
              </>
            )

          case 'hujan':
            return (
              <>
                <div className="wx-cloud wx-cloud--a" />
                <div className="wx-cloud wx-cloud--b" />
                <div className="wx-cloud wx-cloud--c" />
                <div className="wx-cloud wx-cloud--d" />
                <div className="wx-rain">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="wx-raindrop"
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
              </>
            )

          case 'hujan-malam':
            return (
              <>
                <div className="wx-moon wx-moon--small" />
                <div className="wx-stars wx-stars--few">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={`wx-star wx-star--${i % 3}`}
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
                <div className="wx-cloud wx-cloud--a wx-cloud--night" />
                <div className="wx-cloud wx-cloud--b wx-cloud--night" />
                <div className="wx-cloud wx-cloud--c wx-cloud--night" />
                <div className="wx-cloud wx-cloud--d wx-cloud--night" />
                <div className="wx-rain wx-rain--night">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="wx-raindrop"
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
              </>
            )

          case 'badai':
            return (
              <>
                <div className="wx-flash" />
                <div className="wx-cloud wx-cloud--dark-a" />
                <div className="wx-cloud wx-cloud--dark-b" />
                <div className="wx-cloud wx-cloud--d" />
                <div className="wx-bolt" />
                <div className="wx-rain wx-rain--storm">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className="wx-raindrop"
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
              </>
            )

          case 'badai-malam':
            return (
              <>
                <div className="wx-flash" />
                <div className="wx-moon wx-moon--small" />
                <div className="wx-stars wx-stars--few">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={`wx-star wx-star--${i % 3}`}
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
                <div className="wx-cloud wx-cloud--dark-a" />
                <div className="wx-cloud wx-cloud--dark-b" />
                <div className="wx-cloud wx-cloud--d wx-cloud--night" />
                <div className="wx-bolt" />
                <div className="wx-rain wx-rain--storm wx-rain--night">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className="wx-raindrop"
                      style={{ '--i': i }}
                    />
                  ))}
                </div>
              </>
            )

          default:
            return null
        }
      })()}
    </div>
  )
}