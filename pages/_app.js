import '../styles/globals.css'
import "../assets/css/demo.css";
import "../assets/vendor/css/theme-default.css";
import "../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../assets/vendor/libs/apex-charts/apex-charts.css";
import "../assets/vendor/fonts/boxicons.css";
import "../assets/vendor/css/core.css";
import "react-step-progress/dist/index.css";
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState, ReactElement } from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";
import ProfilOption from "../components/ProfilOption";
import { BrowserRouter } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import Context from '../context/AdminContext';
import * as Icons from "@heroicons/react/24/solid"
const progress = new ProgressBar({
  size: 4,
  color: "#6610f2",
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
  const [showProfile, setShowProfile] = useState(false);
 
  const [currentAdmin, setCurrentAdmin] = useState("");
  const handleClickprofile = () => {
    let profileMenu = document.querySelector('#profileMenu')
   
      setShowProfile(true);
      profileMenu.classList.remove("scale-0");
      profileMenu.classList.add("scale-100");
      
    
  };

  const handleClickMenu = () => {
    const sideBar = document.querySelector('#layout-menu')
    sideBar.classList.remove("translate"); 
    
  };

  if(Component.getLayout){
    return Component.getLayout(
      <Context>
        <Component {...pageProps} />
      </Context>
    );
  }
  
  return (
    <>
      <Context>
        <Head>
          <title>Jobs Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="layout-wrapper layout-content-navbar">
          
          <div className="layout-container">
            {<SideBar />}

            <div className="layout-page">
              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme z-0"
                id="layout-navbar"
              >
                <div
                  className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none z-40"
                  onClick={() => handleClickMenu()}
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
                        <Icons.BellAlertIcon className='w-7 h-7' />
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
                    {<ProfilOption /> }
                  </ul>
                </div>
              </nav>
              <main>{<Component {...pageProps} />}</main>
            </div>
          </div>
          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </Context>
    </>
  );
}
