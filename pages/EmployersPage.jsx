import React, { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import Image from "next/image";
import UserComponent from "../components/UserComponent";


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
    <>
      <div className="layout-wrapper layout-content-navbar ">
        <div className="layout-container ">
          <div className="layout-page ">
            <div className="h-screen">
              <div className="flex flex-wrap">
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
              </div>
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployersPage;
