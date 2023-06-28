import React, { useEffect, useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import DeadWorker from "./components/DeadWorker";
import "./app.css";
import axios from "axios";

function App() {
  const [workers, setWorkers] = useState([]);
  const [livingWorkerName, setLivingWorkerName] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setupLivingWorkerName();
  }, [workers]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://kaspa.acc-pool.pw/api/qp5x7acdh0nszyqya7g6u724qknr7vp40rzq6ee7vr3lxkcnmnjv6q53g4zfh/"
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

  const setupLivingWorkerName = async () => {
    try {
      const i = workers.map((item) => item.worker);
      console.log(i);
      setLivingWorkerName(i);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <DeadWorker livingWorkerName={livingWorkerName} />
        {workers.map((worker, index) => (
          <Box key={`BOX ${index}`} worker={worker} />
        ))}
      </div>
    </div>
  );
}

export default App;
