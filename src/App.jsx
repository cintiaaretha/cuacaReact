import { useState } from 'react'
import HalamanPencarian from './komponen/halamanPencarian'
import Dashboard from './komponen/dashboard'
import { WILAYAH } from './data/wilayah'
import './styles/App.css'

export default function App() {
  const [wilayahDipilih, setWilayahDipilih] = useState(null)

  const pilihWilayah = (wilayah) => {
    setWilayahDipilih(wilayah)
  }

  const kembali = () => {
    setWilayahDipilih(null)
  }

  return (
    <div className="app">
      <div className="app__container">
        {wilayahDipilih ? (
          <Dashboard
            wilayah={wilayahDipilih}
            onBack={kembali}
          />
        ) : (
          <HalamanPencarian
            wilayah={WILAYAH}
            pilihWilayah={pilihWilayah}
          />
        )}

        <footer className="app__footer">
          Data cuaca oleh <strong>Open-Meteo</strong> · 124250032
        </footer>
      </div>
    </div>
  )
}