import React from 'react'
import { useRouter } from 'next/router';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function SplashPage() {
  const {currentUser} = useContext(UserContext)
    const route = useRouter()
    setTimeout(()=>{
        if (currentUser.role == "Employer"){
          route.push("/DashboardPage");
        }
        else
        {
          route.push("/Dashboard2");
        }
        
    }, 4000)
  return (
    <div className="flex items-center justify-center h-screen w-full bg-indigo-500">
      <span className="text-[80px] lg:text-[200px] font-extrabold  text-white transition-all duration-100 animate-bounce">
        Jobs
        <div className="spinner-grow text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </span>
    </div>
  );
}

SplashPage.getLayout = function PageLayout(page){
   return <>{page}</>;
}
