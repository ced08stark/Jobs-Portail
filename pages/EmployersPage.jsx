import React, { useState } from "react";

import Image from "next/image";


function EmployersPage() {
  const [showProfile, setShowProfile] = useState(false);
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
          
          <div class="m-auto">
            <div class="content-wrapper">
              <div class="my-10 mx-10">
                <div class="misc-wrapper items-center text-center">
                  <h2 class="mb-2 mx-2">Under Maintenance!</h2>
                  <p class="mb-4 mx-2">
                    Sorry for the inconvenience but we re performing some
                    maintenance at the moment
                  </p>
                  <a href="index.html" class="btn btn-primary">
                    Back to home
                  </a>
                  <div class="mt-4">
                    <Image
                      src={require("../assets/img/illustrations/girl-doing-yoga-light.png")}
                      alt="girl-doing-yoga-light"
                      width={500}
                      height={500}
                      class="img-fluid"
                      data-app-dark-img="illustrations/girl-doing-yoga-dark.png"
                      data-app-light-img="illustrations/girl-doing-yoga-light.png"
                    />
                  </div>
                </div>
              </div>

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
    </div>
  );
}

export default EmployersPage;
