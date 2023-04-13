import React, { useEffect, useState, useContext } from "react";
import FooterComponent from "../components/FooterComponent";
import Image from "next/image";
import Link from "next/link";
import JobComponent from "../components/JobComponent";
import JobViewComponent from "../components/JobViewComponent";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { selectCurrentProjet, setCurrentProjet } from "../features/projetSlice";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import JobApplieComponent from "../components/JobApplieComponent";

function Dashboard2() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  const token = useSelector(setToken);
  const router = useRouter();
  const currentProjet = useSelector(setCurrentProjet);
  const [jobLists, setJobs] = useState([]);
  const getAllJob = async () => {
    setIsLoading(true);
    const data = await axios
      .get("https://jobapp-3jo8.onrender.com/users/projet/jobs")
      .catch((err) => console.log(err.message));
    setIsLoading(false);
    console.log(data);
    if (data?.status == 200) {
      setJobs(data?.data.result);
    }
  };
  useEffect(() => {
    if (currentUser?.id == null) {
      router.push("/LoginPage")
    }
  });
  useEffect(()=>{
    //alert(jobLists.length)
    getAllJob()
  }, [])
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
                        Congratulations user {currentUser?.last_name}! 🎉
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
                      <h3 className="card-title mb-2">$12,628</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +72.80%
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
                      <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +28.42%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main>
            <div className=" bg-white  overflow-hidden">
              <div className="py-3 flex-wrap flex overflow-scroll scrollbar-thin  scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100 h-[500px] w-full">
                {jobLists.map((data) => (
                  <JobApplieComponent
                    key={data.id}
                    id={data.id}
                    type={data.type}
                    certification={data.certification}
                    title={data.name}
                    delay={data.delay}
                    description={data.description}
                    montant={data.montant}
                    //author={currentUser.company_name}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Dashboard2;
