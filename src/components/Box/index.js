import "./style.css";

export default function Box({ worker }) {
  return (
    <div className="box">
      <h1>
        <span className="pTitle">name: </span>
        {worker.worker}
      </h1>
      <p>
        <span className="pTitle">hashRate1: </span>
        {worker.hashrate}
      </p>
      <p>
        <span className="pTitle">hashRate3: </span>
        {worker.hashrate3}
      </p>
      <p>
        <span className="pTitle">hashRate6: </span>
        {worker.hashrate6}
      </p>
      <p>
        <span className="pTitle">hashRate12: </span>
        {worker.hashrate12}
      </p>
      <p>
        <span className="pTitle">hashRate24: </span>
        {worker.hashrate24}
      </p>
      <p>
        <span className="pTitle">connections: </span>
        {worker.connections}
      </p>
    </div>
  );
}
