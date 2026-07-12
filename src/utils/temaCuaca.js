const TEMA_CUACA = {
  cerah: {
    gradient: 'theme-clear',
    decoration: 'cerah',
  },

  cerahBerawan: {
    gradient: 'theme-partly-cloudy',
    decoration: 'cerah-berawan',
  },

  berawan: {
    gradient: 'theme-cloudy',
    decoration: 'berawan',
  },

  berkabut: {
    gradient: 'theme-fog',
    decoration: 'berkabut',
  },

  hujan: {
    gradient: 'theme-rain',
    decoration: 'hujan',
  },

  badai: {
    gradient: 'theme-storm',
    decoration: 'badai',
  },

  cerahMalam: {
    gradient: 'theme-clear-night',
    decoration: 'cerah-malam',
  },

  cerahBerawanMalam: {
    gradient: 'theme-partly-cloudy-night',
    decoration: 'cerah-berawan-malam',
  },

  berawanMalam: {
    gradient: 'theme-cloudy-night',
    decoration: 'berawan-malam',
  },

  berkabutMalam: {
    gradient: 'theme-fog-night',
    decoration: 'berkabut-malam',
  },
}

export function ambilTemaCuaca(kode, isMalam = false) {

  if (kode === 0)
    return isMalam ? TEMA_CUACA.cerahMalam : TEMA_CUACA.cerah

  if (kode === 1 || kode === 2)
    return isMalam ? TEMA_CUACA.cerahBerawanMalam : TEMA_CUACA.cerahBerawan

  if (kode === 3)
    return isMalam ? TEMA_CUACA.berawanMalam : TEMA_CUACA.berawan

  if (kode === 45)
    return isMalam ? TEMA_CUACA.berkabutMalam : TEMA_CUACA.berkabut

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(kode))
    return TEMA_CUACA.hujan

  if (kode === 95)
    return TEMA_CUACA.badai

  return {
    gradient: 'theme-default',
    decoration: 'cerah',
  }
}