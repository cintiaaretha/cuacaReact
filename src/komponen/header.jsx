import Button from './button'
import './header.css'

export default function Header({
  title,
  subtitle,
  onBack,
  onRefresh,
  isRefreshing,
  lastUpdated,
}) {
  
  if (onBack) {
    return (
      <header className="header header--compact">
        <button className="header__back" onClick={onBack} type="button" aria-label="Kembali">
          ←
        </button>
        <div className="header__compact-info">
          <h1 className="header__compact-title">{title}</h1>
          {lastUpdated && <span className="header__updated">Diperbarui {lastUpdated}</span>}
        </div>
        {onRefresh && (
          <Button onClick={onRefresh} disabled={isRefreshing} variant="ghost">
            <span className={isRefreshing ? 'header__refresh-icon header__refresh-icon--spin' : 'header__refresh-icon'}>
              Refresh
            </span>
          </Button>
        )}
      </header>
    )
  }

  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__badge"> Cuaca Terkini</span>
        <h1 className="header__title">{title}</h1>
        {subtitle && <p className="header__subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}
