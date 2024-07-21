import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="col ">
        <div className="card shadow-sm">
          <img src={item.image} alt="" />
          <div className="card-body">
            <h4>
              <b>{item.name}</b>{" "}
              <span className="badge text-bg-danger">{item.category}</span>
            </h4>
            <p className="card-text">{item.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge text-bg-secondary">${item.price}</span>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
