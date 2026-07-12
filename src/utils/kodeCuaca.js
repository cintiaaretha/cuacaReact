const KODE_CUACA = {
  0: { label: 'Cerah', icon: '☀️' },
  1: { label: 'Cerah Berawan', icon: '🌤️' },
  2: { label: 'Berawan Sebagian', icon: '⛅' },
  3: { label: 'Berawan Tebal', icon: '☁️' },
  45: { label: 'Berkabut', icon: '🌫️' },
  51: { label: 'Gerimis Ringan', icon: '🌦️' },
  53: { label: 'Gerimis Sedang', icon: '🌦️' },
  55: { label: 'Gerimis Lebat', icon: '🌧️' },
  61: { label: 'Hujan Ringan', icon: '🌧️' },
  63: { label: 'Hujan Sedang', icon: '🌧️' },
  65: { label: 'Hujan Lebat', icon: '🌧️' },
  80: { label: 'Hujan Lokal Ringan', icon: '🌦️' },
  81: { label: 'Hujan Lokal Sedang', icon: '🌧️' },
  82: { label: 'Hujan Lokal Sangat Lebat', icon: '⛈️' },
  95: { label: 'Badai Petir', icon: '⛈️' },
}

export function ambilInfoCuaca(kode) {
  return KODE_CUACA[kode] ?? {
    label: 'Kondisi Cuaca Tidak Diketahui',
    icon: '❓'
  }
}