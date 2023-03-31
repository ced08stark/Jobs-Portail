import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { AxiosBase } from "./api/AxiosBase";

function RegisterPage() {
  const [staff, setStaff] = useState({})
  const [employe, setEmploye] = useState({});
  const AddEmployee = async()=>{
    await AxiosBase.post(
      "register/admin",
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
    <div class="h-screen flex flex-col items-center justify-center m-10">
      <div class="authentication-wrapper authentication-basic container-p-y  sm:w-[300px] lg:w-1/2">
        <div class="authentication-inner">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo"></span>
                  <span class="app-brand-text demo text-body fw-bolder">
                    WIB-Jobs
                  </span>
                </a>
              </div>

              <h4 class="mb-2">Adventure starts here 🚀</h4>
              <p class="mb-4">Make your app management easy and fun!</p>

              <form
                id="formAuthentication"
                class="mb-3"
                action="index.html"
                method="POST"
              >
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autofocus
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
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
                <div class="mb-3 form-password-toggle">
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="bx bx-hide"></i>
                    </span>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="terms-conditions"
                      name="terms"
                    />
                    <label class="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="javascript:void(0);">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary d-grid w-100">Sign up</button>
              </form>

              <p class="text-center">
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