import "./style.css";

let list = [
  "3070frti",
  "66XT01",
  "66XT02",
  "67XT01",
  "67xt3g51n",
  "67xt5g2",
  "67xt5g51n",
  "67XT7gpu1",
  "8n1",
  "8n10",
  "8n11",
  "8n12",
  "8n13",
  "8n2",
  "8n3",
  "8n4",
  "8n5",
  "8N6",
  "8n7",
  "8n8",
  "8n9",
  "H801",
  "H802",
  "L01",
  "L02",
  "L03",
  "L04",
  "LOS",
  "L06",
  "L07",
  "n04",
  "n1",
  "N10",
  "n11",
  "n12",
  "n13",
  "n14",
  "n15",
  "n3",
  "n5",
  "n6",
  "n7",
  "n8",
  "n9",
  "nL2",
];

export default function DeadWorker({ livingWorkerName }) {
  let workerList = list.filter((x) => !livingWorkerName.includes(x));

  return (
    <div className="deadWorker">
      {workerList.map((worker) => (
        <p className="worker">{worker}</p>
      ))}
    </div>
  );
}
