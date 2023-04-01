"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProfilOption from "../components/ProfilOption";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useRouter } from "next/router";
import axios from "axios";
import { AxiosBase } from './api/AxiosBase'

let infoUser = {};
function DashboardPage() {
    const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);
    const route = useRouter()

const handleProfile = async () => {
  
  infoUser = await axios
    .get(`http://192.168.137.1:8000/admin/profile/${currentAdmin.id}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "http://localhost:3000",
      },
    })
    .catch((err) => console.log(err));
    console.log(infoUser.data);
    setCurrentAdmin({
      ...currentAdmin,
      last_name: infoUser?.data?.data?.last_name,
    });
 // console.log(infoUser.data.data.last_name);

  //setCurrentAdmin({ ...currentAdmin, currentAdmin: infoUser.data.data});
};
    useEffect(() => {
      handleProfile();
    }, []);

if (currentAdmin.id != 0) {
  handleProfile();
} else {
  //route.push("/LoginPage");
}

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentAdmin))
    }, [currentAdmin]);


    useEffect(()=>{
        const admin = JSON.parse(localStorage.getItem('user'));
        if (!currentAdmin){
            setCurrentAdmin((prev) => ({ ...prev, ...admin }));
        }
    },[]);
  
    
   
  return (
    <div>
      <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
          <div class="row">
            <div class="col-lg-8 mb-4 order-0">
              <div class="card">
                <div class="d-flex align-items-end row">
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title text-primary">
                        Congratulations{" "}
                        {`${currentAdmin?.last_name}`}{" "}
                        ! 🎉
                      </h5>
                      <p class="mb-4">
                        You have done <span class="fw-bold">72%</span> more
                        sales today. Check your new badge in your profile.
                      </p>

                      <a
                        href="javascript:;"
                        class="btn btn-sm btn-outline-primary"
                      >
                        View Badges
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-5 text-center text-sm-left">
                    <div class="card-body pb-0 px-0 px-md-4">
                      <Image
                        src={require("../assets/img/illustrations/man-with-laptop-light.png")}
                        width={200}
                        height={140}
                        alt="View Badge User"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 order-1">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-title d-flex align-items-start justify-content-between">
                        <div class="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/chart-success.png")}
                            width={200}
                            height={140}
                            alt="chart success"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt3"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt3"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              View More
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <span class="fw-semibold d-block mb-1">Profit</span>
                      <h3 class="card-title mb-2">$12,628</h3>
                      <small class="text-success fw-semibold">
                        <i class="bx bx-up-arrow-alt"></i> +72.80%
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-title d-flex align-items-start justify-content-between">
                        <div class="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/wallet-info.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt6"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt6"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              View More
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 class="card-title text-nowrap mb-1">$4,679</h3>
                      <small class="text-success fw-semibold">
                        <i class="bx bx-up-arrow-alt"></i> +28.42%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class=" col-lg-8 order-2 order-md-3 order-lg-2">
              <div class="card">
                <div class="row row-bordered g-0">
                  <div class="col-md-8">
                    <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                    <div id="totalRevenueChart" class="px-2"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                      <div class="text-center">
                        <div class="dropdown">
                          <button
                            class="btn btn-sm btn-outline-primary dropdown-toggle"
                            type="button"
                            id="growthReportId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            2022
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="growthReportId"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              2021
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              2020
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              2019
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="growthChart"></div>
                    <div class="text-center fw-semibold pt-3 mb-2">
                      62% Company Growth
                    </div>

                    <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                      <div class="d-flex">
                        <div class="me-2">
                          <span class="badge bg-label-primary p-2">
                            <i class="bx bx-dollar text-primary"></i>
                          </span>
                        </div>
                        <div class="d-flex flex-column">
                          <small>2022</small>
                          <h6 class="mb-0">$32.5k</h6>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="me-2">
                          <span class="badge bg-label-info p-2">
                            <i class="bx bx-wallet text-info"></i>
                          </span>
                        </div>
                        <div class="d-flex flex-column">
                          <small>2021</small>
                          <h6 class="mb-0">$41.2k</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
              <div class="row">
                <div class="col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-title d-flex align-items-start justify-content-between">
                        <div class="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/paypal.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt4"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt4"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              View More
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <span class="d-block mb-1">Payments</span>
                      <h3 class="card-title text-nowrap mb-2">$2,456</h3>
                      <small class="text-danger fw-semibold">
                        <i class="bx bx-down-arrow-alt"></i> -14.82%
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-title d-flex align-items-start justify-content-between">
                        <div class="avatar flex-shrink-0">
                          <Image
                            src={require("../assets/img/icons/unicons/cc-primary.png")}
                            width={60}
                            height={60}
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="cardOpt1">
                            <a class="dropdown-item" href="javascript:void(0);">
                              View More
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <span class="fw-semibold d-block mb-1">Transactions</span>
                      <h3 class="card-title mb-2">$14,857</h3>
                      <small class="text-success fw-semibold">
                        <i class="bx bx-up-arrow-alt"></i> +28.14%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="content-footer footer bg-footer-theme">
          <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
            <div class="mb-2 mb-md-0">
              © 2023 , made with WIB-COMPANY by
              <a
                href="https://themeselection.com"
                target="_blank"
                class="footer-link fw-bolder"
              >
                ThemeSelection
              </a>
            </div>
            <div>
              <a
                href="https://themeselection.com/license/"
                class="footer-link me-4"
                target="_blank"
              >
                License
              </a>
              <a
                href="https://themeselection.com/"
                target="_blank"
                class="footer-link me-4"
              >
                More Themes
              </a>

              <a
                href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                class="footer-link me-4"
              >
                Documentation
              </a>

              <a
                href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                class="footer-link me-4"
              >
                Support
              </a>
            </div>
          </div>
        </footer>

        <div class="content-backdrop fade"></div>
      </div>
    </div>
  );
}

export default DashboardPage;
