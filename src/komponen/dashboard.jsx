import { useState, useEffect, useCallback } from 'react'
import Header from './header'
import CardCuaca from './cardCuaca'
import Loading from './loading'
import PesanError from './errorMessage'
import { ambilDataCuaca } from '../api/apicuaca'
import './halamanPencarian.css'

export default function Dashboard({ wilayah, onBack }) {
  const [cuaca, setCuaca] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const loadCuaca = useCallback(
    async (refreshManual = false) => {
      if (refreshManual) {
        setIsRefreshing(true)
      } else {
        setIsLoading(true)
      }

      setError(null)

      try {
        const data = await ambilDataCuaca(wilayah)

        setCuaca(data)

        setLastUpdated(
          new Date().toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          })
        )
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan yang tidak diketahui.')
      } finally {
        setIsLoading(false)
        setIsRefreshing(false)
      }
    },
    [wilayah]
  )

    useEffect(() => {   
    loadCuaca() }, [loadCuaca]) 

  return (
    <div className="weather-room">
      <Header
        title={wilayah.name}
        onBack={onBack}
        onRefresh={() => loadCuaca(true)}
        isRefreshing={isRefreshing}
        lastUpdated={lastUpdated}
      />

      {isLoading && (
        <Loading pesan={`Memuat cuaca ${wilayah.name}...`} />
      )}

      {!isLoading && error && (
        <PesanError
          pesan={error}
          saatCobaLagi={() => loadCuaca()}
        />
      )}

      {!isLoading && !error && cuaca && (
        <CardCuaca
          name={wilayah.name}
          cuaca={cuaca}
          forecast={cuaca.forecast}
        />
      )}
    </div>
  )
}