import React from "react";

export default function card({ title, img, retail }) {
  return (
    <div
      className="card m-3 bg-light shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "18rem" }}
    >
      <img
        src={img}
        className="card-img-top p-1 m-auto"
        alt="..."
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title fw-bolder mb-4">{title}</h5>

        <p className="btn btn-primary mt-2">
          {retail ? "Retail" : "WholeSale"}
        </p>
      </div>
    </div>
  );
}
