import React, {useState} from 'react'
import TableProjets from '../components/TableProjets'
import Image from 'next/image'
import ProfilOption from "../components/ProfilOption";

function ProjetPage() {
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
         

          <div class="content-wrapper">
            <div  class="my-10 mx-10">
              <TableProjets />
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
  );
}

export default ProjetPage