import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import GetCookies from "../hooks/getCookies";

function AddJob({ projets, setProjets }) {
  const [projet, setProjet] = useState({
    title: null,
    description: null,
    createdAt: "",
  });
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
 
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setShowSucces] = useState(false);
  let date = new Date();
  const handleAddProjet = (e) => {
    const lightbox = document.querySelector("#lightbox");
    const idName = e.target.getAttribute("id");
    if (idName === "lightbox") {
      lightbox.classList.remove("scale-100");
      lightbox.classList.add("scale-0");
    }
  };
  const close = ()=>{
     const lightbox = document.querySelector("#lightbox");
    lightbox.classList.remove("scale-100");
    lightbox.classList.add("scale-0");
    getProjet()
  }
 
  const AddProjet = async () => {
    const lightbox = document.querySelector("#lightbox");
    const describe = document.querySelector("#describe");
    
    if (projet.title == null || describe.value == null)
    {
      setShowMessage(true);
      setMessage("veuillez remplir les champs correctement svp");
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    else
    {
      setIsLoading(true);
      const data = await axios
  .post("https://jobapp-3jo8.onrender.com/users/projet", {
    name: projet.title,
    description: describe.value,
    employerID: currentUser.employerID,
  })
  .catch((err) => console.log(err.message));
setIsLoading(false);
if (data) {
  setMessage(data?.data.message);
  setShowSucces(true);
  setShowMessage(true);
  setTimeout(() => {
    setShowMessage(false);
    lightbox.classList.remove("scale-100");
    lightbox.classList.add("scale-0");
  }, 500);
} else {
  setShowSucces(false);
  setShowMessage(true);
  setTimeout(() => {
    setShowMessage(false);
    lightbox.classList.remove("scale-100");
    lightbox.classList.add("scale-0");
  }, 2000);
}
getProjet();
    } 
    
  };

  const getProjet = async () => {
    setIsLoading(true);
    const data = await axios
      .get("https://jobapp-3jo8.onrender.com/users/projets")
      .catch((err) => console.log(err.message));
    setIsLoading(false);
    console.log(data);

    if (data?.status == 200) {
      setProjets(data?.data);
    }
  };

   useEffect(() => {
     let user = GetCookies("currentUser");
     if (currentUser?.id == null && user == null) {
       route.push("/LoginPage");
     } else if (currentUser?.id == null) {
       setCurrentUser(JSON.parse(user));
     }
   });

  

  

  return (
    <section
      className="fixed z-50  inset-0 w-full h-full dark:text-white flex-col   flex items-center justify-center transition-all duration-300 scale-0"
      id="lightbox"
      onClick={handleAddProjet}
    >
      <div
        className="flex-col space-y-2  flex rounded-md bg-white dark:bg-gray-800 w-[90%]  sm:w-1/2 h-[450px]  overflow-hidden  sm:p-0 shadow-lg shadow-black "
        id="lightbox-body"
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-xl sm:text-3xl font-bold ">Create projet</span>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => close()}
          />
        </div>
        <div className="space-y-2">
          <div className="flex-col flex px-4 space-y-2">
            <span className="font-bold text-xl">Projet name</span>
            <input
              type="text"
              className="p-2 border-none outline-1 border outline-indigo-500 rounded-md"
              placeholder="enter your projet name"
              onChange={(e) => setProjet({ ...projet, title: e.target.value })}
            />
          </div>
          <div className="flex-col flex px-4 space-y-2">
            <span className="font-bold text-xl">Description</span>
            <textarea
              className="p-2 border-none outline-1 border outline-indigo-500 rounded-md h-32"
              placeholder="enter your projet description"
              id="describe"
              
            ></textarea>
          </div>
          <div className="flex items-center justify-end p-4 space-x-3">
            <button
              onClick={() => AddProjet()}
              className="px-10 text-xs sm:text-base py-2 rounded-md hover:bg-gray-300/50 font-semibold"
            >
              Cancel
            </button>
            {!isLoading ? (
              <div className="mb-3">
                <button
                  className=" d-grid px-10 w-100 text-white rounded-md py-2 bg-indigo-500 hover:bg-indigo-700"
                  onClick={() => AddProjet()}
                >
                  create project
                </button>
              </div>
            ) : (
              <div className="mb-3">
                <button className=" d-grid w-100 text-white flex items-center justify-center rounded-md px-20 py-2 bg-indigo-500 hover:bg-indigo-700">
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
        </div>
      </div>
      {showMessage && (
        <div
          className={`${
            !success ? "bg-red-200 text-red-500" : "bg-green-200 text-green-500"
          } px-20  border-1 lg:border-2 py-2 my-2 text-center bottom-0 lg:relative z-50 rounded-lg transition-all duration-100 animate-bounce absolute`}
        >
          {!success ? (
            <span className="text-bold text-xs lg:text-base ">{message}</span>
          ) : (
            <span className="text-bold text-xs lg:text-base z-50">
              {message}
            </span>
          )}
        </div>
      )}
    </section>
  );
}

export default AddJob;
