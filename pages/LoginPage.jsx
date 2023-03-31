import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { AdminContext } from "../context/AdminContext";
import { useRouter } from 'next/router';

export default function LoginPage() {
  const route = useRouter()
  const [user, serUser] = useState({email: "", password: ""})
   const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);

    const handleLogin = async()=>{
    const data = await axios.get("http://192.168.137.1:8000/login", {
     params: {
       email: `${user.email.toString()}`,
       password: `${user.password.toString()}`,
     }, headers:{
        Origin: "http//:localhost:3000"
     }
    });
    console.log(data.data?.data[0]?.id);
    setCurrentAdmin({...currentAdmin, id: data.data.data[0].id})
   if (data != undefined && data.data.data[0].id!=0) {
        route.push("/DashboardPage");
     //console.log(data.data.data[0])
     // console.log(infoUser.data)
   }
  }

   
 
  return (
    <div class="h-screen flex flex-col items-center justify-center">
      <div class="m-auto lg:w-1/3">
        <div class="authentication-wrapper authentication-basic container-p-y ">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="index.html" class="app-brand-link gap-2">
                    <span class="app-brand-logo demo"></span>
                    <span class="app-brand-text demo text-body fw-bolder p-6">
                      WIB-portail
                    </span>
                  </a>
                </div>
                <h4 class="mb-2">Welcome to Sneat! 👋</h4>
                <p class="mb-4">
                  Please sign-in to your account and start the adventure
                </p>
                <div
                  id="formAuthentication"
                  class="mb-3"
                >
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      onChange={(e) =>
                        serUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" for="password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={(e) =>
                          serUser({ ...user, password: e.target.value })
                        }
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
                        id="remember-me"
                      />
                      <label class="form-check-label" for="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary d-grid w-100" onClick={()=>handleLogin()} >
                      Sign in
                    </button>
                  </div>
                </div>

                <p class="text-center">
                  <span>New on our platform?</span>
                  <Link href="/RolesPage">
                    <span>Create an account</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.getLayout = function PageLayout(page){
  return(
    <>
    {page}
    </>
  )
}
