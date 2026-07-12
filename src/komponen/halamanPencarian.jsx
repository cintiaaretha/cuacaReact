import { useState, useMemo } from 'react'
import Header from './header'
import './halamanPencarian.css'

export default function HalamanPencarian({
  wilayah,
  pilihWilayah,
}) {
  const [pencarian, setPencarian] = useState('')

  const hasilPencarian = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase()

    if (!kataKunci) return wilayah

    return wilayah.filter((item) =>
      item.name.toLowerCase().includes(kataKunci)
    )
  }, [wilayah, pencarian])

  return (
    <div className="search-screen">
      <Header
        title="Cuaca DIY"
        subtitle="Cari lalu pilih kabupaten/kota di Daerah Istimewa Yogyakarta."
      />

      <div className="search-box">
        <span className="search-box__icon">🔍</span>

        <input
          type="text"
          className="search-box__input"
          placeholder="Cari kabupaten/kota..."
          value={pencarian}
          onChange={(e) => setPencarian(e.target.value)}
        />

        {pencarian && (
          <button
            type="button"
            className="search-box__clear"
            onClick={() => setPencarian('')}
          >
            ✕
          </button>
        )}
      </div>

      {hasilPencarian.length === 0 ? (
        <p className="search-screen__empty">
          Wilayah "{pencarian}" tidak ditemukan.
        </p>
      ) : (
        <ul className="region-list">
          {hasilPencarian.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="region-item"
                onClick={() => pilihWilayah(item)}
              >
                <span className="region-item__icon">📍</span>

                <span className="region-item__name">
                  {item.name}
                </span>

                <span className="region-item__arrow">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}