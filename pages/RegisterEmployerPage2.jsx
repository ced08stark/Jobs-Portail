import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";
import { ArrowRightIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function RegisterEmployer() {
  const { setCurrentAdmin } = useContext(AdminContext);
  const router = useRouter();
  const [admin, setAdmin] = useState({
    first_name: "tony",
    last_name: "stark",
    address: "r",
    email: "r",
    password: "r",
    picture: "r",
  });

  const [data, setData] = useState({ message: "", statusCode: "" });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isload, setIsLoad] = useState(false);
  //alert(process.env.BASE_URL);
  const AddAdmin = async () => {
    setIsLoad(true);

    await axios
      .post(
        "http://127.0.0.1:8000/admin/register",
        {
          first_name: admin.first_name,
          last_name: admin.last_name,
          address: admin.address,
          email: admin.email,
          password: admin.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setMessage(res.status);
        console.log(res);
        //setShowMessage(true);
        setIsLoad(false);
      })
      .catch((err) => console.log(err));

    if (message == 200) {
      setCurrentAdmin(admin);
      router.push("/DashboardPage");
    }
  };

  useEffect(() => {});
  return (
    /*<div className="h-screen flex space-y-2 flex-col items-center justify-center mt-10 ">
      <div className="w-[80%]">
        <div className="">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    WIB-Portail
                  </span>
                </a>
              </div>
              <h4 className="mb-2 py-2">
                Adventure starts here for administrator 🚀
              </h4>
              <p className="mb-4">Make your app management easy and fun!</p>
              <div className="block sm:flex">
                <div id="formAuthentication" className="w-full">
                  <div className="mb-3 mx-3">
                    <label  className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your firstname"
                      onChange={(e) =>
                        setAdmin({ ...admin, first_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label  className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      classNameame="form-control w-38"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setAdmin({ ...admin, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label className="form-label" >
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={(e) =>
                          setAdmin({ ...admin, password: e.target.value })
                        }
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 mx-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        name="terms"
                      />
                      <label className="form-check-label" for="terms-conditions">
                        I agree to
                        <a >privacy policy & terms</a>
                      </label>
                    </div>
                  </div>
                </div>
                <form
                  id="formAuthentication"
                  className="w-full"
                  action="index.html"
                  method="POST"
                >
                  <div className="mb-3 mx-3">
                    <label  className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your lastname"
                      onChange={(e) =>
                        setAdmin({ ...admin, last_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label  className="form-label">
                      Adresse
                    </label>
                    <input
                      type="text"
                      className="form-control w-32"
                      placeholder="Enter your adresse"
                      onChange={(e) =>
                        setAdmin({ ...admin, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label className="form-label" for="password">
                      Profile
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="file"
                        id="password"
                        className="form-control"
                        onChange={(e) =>
                          setAdmin({ ...admin, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div>{showMessage && <AlertComponent text="connexion succes" color="bg-green-500" />}</div>
              <div className="m-3">
                <button
                  className="btn btn-primary d-grid m-auto w-[150px]"
                  onClick={() => AddAdmin()}
                >
                  {!isload ? "Sign up" : "Loading..."}
                </button>
              </div>

              <p className="text-center">
                <span>Already have an account?</span>
                <Link href="/LoginPage">
                  <span>Sign in instead</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>*/

    <div class="h-auto flex space-y-2 flex-col mt-8 lg:mx-32 justify-center pt-4">
      <div className="">
        <div className="">
          <div className="">
            <form>
              <div className="row mb-3 items-center">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-company"
                >
                  Company Logo
                </label>
                <div className="relative col-sm-10 flex items-center justify-center border-dotted border-2  border-indigo-500">
                  <PhotoIcon className="w-[100px] h-[100px] text-indigo-500" />
                  <input
                    type="file"
                    className="absolute w-full h-full cursor-pointer opacity-0"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-company"
                >
                  Company Name
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-company2"
                      className="input-group-text"
                    >
                      <i className="bx bx-buildings"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-company"
                      className="form-control"
                      placeholder="ACME Inc."
                      aria-label="ACME Inc."
                      aria-describedby="basic-icon-default-company2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-fullname"
                >
                  Company website
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-fullname2"
                      className="input-group-text"
                    >
                      <i className="bx bx-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-icon-default-fullname"
                      placeholder="John Doe"
                      aria-label="John Doe"
                      aria-describedby="basic-icon-default-fullname2"
                    />
                  </div>
                </div>
              </div>
             
              <div className="row mb-3">
                <label
                  className="col-sm-2 form-label"
                  htmlFor="basic-icon-default-phone"
                >
                  Phone No
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-phone2"
                      className="input-group-text"
                    >
                      <i className="bx bx-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      className="form-control phone-mask"
                      placeholder="658 799 8941"
                      aria-label="658 799 8941"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-email"
                >
                  Company size
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="bx bx-group"></i>
                    </span>
                    <input
                      type="number"
                      min={1}
                      id="basic-icon-default"
                      className="form-control"
                      placeholder="ex. 10"
                      aria-label="john.doe"
                      aria-describedby="basic-icon-default-email2"
                    />
                  </div>
                </div>
              </div>
            </form>
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
