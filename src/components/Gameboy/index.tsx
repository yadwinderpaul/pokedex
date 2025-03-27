import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import pokeballLogo from '/pokeball.svg';
import './index.scss';

interface Props {
  children: React.ReactNode;
}

function Speaker() {
  return (
    <div className="speaker">
      <div className="hole" id="hole12"></div>
      <div className="hole" id="hole13"></div>
      <div className="hole" id="hole21"></div>
      <div className="hole" id="hole22"></div>
      <div className="hole" id="hole23"></div>
      <div className="hole" id="hole24"></div>
      <div className="hole" id="hole31"></div>
      <div className="hole" id="hole32"></div>
      <div className="hole" id="hole33"></div>
      <div className="hole" id="hole34"></div>
      <div className="hole" id="hole42"></div>
      <div className="hole" id="hole43"></div>
    </div>
  );
}

function Dpad(props: {
  onUpClick: () => void;
  onDownClick: () => void;
  onLeftClick: () => void;
  onRightClick: () => void;
}) {
  return (
    <div className="dpad">
      <button tabIndex={-1} className="center"></button>
      <button tabIndex={-1} className="up" onClick={props.onUpClick}>▲</button>
      <button tabIndex={-1} className="down" onClick={props.onDownClick}>▼</button>
      <button tabIndex={-1} className="left" onClick={props.onLeftClick}>◀</button>
      <button tabIndex={-1} className="right" onClick={props.onRightClick}>▶</button>
    </div>
  );
}

function Actions() {
  return (
    <div className="actions">
      <button tabIndex={-1} className="action-A">A</button>
      <button tabIndex={-1} className="action-B">B</button>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={pokeballLogo} alt="Pokedex logo" />
    </div>
  );
}

function Gameboy({ children }: Props) {
  const location = useLocation();
  const screen = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screen.current) {
      screen.current.scrollTo(0, 0);
    }
  }, [location]);

  const handleUpClick = () => screen.current?.scrollTo(0, screen.current.scrollTop - 100);
  const handleDownClick = () => screen.current?.scrollTo(0, screen.current.scrollTop + 100);
  const handleLeftClick = () => window.history.back();
  const handleRightClick = () => window.history.forward();
  
  return (
    <div className="gameboy">
      <Speaker />
      <Dpad
        onUpClick={handleUpClick}
        onDownClick={handleDownClick}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
      <div className="screen-container">
        <div tabIndex={-1} className="screen" ref={screen}>{children}</div>
      </div>
      <Actions />
      <Logo />
    </div>
  );
}

export default Gameboy;
