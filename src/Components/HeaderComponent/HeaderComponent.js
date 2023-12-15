import './HeaderComponent.scss'
import '../../img/bold-logo.svg'

const HeaderComponent = () => (
  <header className='header-component'>
    <a href='#'>
      <svg
        viewBox='0 0 135 48'
        height='20'
        width='70'
        fill='#e5e7ef'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M40.458 32.56h33.203C72.863 41.21 65.724 48 57.058 48c-8.665 0-15.803-6.79-16.601-15.44h.001zM16.77 13.98v33.943c8.456-.816 15.1-8.116 15.1-16.973 0-8.856-6.644-16.153-15.1-16.97zm40.29-.078c-8.664 0-15.803 6.794-16.602 15.443h33.203c-.798-8.65-7.937-15.443-16.603-15.443h.002zM0 26.292v21.71h13.524V0H0v26.292zM120.544 0v48h13.525V0h-13.525zm-18.248 30.952c0 1.078.102 2.13.291 3.153 1.357 7.38 7.382 13.1 14.81 13.817V13.979c-8.456.817-15.1 8.116-15.1 16.973h-.001zM80.501 48h13.524V0H80.501v48z'
        />
      </svg>
    </a>
    <nav className='nav-menu'>
      <a href='#'>Mi negocio</a>
      <a href='#'>Ayuda</a>
    </nav>
  </header>
)

export default HeaderComponent