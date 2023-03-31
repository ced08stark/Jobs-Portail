import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";

function RegisterEmployer() {
  const {setCurrentAdmin}  = useContext(AdminContext);
  const router = useRouter()
  const [admin, setAdmin] = useState({
    first_name: "tony",
    last_name: "stark",
    address: "r",
    email: "r",
    password: "r",
    picture: "r"
    
  });
  
  const [data, setData] = useState({message: "", statusCode: ""});
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false);
  const [isload, setIsLoad] = useState(false)
  //alert(process.env.BASE_URL);
  const AddAdmin = async() => {
    setIsLoad(true)
    
   await axios
     .post(
      
       "http://192.168.137.1:8000/admin/register",
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
     .then(async(res)=>{
        setMessage(res.status);
        //setShowMessage(true);
        setIsLoad(false);
     })
     .catch((err) => console.log(err));

    if (message == 200) {
      setCurrentAdmin(admin);
      router.push("/DashboardPage");
    }
    
    
  };

  
  
  useEffect(() => {
   
  });
  return (
    <div class="h-screen flex space-y-2 flex-col items-center justify-center mt-10 ">
      <div class="w-[80%]">
        <div class="">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo"></span>
                  <span class="app-brand-text demo text-body fw-bolder">
                    WIB-Portail
                  </span>
                </a>
              </div>
              <h4 class="mb-2 py-2">
                Adventure starts here for administrator 🚀
              </h4>
              <p class="mb-4">Make your app management easy and fun!</p>
              <div class="block sm:flex">
                <div id="formAuthentication" class="w-full">
                  <div class="mb-3 mx-3">
                    <label for="username" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your firstname"
                      onChange={(e) =>
                        setAdmin({ ...admin, first_name: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3 mx-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control w-38"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setAdmin({ ...admin, email: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3 mx-3">
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
                        onChange={(e) =>
                          setAdmin({ ...admin, password: e.target.value })
                        }
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>

                  <div class="mb-3 mx-3">
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
                </div>
                <form
                  id="formAuthentication"
                  class="w-full"
                  action="index.html"
                  method="POST"
                >
                  <div class="mb-3 mx-3">
                    <label for="username" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your lastname"
                      onChange={(e) =>
                        setAdmin({ ...admin, last_name: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3 mx-3">
                    <label for="adresse" class="form-label">
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
                  <div class="mb-3 mx-3">
                    <label class="form-label" for="password">
                      Profile
                    </label>
                    <div class="input-group input-group-merge">
                      <input
                        type="file"
                        id="password"
                        class="form-control"
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
                  class="btn btn-primary d-grid m-auto w-[150px]"
                  onClick={() => AddAdmin()}
                >
                  {!isload ? "Sign up" : "Loading..."}
                </button>
              </div>

              <p class="text-center">
                <span>Already have an account?</span>
                <Link href="/LoginPage">
                  <span>Sign in instead</span>
                </Link>
              </p>
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
