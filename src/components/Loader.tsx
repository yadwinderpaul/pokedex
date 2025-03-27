import pokeballLogo from '/pokeball.svg';
import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <img src={pokeballLogo} alt="Loading" />
    </div>
  );
}

export default Loader;
