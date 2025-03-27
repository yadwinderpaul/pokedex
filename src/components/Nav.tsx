import { Link, useLocation } from 'react-router';
import './Nav.scss';

function Nav() {
  const location = useLocation();

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="nav">
      {location.pathname === '/' && (
        <Link to="/" tabIndex={-1} className="active">
          <button>Home</button>
        </Link>
      )}
      {location.pathname !== '/' && (
        <a onClick={handleBackClick} tabIndex={-1}>
          <button>{'< Back'}</button>
        </a>
      )}
    </div>
  );
}

export default Nav;
