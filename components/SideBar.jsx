import React from 'react'
import Link from "next/link";

export default function SideBar() {
   
   const handleClickItem = (id) =>{
    let activeButton = document.querySelector(".active");
    let currentButton = document.getElementById(`${id}`)
    activeButton.classList.remove("active");
    currentButton.classList.add("active")
  }
  
  return (
    <aside
      id="layout-menu"
      class="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div class="app-brand demo">
        <a href="index.html" class="app-brand-link">
          <span class="app-brand-logo demo"></span>
          <span class="app-brand-text demo menu-text fw-bolder ms-2">
            WIB-Jobs
          </span>
        </a>

        <a
          href="javascript:void(0);"
          class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>
      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner py-1">
        <li class="menu-item active" id="1" onClick={() => handleClickItem(1)}>
          <Link href="/" class="menu-link">
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>
        <li class="menu-item" id="2" onClick={() => handleClickItem(2)}>
          <Link href="/JobsPage" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Jobs</div>
          </Link>
        </li>
        <li class="menu-item" id="3" onClick={() => handleClickItem(3)}>
           <Link href="/ProjetPage" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Layouts">Projets</div>
          </Link>
        </li>
         <li class="menu-item" id="4" onClick={() => handleClickItem(4)}>
          <Link href="/EmployersPage" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-group"></i>
            <div data-i18n="Layouts">Employer</div>
          </Link>
        </li>
         <li class="menu-item" id="5" onClick={() => handleClickItem(5)}>
           
           <Link href="/ProfilePage" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-user"></i>
            <div data-i18n="Layouts">Account</div>
          </Link>
        </li>
         
         
          
        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Pages</span>
        </li>

        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Authentications</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="auth-login-basic.html" class="menu-link" target="_blank">
                <div data-i18n="Basic">Login</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="auth-register-basic.html"
                class="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Register</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="auth-forgot-password-basic.html"
                class="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Forgot Password</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
