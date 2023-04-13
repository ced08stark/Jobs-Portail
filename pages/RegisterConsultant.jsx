import React from 'react'
import Image from "next/image";
import SideBar from "../components/SideBar";
import * as Icons from "@heroicons/react/24/solid";
import ProfilOption from "../components/ProfilOption";
import Link from 'next/link';
import FooterComponent from '../components/FooterComponent';
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";

function RegisterConsultant() {
  
  return (
    <div>
      <div className="layout-container">
        <div className="layout-page flex flex-col items-center justify-center">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme z-0"
            id="layout-navbar"
          >
            <div className="">
              <a className="nav-item nav-link px-0 me-xl-4">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div
              className="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                  >
                    <Icons.BellAlertIcon className="w-7 h-7" />
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
                {<ProfilOption />}
              </ul>
            </div>
          </nav>
          <main className="w-full flex-1 flex flex-col items-center space-y-4 lg:space-y-6">
            <div className="flex relative w-[30%] lg:w-[12%] p-4">
              <div className="">
                <div
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full avatar-online absolute left-2 "
                  onClick={() => handleClickprofile()}
                >
                  <Image
                    src={require("../assets/img/avatars/5.png")}
                    width={200}
                    height={50}
                    className="w-10 h-auto rounded-circle"
                    alt="profile"
                  />
                </div>
                <div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full avatar-online absolute left-8 lg:left-10 border-2 border-white"
                  onClick={() => handleClickprofile()}
                >
                  <Image
                    src={require("../assets/img/avatars/6.png")}
                    width={200}
                    height={50}
                    className="w-10 h-auto rounded-circle"
                    alt="profile"
                  />
                </div>
                <div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full avatar-online absolute left-14 border-2 lg:left-16 border-white"
                  onClick={() => handleClickprofile()}
                >
                  <Image
                    src={require("../assets/img/avatars/7.png")}
                    width={200}
                    height={50}
                    className="w-10 h-auto rounded-circle"
                    alt="profile"
                  />
                </div>
                <div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full avatar-online absolute left-20 border-2 lg:left-24 border-white"
                  onClick={() => handleClickprofile()}
                >
                  <Image
                    src={require("../assets/img/avatars/7.png")}
                    width={200}
                    height={50}
                    className="w-10 h-auto rounded-circle"
                    alt="profile"
                  />
                </div>
                <div
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full avatar-online absolute left-24 lg:left-28 bg-white items-center justify-center flex"
                  onClick={() => handleClickprofile()}
                >
                  <span className="text-black">+10k</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm px-3 lg:text-base text-center bg-indigo-200 lg:px-6 py-1 rounded-full text-black m-auto">
                developpeur Teams
              </span>
            </div>
            <span className="text-black font-bold text-xl lg:text-3xl">
              Create your team
            </span>
            <p className="w-[90%] lg:w-[500px] text-center">
              give push of your team and begin a exploitation power of the
              collaboration
            </p>
            <div className="w-[90%] lg:w-[500px] border-2 border-black/20 p-3 space-y-1 rounded-xl">
              <div className="flex items-center space-x-3">
                <Icons.CheckCircleIcon className="text-green-600 w-6 h-6" />
                <span>Define your projet</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.CheckCircleIcon className="text-green-600 w-6 h-6" />
                <span>Define your tools and frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.CheckCircleIcon className="text-green-600 w-6 h-6" />
                <span>Define your team</span>
              </div>
            </div>
            <button className="px-4 py-2 rounded-full bg-blue-900 font-bold shadow-lg text-white shadow-blue-900">
              Create your team
            </button>
            <Link
              href="/RegisterConsultantPage"
              className="text-blue-900 font-semibold"
            >
              Ignorer pour l{"'"}instant
            </Link>
          </main>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default RegisterConsultant

RegisterConsultant.getLayout = function PageLayout(page) {
  return <>{page}</>;
};