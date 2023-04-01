import React from 'react'
import Image from 'next/image';

function CardComponent({}) {
  return (
    <div className="col-lg-6 col-md-12 col-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex align-items-start justify-content-between">
            <div className="avatar flex-shrink-0">
              <Image
                src={require("../app/assets/img/icons/unicons/chart-success.png")}
                width={200}
                height={140}
                alt="chart success"
                className="rounded"
              />
            </div>
            <div className="dropdown">
              <button
                className="btn p-0"
                type="button"
                id="cardOpt3"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="cardOpt3"
              >
                <a className="dropdown-item">
                  View More
                </a>
                <a className="dropdown-item" >
                  Delete
                </a>
              </div>
            </div>
          </div>
          <span className="fw-semibold d-block mb-1">Profit</span>
          <h3 className="card-title mb-2">$12,628</h3>
          <small className="text-success fw-semibold">
            <i className="bx bx-up-arrow-alt"></i> +72.80%
          </small>
        </div>
      </div>
    </div>
  );
}

export default CardComponent