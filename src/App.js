import React, { useEffect, useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import DeadWorker from "./components/DeadWorker";
import "./app.css";
import axios from "axios";

function App() {
  const [workers, setWorkers] = useState([]);
  const [deadWorkerName, setDeadWorkerName] = useState([]);

  useEffect(() => {
    fetchData();
    setupDeadWorkerName();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/qp5x7acdh0nszyqya7g6u724qknr7vp40rzq6ee7vr3lxkcnmnjv6q53g4zfh/"
      );
      const data = response.data.result.workers;
      const sortedWorkers = data.sort((a, b) =>
        a.worker.localeCompare(b.worker, undefined, { sensitivity: "base" })
      );
      setWorkers(sortedWorkers);
    } catch (error) {
      console.log(error);
    }
  };

  const setupDeadWorkerName = async () => {
    try {
      const deadWorkersNameTemp = workers.map((item) => item.worker);
      setDeadWorkerName(deadWorkersNameTemp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        <div className="container">
          <DeadWorker deadWorkerName={deadWorkerName} />
          {workers.map((worker, index) => (
            <Box key={`BOX ${index}`} worker={worker} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
