"use client";
import Head from "next/head";
import React, { useState } from "react";
import LoginPage from "./LoginPage"
import DashboardPage from "./DashboardPage";
import Dashboard2 from "./Dashboard2"
import RolesPage from "./RolesPage";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//import SideBar from "./components/SideBar";
//import ProfilOption from "./components/ProfilOption";



export default function Home() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [showProfile, setShowProfile] = useState(false);
  

  return (
    <>
      <div>{currentUser?.role == "Employer"?<DashboardPage />: <Dashboard2 />} </div>
    </>
  );
}
