import React, { useState, useEffect } from "react";

import Link from "next/link";
import JobComponent from "../components/JobComponent";
import AddJob from "../components/AddJob";
import ProjetComponent from "../components/ProjetComponent";
import FooterComponent from "../components/FooterComponent"
import ModalLoadComponent from "../components/ModalLoadComponent";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ErrorPage from "./ErrorPage";
import GetCookies from "../hooks/getCookies";



function JobsPage() {
    const [showProfile, setShowProfile] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [projets, setProjets] = useState([
      //  {
      //    id: 1,
      //    title: "management projet",
      //    description:
      //      "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.",
      //  },
      //  {
      //    id: 2,
      //    title: "Paiement projet",
      //    description:
      //      "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.",
      //  },
      //  {
      //    id: 3,
      //    title: "web site projet",
      //    description:
      //      "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.",
      //  },
      //  {
      //    id: 4,
      //    title: "mobile app projet",
      //    description:
      //      "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.",
      //  },
     ]);

    const getProjet = async() =>{
      setIsLoading(true)
      const data = await axios
        .get("https://jobapp-3jo8.onrender.com/users/projets")
        .catch((err) => console.log(err.message));
      setIsLoading(false)
      console.log(data)

      if (data?.status == 200) {
        setProjets(data?.data);
        
      }
    }

     useEffect(() => {
      //alert(projets.length);
       getProjet();
     }, []);

     useEffect(() => {
       let user = GetCookies("currentUser");
       if (currentUser?.id == null && user == null) {
         route.push("/LoginPage");
       } else if (currentUser?.id == null) {
         setCurrentUser(JSON.parse(user));
       }
     });
     

   


    
    
    const AddProjet = () => {
      const lightbox = document.querySelector("#lightbox");
      lightbox.classList.remove("scale-0");
      lightbox.classList.add("scale-100");
    };
    const handleClickprofile = () => {
      if (showProfile) {
        setShowProfile(false);
      } else {
        setShowProfile(true);
      }
      console.log(showProfile);
    };
     
  return (
    <div className="layout-wrapper layout-content-navbar ">
      {isLoading && <ModalLoadComponent />}
      <div className="layout-container">
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="my-10 mx-4">
              <div className="w-full h-12 bg-white rounded-md border-2 border-indigo-500/30">
                <div className="w-full bg-white p-3   overflow-hidden">
                  <button
                    onClick={() => AddProjet()}
                    className="my-1 py-1 px-2 rounded-md bg-indigo-500 text-white flex items-center justify-center"
                  >
                    <i className={`bx bx-plus`}></i>
                    <span className="text-white font-bold"> New projet</span>
                  </button>
                  <div className="py-3 flex flex-wrap overflow-scroll scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100 h-[500px] w-full">
                    {projets.filter(
                      (item) => item.employerID == currentUser.employerID
                    ).length > 0 ? (
                      projets
                        .filter(
                          (item) => item.employerID == currentUser.employerID
                        )
                        .map((frilterProjet) => (
                          <>
                            <ProjetComponent
                              key={frilterProjet.id}
                              id={frilterProjet.id}
                              title={frilterProjet.name}
                              description={frilterProjet.description}
                              setProjets={setProjets}
                            />
                          </>
                        ))
                    ) : (
                      <div className="w-full h-full items-center justify-center flex">
                        <ErrorPage />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <AddJob projets={projets} setProjets={setProjets} />
            <FooterComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
