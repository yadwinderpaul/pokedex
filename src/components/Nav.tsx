import { Link, useLocation } from 'react-router';
import './Nav.scss';

function Nav() {
  const location = useLocation();

  const handleBackClick = () => {
    window.history.back();
  };

  const isHome = location.pathname === '/' && location.search === '';

  return (
    <div className="nav">
      {isHome && (
        <Link to="/" tabIndex={-1} className="active">
          <button className='button'>Home</button>
        </Link>
      )}
      {!isHome && (
        <a onClick={handleBackClick} tabIndex={-1}>
          <button className='button'>{'< Back'}</button>
        </a>
      )}
    </div>
  );
}

export default Nav;
