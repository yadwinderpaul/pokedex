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

function Dpad() {
  return (
    <div className="dpad">
      <button tabIndex={-1} className="center"></button>
      <button tabIndex={-1} className="up">▲</button>
      <button tabIndex={-1} className="down">▼</button>
      <button tabIndex={-1} className="left">◀</button>
      <button tabIndex={-1} className="right">▶</button>
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

function Gameboy({ children }: Props) {
  return (
    <div className="gameboy">
      <Speaker />
      <Dpad />
      <div className="screen-container">
        <div tabIndex={-1} className="screen">{children}</div>
      </div>
      <Actions />
    </div>
  );
}

export default Gameboy;
