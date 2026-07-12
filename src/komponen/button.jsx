import './button.css'

export default function Button({
  children,
  onClick,
  nonaktif = false,
  varian = 'primary',
}) {
  return(
    <button
      type="button"
      className={`btn btn--${varian}`}
      onClick={onClick}
      disabled={nonaktif}
    >
      {children}
    </button>
  )
}