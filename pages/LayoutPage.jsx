
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
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {<SideBar />}

          <div class="layout-page">
            <nav
              class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div
                class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
                onClick={() => console.log("toto")}
              >
                <a
                  class="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i class="bx bx-menu bx-sm"></i>
                </a>
              </div>

              <div
                class="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <div class="navbar-nav align-items-center">
                  <div class="nav-item d-flex align-items-center">
                    <i class="bx bx-search fs-4 lh-0"></i>
                    <input
                      type="text"
                      class="form-control border-0 shadow-none"
                      placeholder="Search..."
                      aria-label="Search..."
                    />
                  </div>
                </div>

                <ul class="navbar-nav flex-row align-items-center ms-auto">
                  <li class="nav-item lh-1 me-3">
                    <a
                      class="github-button"
                      href="https://github.com/themeselection/sneat-html-admin-template-free"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >
                      Star
                    </a>
                  </li>

                  <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      class="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div
                        class="avatar avatar-online"
                        onClick={() => handleClickprofile()}
                      >
                        <Image
                          src={require("../assets/img/avatars/1.png")}
                          width={200}
                          height={50}
                          class="w-px-40 h-auto rounded-circle"
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
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
}

export default LayoutPage;
