import React from 'react'
import Image from "next/image";
import Link from "next/link";

function ProfilOption({}) {
  return (
    <ul
      className="Regular shadow fade-out"
      style={{
        marginTop: "330px",
        backgroundColor: "white",
        position: "absolute",
        right: 1,
        listStyle: "none",
        borderRadius: "10px",
      }}
    >
      <li>
        <Link className="dropdown-item" href="#">
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <div className="avatar avatar-online">
                <Image
                  src={require("../assets/img/avatars/1.png")}
                  width={200}
                  height={50}
                  alt="profile"
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </div>
            <div className="flex-grow-1">
              <span className="fw-semibold d-block">John Doe</span>
              <small className="text-muted">Admin</small>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <i className="bx bx-user me-2"></i>
          <span className="align-middle">My Profile</span>
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <i className="bx bx-cog me-2"></i>
          <span className="align-middle">Settings</span>
        </a>
      </li>
      <li>
        <Link className="dropdown-item" href="#">
          <span className="d-flex align-items-center align-middle">
            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
            <span className="flex-grow-1 align-middle">Billing</span>
            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
              4
            </span>
          </span>
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
      <li>
        <Link className="dropdown-item" href="/LoginPage">
          <i className="bx bx-power-off me-2"></i>
          <span className="align-middle">Log Out</span>
        </Link>
      </li>
    </ul>
  );
}

export default ProfilOption