import React from 'react'
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function SideBar() {
    //const [showSide, setShowSide] = useState(false);
     const { currentUser, setCurrentUser } = useContext(UserContext);
   const handleClickItem = (id) =>{
    let activeButton = document.querySelector(".active");
    let currentButton = document.getElementById(`${id}`)
    activeButton.classList.remove("active");
    currentButton.classList.add("active")
  }

  const handleClickMenu = () => {
    const sideBar = document.querySelector("#layout-menu");
    sideBar.classList.add("translate");
    
  };
  return currentUser?.role == "Employer" ? (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme translate"
    >
      <div className="app-brand demo  flex justify-between items-center">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            WIB-Jobs
          </span>
        </a>
        <span id="menu-side" onClick={() => handleClickMenu()}>
          <i className="bx bx-x bx-sm cursor-pointer"></i>
        </span>
      </div>
      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li
          className="menu-item active"
          id="1"
          onClick={() => handleClickItem(1)}
        >
          <Link href="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>
        <li className="menu-item" id="2" onClick={() => handleClickItem(2)}>
          <Link href="/JobsPage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Projets</div>
          </Link>
        </li>
        <li className="menu-item" id="3" onClick={() => handleClickItem(3)}>
          <Link href="/ProjetPage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Layouts">Applie</div>
          </Link>
        </li>
        <li className="menu-item" id="4" onClick={() => handleClickItem(4)}>
          <Link href="/EmployersPage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-group"></i>
            <div data-i18n="Layouts">Employer</div>
          </Link>
        </li>
        <li className="menu-item" id="5" onClick={() => handleClickItem(5)}>
          <Link href="/ProfilePage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div data-i18n="Layouts">Account</div>
          </Link>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>

        <li className="menu-item">
          <a className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Authentications</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a
                href="auth-login-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Login</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                href="auth-register-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Register</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                href="auth-forgot-password-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Forgot Password</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  ) : (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme translate"
    >
      <div className="app-brand demo  flex justify-between items-center">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            WIB-Jobs
          </span>
        </a>
        <span id="menu-side" onClick={() => handleClickMenu()}>
          <i className="bx bx-x bx-sm cursor-pointer"></i>
        </span>
      </div>
      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li
          className="menu-item active"
          id="1"
          onClick={() => handleClickItem(1)}
        >
          <Link href="/Dashboard2" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>
        <li className="menu-item" id="2" onClick={() => handleClickItem(2)}>
          <Link href="/ApplieToJobPage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Applies</div>
          </Link>
        </li>
        <li className="menu-item" id="3" onClick={() => handleClickItem(3)}>
          <Link href="/" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Layouts">interview Schedule</div>
          </Link>
        </li>
        <li className="menu-item" id="4" onClick={() => handleClickItem(4)}>
          <Link href="/" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-group"></i>
            <div data-i18n="Layouts">Teams</div>
          </Link>
        </li>
        <li className="menu-item" id="5" onClick={() => handleClickItem(5)}>
          <Link href="/ProfilePage" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div data-i18n="Layouts">Account</div>
          </Link>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>

        
      </ul>
    </aside>
  );
}
