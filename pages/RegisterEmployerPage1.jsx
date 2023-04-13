import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";
import { ArrowRightIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";

function RegisterEmployer() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const router = useRouter();
  

  const [data, setData] = useState({ message: "", statusCode: "" });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isload, setIsLoad] = useState(false);
  //alert(process.env.BASE_URL);
  // const AddAdmin = async () => {
  //   setIsLoad(true);

  //   await axios
  //     .post(
  //       "http://127.0.0.1:8000/admin/register",
  //       {
  //         first_name: admin.first_name,
  //         last_name: admin.last_name,
  //         address: admin.address,
  //         email: admin.email,
  //         password: admin.password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setMessage(res.status);
  //       console.log(res);
  //       //setShowMessage(true);
  //       setIsLoad(false);
  //     })
  //     .catch((err) => console.log(err));

  //   if (message == 200) {
  //     setCurrentAdmin(admin);
  //     router.push("/DashboardPage");
  //   }
  // };
  

    useEffect(() => {});
  return (
    <div className="h-screen  flex space-y-2 flex-col items-center justify-center my-12 lg:m-auto ">
      <div className="w-[100%] lg:w-[80%]">
        <div className="">
          <div className="">
            <div className="">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text py-1 demo text-body fw-bolder">
                    Register Employer
                  </span>
                </a>
              </div>
              <h4 className="mb-2 py-2 text-center">
                Adventure starts here for Employer 🚀
              </h4>
              <p className="mb-2 text-center">
                Make your app management easy and fun!
              </p>
              <div className="flex justify-center items-center">
                <div className="flex items-center justify-center w-[100px] h-[100px]  lg:w-[150px] lg:h-[150px] border-dotted rounded-full cursor-pointer border-2 border-indigo-500">
                  <UserIcon className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] text-indigo-500" />
                </div>
              </div>
              <div className="block sm:flex items-center">
                <div id="formAuthentication" className="w-full mr-0 lg:mr-10">
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="bx bx-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your firstname"
                        onChange={(e) =>
                          setCurrentUser({
                            ...currentUser,
                            first_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="bx bx-pen"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your lastname"
                        onChange={(e) =>
                          setCurrentUser({
                            ...currentUser,
                            last_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div id="formAuthentication" className="w-full">
                  <div className="mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>

                    <div className="">
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-envelope"></i>
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-email"
                          className="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="basic-icon-default-email2"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 mx-0 md:mx-3">
                    <label className="form-label">Password</label>
                    <div className="">
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-key"></i>
                        </span>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              password: e.target.value,
                            })
                          }
                        />
                        <span className="input-group-text cursor-pointer">
                          <i className="bx bx-hide"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 mx-0 md:mx-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms-conditions"
                    name="terms"
                    readOnly
                  />
                  <label className="form-check-label">
                    I agree to
                    <a>privacy policy & terms</a>
                  </label>
                </div>
              </div>
              <div>
                {showMessage && (
                  <AlertComponent
                    text="connexion succes"
                    color="bg-green-500"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterEmployer;

RegisterEmployer.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
