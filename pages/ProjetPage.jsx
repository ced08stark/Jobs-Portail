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
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        
        <div className="layout-page">
         

          <div className="content-wrapper">
            <div  className="my-10 mx-10">
              <TableProjets />
            </div>

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

export default ProjetPage