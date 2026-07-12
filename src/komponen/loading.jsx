import './loading.css'

export default function Loading({ message = 'Memuat data cuaca...' }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__spinner" />
      <p className="loading__text">{message}</p>
    </div>
  )
}
