const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

function formatJam(isoString) {
  if (!isoString) return null
  const [, jam] = isoString.split('T')
  return jam ?? null
}

export async function ambilDataCuaca({ latitude, longitude }) {
  const parameter = new URLSearchParams({
    latitude,
    longitude,
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset',
    forecast_days: '6',
    timezone: 'Asia/Bangkok', // WIB (GMT+7) = zona waktu Yogyakarta
  })
  const url = `${BASE_URL}?${parameter.toString()}`
  const respon = await fetch(url)

  if (!respon.ok) {
    throw new Error(`Gagal mengambil data cuaca (status ${respon.status})`)
  }

  const data = await respon.json()

  if (!data.current) {
    throw new Error('Format data cuaca tidak sesuai')
  }

  const cuaca = {
    suhu: data.current.temperature_2m,
    suhuTerasa: data.current.apparent_temperature,
    kodeCuaca: data.current.weather_code,
    kelembapan: data.current.relative_humidity_2m,
    kecepatanAngin: data.current.wind_speed_10m,
    // is_day dari Open-Meteo -> 1 = siang, 0 = malam
    isMalam: data.current.is_day === 0,
    matahariTerbit: formatJam(data.daily?.sunrise?.[0]),
    matahariTerbenam: formatJam(data.daily?.sunset?.[0]),
  }

  let forecast = []

  if (data.daily?.time) {
    // Lewati index 0 (hari ini) karena sudah ditampilkan di CardCuaca utama
    forecast = data.daily.time.slice(1).map((tanggal, i) => {
      const index = i + 1
      const suhuMax = data.daily.temperature_2m_max[index]
      const suhuMin = data.daily.temperature_2m_min[index]

      return {
        hari: NAMA_HARI[new Date(tanggal).getDay()],
        kodeCuaca: data.daily.weather_code[index],
        suhu: suhuMax,
        suhuMin,
      }
    })
  }

  return { ...cuaca, forecast }
}