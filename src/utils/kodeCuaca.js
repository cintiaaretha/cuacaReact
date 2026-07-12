import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiFog,
  WiRain,
  WiShowers,
  WiThunderstorm,
} from 'react-icons/wi'

const KODE_CUACA = {
  0: { label: 'Cerah', icon: WiDaySunny },
  1: { label: 'Cerah Berawan', icon: WiDayCloudy },
  2: { label: 'Berawan Sebagian', icon: WiCloud },
  3: { label: 'Berawan Tebal', icon: WiFog },
  45: { label: 'Berkabut', icon: WiFog },
  51: { label: 'Gerimis Ringan', icon: WiShowers },
  53: { label: 'Gerimis Sedang', icon: WiShowers },
  55: { label: 'Gerimis Lebat', icon: WiRain },
  61: { label: 'Hujan Ringan', icon: WiRain },
  63: { label: 'Hujan Sedang', icon: WiRain },
  65: { label: 'Hujan Lebat', icon: WiRain },
  80: { label: 'Hujan Lokal Ringan', icon: WiShowers },
  81: { label: 'Hujan Lokal Sedang', icon: WiRain },
  82: { label: 'Hujan Lokal Sangat Lebat', icon: WiThunderstorm },
  95: { label: 'Badai Petir', icon: WiThunderstorm },
}

export function ambilInfoCuaca(kode) {
  return KODE_CUACA[kode] ?? {
    label: 'Kondisi Cuaca Tidak Diketahui',
    icon: WiCloud
  }
}