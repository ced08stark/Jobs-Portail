import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { AxiosBase } from "./api/AxiosBase";

function RegisterPage() {
  const [staff, setStaff] = useState({})
  const [employe, setEmploye] = useState({});
  const AddEmployee = async()=>{
    await AxiosBase.post(
      "/register/admin",
      {
        firstName: "Fred",
        lastName: "Flintstone",
      }
    ).then((response) =>
      console.log(response).then((error) => console.log(error))
    );
  }
  useEffect(() => {});
  return (
    <div className="h-screen flex flex-col items-center justify-center m-10">
      <div className="authentication-wrapper authentication-basic container-p-y  sm:w-[300px] lg:w-1/2">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    WIB-Jobs
                  </span>
                </a>
              </div>

              <h4 className="mb-2">Adventure starts here 🚀</h4>
              <p className="mb-4">Make your app management easy and fun!</p>

              <form
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <div className="mb-3">
                  <label  className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autofocus
                  />
                </div>
                <div className="mb-3">
                  <label  className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control w-32"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3 form-password-toggle">
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
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms-conditions"
                      name="terms"
                    />
                    <label className="form-check-label" for="terms-conditions">
                      I agree to
                      <a>privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100">Sign up</button>
              </form>

              <p className="text-center">
                <span>Already have an account?</span>
                <a href="auth-login-basic.html">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage


RegisterPage.getLayout = function layoutPage(page){
  return(
    <>
    {page}
    </>
  )
}