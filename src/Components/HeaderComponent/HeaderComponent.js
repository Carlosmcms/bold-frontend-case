import './HeaderComponent.scss'
import HelpCircle from '../../IconComponents/HelpCircle/HelpCircle'
import BoldLogo from '../../IconComponents/BoldLogo/BoldLogo'

const HeaderComponent = () => (
  <header className='header-component'>
    <a href='#'>
      <BoldLogo />
    </a>
    <nav className='nav-menu'>
      <a href='#'>
        Mi negocio
      </a>
      <a href='#'>
        <span>
          Ayuda
          <HelpCircle />
        </span>
      </a>
    </nav>
  </header>
)

export default HeaderComponent
