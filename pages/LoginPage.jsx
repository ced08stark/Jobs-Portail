import React, { useState, useContext, useEffect, use } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { AdminContext } from "../context/AdminContext";
import { useRouter } from 'next/router';

export default function LoginPage() {
  const route = useRouter()
  const [user, setUser] = useState({email: "", password: ""})
  const [showMessage, setShowMessage] = useState(false);
  const [success, setShowSucces] = useState(false);
   const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);

    const handleLogin = async()=>{
       
    const data = await axios
      .get("http://127.0.0.1:8000/login", {
        params: {
          email: `${user.email.toString()}`,
          password: `${user.password.toString()}`,
        },
        headers: {
          Origin: [
            "http//:localhost:3000",
            "https://jobsportail-jobsportail.vercel.app",
          ],
        },
      });
  //console.log(data.data?.data[0]?.id);
   console.log(data);
   
   if (data.status == 200) {
    
    setCurrentAdmin({
      ...currentAdmin,
      id: data?.data?.data[0]?.id,
      password: data?.data?.data[0]?.password,
      email: data?.data?.data[0]?.email,
    });
   
     
     setShowSucces(true);
     setShowMessage(true);
     setTimeout(() => {
       setShowMessage(false);
       route.push("/DashboardPage");
      
     }, 2000);

     //console.log(data.data.data[0])
     // console.log(infoUser.data)
   } else {
     setShowMessage(true);
     setTimeout(() => {
       setShowMessage(false);
     }, 2000);
   }
  }

   
 
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="m-auto w-[300px] lg:w-1/3">
        <div className="authentication-wrapper authentication-basic container-p-y ">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo text-body fw-bolder p-6">
                      connection
                    </span>
                  </a>
                </div>
                <h4 className="mb-2 text-[16px] lg:text-base">
                  Welcome to jobsPortail! 👋
                </h4>
                <p className="mb-4 text-sm lg:text-base">
                  Please sign-in to your account and start the adventure
                </p>
                <div id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                    <label for="email" className="text-sm lg:text-base">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="text-sm lg:text-base" for="password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                        <small className="text-xs lg:text-base">
                          Forgot Password?
                        </small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
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
                        id="remember-me"
                      />
                      <label className="text-xs lg:text-base" for="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  {showMessage && (
                    <div
                      className={`${
                        !success
                          ? "border-red-700  bg-red-200 text-red-500"
                          : "border-green-700  bg-green-200 text-green-500"
                      } px-2  border-1 lg:border-2 py-2 my-2 text-center rounded-lg transition-all duration-100`}
                    >
                      {!success ? (
                        <span className="text-bold text-xs lg:text-base">
                          username or password incorrect
                        </span>
                      ) : (
                        <span className="text-bold text-xs lg:text-base">
                          connection success
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mb-3">
                    <button
                      className=" d-grid w-100 text-white rounded-md py-1 bg-indigo-500 hover:bg-indigo-700"
                      onClick={() => handleLogin()}
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <p className="text-center text-sm  lg:text-base">
                  <span className="text-sm lg:text-base">
                    New on our platform?{" "}
                  </span>
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
