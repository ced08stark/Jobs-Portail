import React, { useEffect, useState, useContext } from 'react'
import Image from "next/image";
import SideBar from "../components/SideBar";
import * as Icons from "@heroicons/react/24/solid";
import ProfilOption from "../components/ProfilOption";
import Link from "next/link";
import JobComponent from '../components/JobComponent';
import JobViewComponent from '../components/JobViewComponent';
import {ChevronRightIcon} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { selectCurrentProjet, setCurrentProjet } from '../features/projetSlice';
import { useSelector, useDispatch } from "react-redux";
import { setToken } from '../features/token';
import { UserContext } from '../context/UserContext';
import axios from 'axios'
import GetCookies from '../hooks/getCookies';

function ProjetViewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const token = GetCookies("token");
  const dispatch = useDispatch()
  const router = useRouter()
  const currentProjet = useSelector(setCurrentProjet)
  const [jobLists, setJobs] = useState([])
  //console.log(currentProjet)
   const getAllJob = async () => {
     setIsLoading(true);
     const data = await axios
       .get("https://jobapp-3jo8.onrender.com/users/projet/jobs", {
         headers: {
           Authorization: `basic ${token}`,
         },
       })
       .catch((err) => console.log(err.message));
     setIsLoading(false);
     //console.log(data);
     if (data?.status == 200) {
        setJobs(data?.data.result);
     }
   };
   useEffect(() => {
     //console.log(token);
     getAllJob();
   }, []);
   useEffect(() => {
     let user = GetCookies("currentUser");
     let projet = GetCookies("currentProjet");
     //console.log(JSON.parse(projet));

     if (currentUser?.id == null && user == null) {
       router.push("/LoginPage");
     } else if (currentUser?.id == null) {
       setCurrentUser(JSON.parse(user));
       //console.log(projet);
       dispatch(setCurrentProjet(JSON.parse(projet)));
     }
   }, []);
  return (
    <div className="w-full h-full">
      <JobViewComponent />
      <main>
        <div className="flex m-4 p-3 bg-white items-center space-x-3 justify-between">
          <div className="flex bg-white items-center space-x-3">
            <span
              href="/"
              className="font-bold lg:flex hidden text-black text-xl items-center cursor-pointer"
              onClick={() => router.back()}
            >
              Projects <ChevronRightIcon className="w-6 h-6 pt-1 mt-1" />
            </span>
            <Link
              href="/"
              className="font-bold lg:flex hidden text-black text-xl  items-center"
            >
              <span>jobs</span>
              <ChevronRightIcon className="w-6 h-6 pt-1 mt-1" />
            </Link>
            <span className="underline text-black cursor-pointer font-semibold">
              {currentProjet?.payload?.projet?.currentProjet?.title}
            </span>
          </div>
          <div>
            <button
              className="px-3 text-white bg-indigo-500 p-1 font-bold rounded-md"
              onClick={() => router.push("/CreateJobPage")}
            >
              create job
            </button>
          </div>
        </div>
        <div className=" bg-white m-4  overflow-hidden">
          <div className="py-3 flex-wrap flex overflow-scroll scrollbar-thin  scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100 h-[500px] w-full">
            {jobLists
              .filter(
                (dataFilter) =>
                  dataFilter?.projetID ==
                  currentProjet?.payload.projet.currentProjet.id
              )
              .map((data) => (
                <JobComponent
                  key={data?.id}
                  id={data?.id}
                  type={data?.type}
                  certification={data?.certification}
                  title={data?.name}
                  delay={data?.delay}
                  description={data?.description}
                  montant={data?.montant}
                  author={currentUser?.company_name}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjetViewPage