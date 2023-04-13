import React, {useState} from 'react'
import TableProjets from '../components/TableProjets'
import Image from 'next/image'
import ProfilOption from "../components/ProfilOption";
import FooterComponent from '../components/FooterComponent';

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
            

          
            <FooterComponent />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetPage