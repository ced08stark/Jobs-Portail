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
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
      
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="my-10 mx-10">
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
                  <button onClick={()=>AddProjet()} className="my-1 py-1 rounded-md bg-indigo-500 text-white flex items-center w-[120px] justify-center">
                    <i class={`bx bx-plus`}></i>
                    <span className="text-white font-bold"> Add projets</span>
                  </button>
                  <div className="py-3 flex flex-wrap overflow-scroll scrollbar scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100 h-[400px] bg-scroll">
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
            <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©<script>2023</script>, made with ❤️ by
                  <a
                    href="https://themeselection.com"
                    target="_blank"
                    class="footer-link fw-bolder"
                  >
                    ThemeSelection
                  </a>
                </div>
                <div>
                  <a
                    href="https://themeselection.com/license/"
                    class="footer-link me-4"
                    target="_blank"
                  >
                    License
                  </a>
                  <a
                    href="https://themeselection.com/"
                    target="_blank"
                    class="footer-link me-4"
                  >
                    More Themes
                  </a>

                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    class="footer-link me-4"
                  >
                    Documentation
                  </a>

                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    class="footer-link me-4"
                  >
                    Support
                  </a>
                </div>
              </div>
            </footer>

            <div class="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
