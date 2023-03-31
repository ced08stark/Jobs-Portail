"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";
import ProfilOption from "../components/ProfilOption";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import RolesPage from "./RolesPage";

//import SideBar from "./components/SideBar";
//import ProfilOption from "./components/ProfilOption";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showProfile, setShowProfile] = useState(false);
  
  const handleClickprofile = () => {
    if (showProfile) {
      setShowProfile(false);
    } else {
      setShowProfile(true);
    }
    
  };


  return (
    <>
      <div>
        <DashboardPage />
      </div>
    </>
  );
}
