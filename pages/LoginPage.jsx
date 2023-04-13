import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { UserContext } from "../context/UserContext";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { setToken } from '../features/token';
import SetCookies from '../hooks/setCookies'
import GetCookies from '../hooks/getCookies'
import RemoveCookies from "../hooks/removeCookies";

export default function LoginPage() {
  const route = useRouter()
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [success, setShowSucces] = useState(false);
  const [user, setUser] = useState({email: '', password: ''})
  const dispatch = useDispatch();
  //const [i, setData] = useState(0)
  const [status, setStatus] = useState(0)
  const { currentUser, setCurrentUser } = useContext(UserContext);
     const getData = async (d) => {
       //alert(result?.data?.user?.id);
       //alert(id)
      const data = await axios
        .post("https://jobapp-3jo8.onrender.com/users/employer", {
          userID: d.data.user.id,
        })
        .catch((err) => console.log(err.message));
        console.log(data.data.id);
       setCurrentUser({
         ...currentUser,
         employerID: data?.data.id,
         id: d?.data?.user?.id,
         first_name: d?.data?.user?.first_name,
         last_name: d?.data?.user?.last_name,
         email: d?.data?.user?.email,
         role: d?.data?.user?.role,
       });
         //alert(data?.data.id);
       
     };

    const handleLogin = async()=>{
   
    setIsLoading(true)
     const data = await axios
       .post("https://jobapp-3jo8.onrender.com/users/login", {
         email: `${user.email.toString()}`,
         password: `${user.password.toString()}`,
       })
       .catch((err) => console.log(err.message));
    setIsLoading(false)
  //console.log(data.data?.data[0]?.id);
   //console.log(data?.data.user?.password);
      if (data?.status == 200) {
        RemoveCookies('currentUser')
        RemoveCookies("token");
        SetCookies('currentUser', JSON.stringify(data?.data.user))
        SetCookies("token", data?.data.token);
        setCurrentUser({
          ...currentUser,
          id: data?.data?.user?.id,
          first_name: data?.data?.user?.first_name,
          last_name: data?.data?.user?.last_name,
          email: data?.data?.user?.email,
          role: data?.data?.user?.role,
        });
        dispatch(setToken(data?.data.token))
        //alert(data?.data.user.role);

        //  localStorage.setItem(
        //    "user",
        //    JSON.stringify({
        //      email: data?.data?.user?.email,
        //      first_name: data?.data?.user?.first_name,
        //      last_name: data?.data?.user?.last_name,
        //      phone: data?.data?.user?.phone,
        //    })
        //  );
        getData(data);
        setMessage("authentification success");
        setShowSucces(true);
        setShowMessage(true);
        setTimeout(() => {
          if (data?.data?.user?.role == "Employer") {
            route.push("/DashboardPage");
          } else {
            route.push("/Dashboard2");
          }
        }, 2000);
      } else {
        
        setShowSucces(false);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
  
     }
     //useEffect(() => {});
   
 
  return (
    <div className="h-screen flex flex-col items-center lg:bg-none justify-center relative">
      <div className="w-full m-auto sm:1/2  md:w-2/3 lg:w-1/3">
        <div className="authentication-wrapper authentication-basic container-p-y ">
          <div className="authentication-inner ">
            <div className="card  h-screen  md:h-auto">
              <div className="card-body  lg:space-y-0 space-y-6">
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
                    <label htmlFor="email" className="text-sm lg:text-base">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      onChange={(e) =>
                        setCurrentUser({ ...currentUser, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label
                        className="text-sm lg:text-base"
                        htmlFor="password"
                      >
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
                          setUser({ ...currentUser, password: e.target.value })
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
                        readOnly
                      />
                      <label className="text-xs lg:text-base" for="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>

                  {!isLoading ? (
                    <div className="mb-3">
                      <button
                        className=" d-grid w-100 text-white rounded-md py-1 bg-indigo-500 hover:bg-indigo-700"
                        onClick={() => handleLogin()}
                      >
                        Sign in
                      </button>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <button
                        className=" d-grid w-100 text-white flex items-center justify-center rounded-md py-2 bg-indigo-500 hover:bg-indigo-700"
                        onClick={() => handleLogin()}
                      >
                        <div
                          class="spinner-border spinner-border-sm text-white"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    </div>
                  )}
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
      {showMessage && (
        <div
          className={`${
            !success ? "bg-red-200 text-red-500" : "bg-green-200 text-green-500"
          } px-20  border-1 lg:border-2 py-2 my-2 text-center rounded-lg transition-all duration-100 animate-bounce  top-2 absolute`}
        >
          {!success ? (
            <span className="text-bold text-xs lg:text-base">
              email or password incorrect
            </span>
          ) : (
            <span className="text-bold text-xs lg:text-base">{message}</span>
          )}
        </div>
      )}
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
