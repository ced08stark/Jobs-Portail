import React from 'react'

function FooterComponent() {
  return (
    <footer className="footer bg-light">
      <div className="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
        <div>
          <a
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/landing/"
            target="_blank"
            className="footer-text fw-bolder"
          >
            jobsPortail
          </a>
          ©
        </div>
        <div>
          <div className="form-check form-control-sm footer-link me-3">
            
            <label className="form-check-label" htmlFor="customCheck2">
              {" "}
              Show{" "}
            </label>
          </div>
          <div className="dropdown dropup footer-link me-3">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Currency
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="">
                <i className="bx bx-dollar"></i> USD
              </a>
              <a className="dropdown-item" href="">
                <i className="bx bx-euro"></i> Euro
              </a>
              <a className="dropdown-item" href="">
                <i className="bx bx-pound"></i> Pound
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="">
                <i className="bx bx-bitcoin"></i> Bitcoin
              </a>
            </div>
          </div>
          <a href="" className="btn btn-sm btn-outline-danger">
            <i className="bx bx-log-out-circle"></i> Logout
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent