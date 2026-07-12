import './errorMessage.css'

export default function PesanError({ pesan, cobaLagi }) {
  return (
    <div className="error-message">
      <p><strong>Gagal memuat data cuaca</strong></p>
      <p>{pesan}</p>

      {cobaLagi && (
        <button onClick={cobaLagi}>
          Coba Lagi
        </button>
      )}
    </div>
  )
}