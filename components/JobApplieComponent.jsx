import React from "react";
import Image from "next/image";
import * as Icons from "@heroicons/react/24/solid";
import { setCurrentJob } from "../features/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "emailjs-com"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { setToken } from "../features/token";



function JobApplieComponent({
  id,
  title,
  description,
  author,
  authorProfile,
  montant,
  delay,
  type,
  certification,
  projetID,
}) 
{
  const { currentUser, setCurrentUser } = useContext(UserContext);
   const token = useSelector(setToken);
  const getConsultant =async()=>{
    const data = await axios
      .post(
        `https://jobapp-3jo8.onrender.com/users/consultant/consultantInfo`,
        {
          userID: currentUser?.id,
        },
        {
          headers: {
            Authorization: `basic ${token.payload.token.token}`,
          },
        }
      )
      .catch((err) => console.log(err.message));
      if (data?.status == 200) {
        //console.log(data?.data.id);
        const r = await axios
          .post(
            `https://jobapp-3jo8.onrender.com/users/applicant/save`,
            {
              consultantID: data?.data.id,
              jobID: id,
            },
            {
              headers: {
                Authorization: `basic ${token.payload.token.token}`,
              },
            }
          )
          .catch((err) => console.log(err.message));
           console.log(r);
      }
      
  } 
  async function sendMail() {
    getConsultant()
    //alert(projetID);
    let email = null;
    let name = null;
    const getProjetByID = async () => {
      const data = await axios
        .get(`https://jobapp-3jo8.onrender.com/users/projet/${projetID}`)
        .catch((err) => console.log(err.message));

      console.log(data);
      //alert(data?.status)
      if (data?.status == 200) {
        //setJobs(data?.data.result);
        //alert(1);
        const employerID = data?.data.Projet.employerID;

        const res = await axios
          .get(
            `https://jobapp-3jo8.onrender.com/users/employerInfo/${employerID}`
          )
          .catch((err) => console.log(err.message));
        console.log(res);
        if (res?.status == 200) {
          //setJobs(data?.data.result);
          const userID = res?.data.userID;
          //alert(userID);
          const res2 = await axios
            .get(`https://jobapp-3jo8.onrender.com/users/user/${userID}`)
            .catch((err) => console.log(err.message));
          console.log(res2);
          if (res2?.status == 200) {
            //setJobs(data?.data.result);
            alert(`demande envoyer a ${res2?.data.email}`);
            email = res2?.data.email;
            name = res2?.data.first_name;
          }

          await emailjs.send(
            "service_de3rxa6",
            "template_sffgjeb",
            {
              name: name,
              message: "welcome",
              to_name: currentUser?.first_name,
              link: "https://jobsportail-jobsportail.vercel.app/ProfilePage",
              email: email,
            },
            "kbFvSSI8XE0HWTBg2"
          );
        }
      }
    };
    //alert(email)
    getProjetByID();
  };
   
  return (
    <div className="w-full flex flex-col h-auto md:w-1/2 lg:w-[460px] shadow-lg border p-3 space-y-2 rounded-lg cursor-pointer duration-500 hover:scale-95 m-4 relative">
      <div className="flex items-center">
        <div className="avatar avatar-online flex bg-slate-200 rounded-full items-center justify-center">
          <Icons.UserCircleIcon className="w-10 h-10" />
        </div>
        <span className="font-bold text-center w-full capitalize">{title}</span>
      </div>
      <div className="text-gray-500 flex">{description}</div>
      <div className="flex space-x-1 items-center py-3 border-b">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-300 flex items-center justify-center ">
          <Icons.BuildingOffice2Icon className="w-8 h-8" />
        </div>
        <span>{type}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
        </div>
        <div>
          <span>
            Starting at <span className="font-bold text-xl">${montant}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap pb-8">
        <div className="flex mr-2">
          <Icons.BanknotesIcon className="w-4 h-4" />
          <span className="text-[10px]">{type}</span>
        </div>
        <div className="flex mr-2">
          <Icons.BookOpenIcon className="w-4 h-4" />
          <span className="text-[10px]">{certification}</span>
        </div>
        <div className="flex mr-2">
          <Icons.CalendarIcon className="w-4 h-4" />
          <span className="text-[10px]">{`jusqu'au ${delay} `}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="px-6 text-white font-semibold py-1 rounded-full right-4 bg-indigo-500 hover:bg-indigo-700"
          onClick={() => sendMail()}
        >
          Apply to job
        </button>
      </div>
    </div>
  );
}

export default JobApplieComponent;
