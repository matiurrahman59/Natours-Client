import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// internal import
import logo from '../../assets/images/logo-white.png';
import { selectCurrentUser } from '../../store/user/user-selector';
import { logOutCurrentUser } from '../../store/user/user.action';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const logOutUser = () => {
    dispatch(logOutCurrentUser());
  };

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
        {currentUser ? (
          <>
            <button className='nav__el' onClick={logOutUser}>
              Log Out
            </button>
            <Link to='/login' className='nav__el'>
              <img
                src={`/images/users/${currentUser.photo}`}
                alt={currentUser.name}
                className='nav__user-img'
              />
              <span onClick={() => console.log(currentUser.name)}>
                {currentUser.name.split(' ')[0]}
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link to='/login' className='nav__el'>
              Log in
            </Link>
            <Link to='/signup' className='nav__el nav__el--cta'>
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
