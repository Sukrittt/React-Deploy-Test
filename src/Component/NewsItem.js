import React from "react";

export default function NewsItem(props) {
  return (
    <div className="card m-5" style={{ color: "var(--bg-color)" }}>
      <img
        src={props.imageUrl}
        className="card-img-top image"
        alt="world_cup_image"
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.title}
          <span
            className="badge position-absolute top-0 translate-middle badge rounded-pill"
            style={{ left: "92%" }}
          >
            {props.source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{`${props.description}...`}</p>
        <p className="card-text">
          <small className="text-muted">
            {props.author ? `By ${props.author} on ` : ""}{" "}
            {new Date(props.date).toUTCString()}
          </small>
        </p>
        <a
          href={`${props.newsUrl}?newsUrl:"https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0101%2Fr956727_1296x729_16%2D9.jpg"`}
          target="/blank"
          className="btn btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
