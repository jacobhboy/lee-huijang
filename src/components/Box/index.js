import "./style.css"

export default function Box({worker, h1, h3, h6, h12, h24, seen}) {
    return (
        <div className="box">
            <h1>{worker}</h1>
            <p>{h1}</p>
            <p>{h3}</p>
            <p>{h6}</p>
            <p>{h12}</p>
            <p>{h24}</p>
            <p>{seen}</p>
        </div>
    )
}