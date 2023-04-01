
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState, ReactElement } from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";
import ProfilOption from "../components/ProfilOption";
import { BrowserRouter } from "react-router-dom";

function LayoutPage({children}) {

    const [showProfile, setShowProfile] = useState(false);
    const [showSide, setShowSide] = useState(false);
    
    const handleClickprofile = () => {
      if (showProfile) {
        setShowProfile(false);
      } else {
        setShowProfile(true);
      }
    };

    const handleClickMenu = () => {
      if (showSide) {
        setShowSide(false);
      } else {
        setShowSide(true);
      }
    };
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {<SideBar />}

          <div className="layout-page">
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div
                className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
                onClick={() => console.log("toto")}
              >
                <a
                  className="nav-item nav-link px-0 me-xl-4"
                  
                >
                  <i className="bx bx-menu bx-sm"></i>
                </a>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search fs-4 lh-0"></i>
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search..."
                      aria-label="Search..."
                    />
                  </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item lh-1 me-3">
                    <a
                      className="github-button"
                      href="https://github.com/themeselection/sneat-html-admin-template-free"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >
                      Star
                    </a>
                  </li>

                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                     
                      data-bs-toggle="dropdown"
                    >
                      <div
                        className="avatar avatar-online"
                        onClick={() => handleClickprofile()}
                      >
                        <Image
                          src={require("../assets/img/avatars/1.png")}
                          width={200}
                          height={50}
                          className="w-px-40 h-auto rounded-circle"
                          alt="profile"
                        />
                      </div>
                    </a>
                  </li>
                  {showProfile ? <ProfilOption /> : <></>}
                </ul>
              </div>
            </nav>
            <main>{children}</main>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
}

export default LayoutPage;
