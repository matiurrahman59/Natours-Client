import { Link } from 'react-router-dom';

// components
import logo from '../../assets/images/logo-white.png';

// styles
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link to='/' className='nav__el'>
          All tours
        </Link>
      </nav>
      <div className='header__logo'>
        <img src={logo} alt='Natours logo' />
      </div>
      <nav className='nav nav--user'>
        <Link to='/login' className='nav__el'>
          Log in
        </Link>
        <Link to='/signup' className='nav__el nav__el--cta'>
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
