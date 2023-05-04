"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProfilOption from "../components/ProfilOption";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";
import GetCookies from "../hooks/getCookies";


//let infoUser = {};
function DashboardPage() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
   

    //alert(currentUser?.employerID);
    const route = useRouter()
    const token = GetCookies("token")
      //alert(currentUser?.employerID)
     useEffect(() => {
      let user = GetCookies("currentUser");
      if (currentUser?.id == null && user == null ) {
        route.push("/LoginPage")
      }
      else if (currentUser?.id == null) {
        setCurrentUser(JSON.parse(user));
      }
      
    }, []);
    

     

    
        
        
        
    
  
    
   
  return (
    <div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-lg-8 mb-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        Congratulations {`${currentUser?.last_name}`} ! 🎉
                      </h5>
                      <p className="mb-4">
                        You have done <span className="fw-bold">72%</span> more
                        sales today. Check your new badge in your profile.
                      </p>

                      <a className="btn-sm cursor-pointer  text-white bg-indigo-500 hover:bg-indigo-700 ">
                        View Badges
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-5 text-center text-sm-left">
                    <div className="card-body pb-0 px-0 px-md-4">
                      <Image
                        src={require("../assets/img/illustrations/girl-doing-yoga-light.png")}
                        width={200}
                        height={140}
                        alt="View Badge User"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 order-1">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/chart-success.png")}
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
                            <a className="dropdown-item">View More</a>
                            <a className="dropdown-item">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Profit</span>
                      <h3 className="card-title mb-2">$0</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +0.1%
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/wallet-info.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            className="rounded"
                          />
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="cardOpt6"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt6"
                          >
                            <a className="dropdown-item">View More</a>
                            <a className="dropdown-item">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 className="card-title text-nowrap mb-1">$0</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +1.42%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-8 order-2 order-md-3 order-lg-2">
              <div className="card">
                <div className="row row-bordered g-0">
                  <div className="col-md-8">
                    <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                    <div id="totalRevenueChart" className="px-2"></div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-outline-primary dropdown-toggle"
                            type="button"
                            id="growthReportId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            2022
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="growthReportId"
                          >
                            <a className="dropdown-item">2021</a>
                            <a className="dropdown-item">2020</a>
                            <a className="dropdown-item">2019</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="growthChart"></div>
                    <div className="text-center fw-semibold pt-3 mb-2">
                      62% Company Growth
                    </div>

                    <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                      <div className="d-flex">
                        <div className="me-2">
                          <span className="badge bg-label-primary p-2">
                            <i className="bx bx-dollar text-primary"></i>
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <small>2022</small>
                          <h6 className="mb-0">$32.5k</h6>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="me-2">
                          <span className="badge bg-label-info p-2">
                            <i className="bx bx-wallet text-info"></i>
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <small>2021</small>
                          <h6 className="mb-0">$41.2k</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2 mt-4">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/paypal.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            className="rounded"
                          />
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="cardOpt4"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt4"
                          >
                            <a className="dropdown-item">View More</a>
                            <a className="dropdown-item">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="d-block mb-1">Payments</span>
                      <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                      <small className="text-danger fw-semibold">
                        <i className="bx bx-down-arrow-alt"></i> -14.82%
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/cc-primary.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            className="rounded"
                          />
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="cardOpt1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="cardOpt1"
                          >
                            <a className="dropdown-item">View More</a>
                            <a className="dropdown-item">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">
                        Transactions
                      </span>
                      <h3 className="card-title mb-2">$14,857</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +28.14%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default DashboardPage;
