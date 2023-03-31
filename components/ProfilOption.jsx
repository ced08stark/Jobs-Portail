import React from 'react'
import Image from "next/image";
import Link from "next/link";

function ProfilOption({}) {
  return (
    <ul
      class="Regular shadow fade-out"
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
        <Link class="dropdown-item" href="#">
          <div class="d-flex">
            <div class="flex-shrink-0 me-3">
              <div class="avatar avatar-online">
                <Image
                  src={require("../assets/img/avatars/1.png")}
                  width={200}
                  height={50}
                  alt="profile"
                  class="w-px-40 h-auto rounded-circle"
                />
              </div>
            </div>
            <div class="flex-grow-1">
              <span class="fw-semibold d-block">John Doe</span>
              <small class="text-muted">Admin</small>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <div class="dropdown-divider"></div>
      </li>
      <li>
        <a class="dropdown-item" href="#">
          <i class="bx bx-user me-2"></i>
          <span class="align-middle">My Profile</span>
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#">
          <i class="bx bx-cog me-2"></i>
          <span class="align-middle">Settings</span>
        </a>
      </li>
      <li>
        <Link class="dropdown-item" href="#">
          <span class="d-flex align-items-center align-middle">
            <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
            <span class="flex-grow-1 align-middle">Billing</span>
            <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
              4
            </span>
          </span>
        </Link>
      </li>
      <li>
        <div class="dropdown-divider"></div>
      </li>
      <li>
        <Link class="dropdown-item" href="/LoginPage">
          <i class="bx bx-power-off me-2"></i>
          <span class="align-middle">Log Out</span>
        </Link>
      </li>
    </ul>
  );
}

export default ProfilOption