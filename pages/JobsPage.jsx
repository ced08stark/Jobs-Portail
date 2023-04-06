import React, { useState } from "react";

import Link from "next/link";
import JobComponent from "../components/JobComponent";
import AddJob from "../components/AddJob";

function JobsPage() {
    const [showProfile, setShowProfile] = useState(false);
   
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
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
      
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="my-10 mx-4">
              <div className="w-full h-12 bg-white rounded-md">
                <div className="flex px-4 pt-1 space-x-5">
                  <Link
                    href="/"
                    className="p-2 border-2 border-t-white border-r-white border-l-white border-b-indigo-500 font-bold"
                  >
                    Projets
                  </Link>
                  <Link href="/" className="w-12 p-2">
                    Task
                  </Link>
                </div>
                <div className="w-full bg-white h-[450px] mt-4 p-3   overflow-hidden">
                  <button onClick={()=>AddProjet()} className="my-1 py-1 px-2 rounded-md bg-indigo-500 text-white flex items-center justify-center">
                    <i className={`bx bx-plus`}></i>
                    <span className="text-white font-bold"> Add projets</span>
                  </button>
                  <div className="py-3 flex flex-wrap overflow-scroll scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100 h-[400px] w-full">
                    <JobComponent
                      key={1}
                      title="Content projet"
                      description="projet de creation d un content maquette "
                      author="WIB-Company"
                    />
                    <JobComponent
                      key={1}
                      title="Content projet"
                      description="projet de creation d un content maquette "
                      author="WIB-Company"
                    />
                    <JobComponent
                      key={1}
                      title="Content projet"
                      description="projet de creation d un content maquette "
                      author="WIB-Company"
                    />
                    <JobComponent
                      key={1}
                      title="Content projet"
                      description="projet de creation d un content maquette "
                      author="WIB-Company"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AddJob />
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                  ©<script>2023</script>, made with ❤️ by
                  <a
                    href="https://themeselection.com"
                    target="_blank"
                    className="footer-link fw-bolder"
                  >
                    ThemeSelection
                  </a>
                </div>
                <div>
                  <a
                    href="https://themeselection.com/license/"
                    className="footer-link me-4"
                    target="_blank"
                  >
                    License
                  </a>
                  <a
                    href="https://themeselection.com/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    More Themes
                  </a>

                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Documentation
                  </a>

                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Support
                  </a>
                </div>
              </div>
            </footer>

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
