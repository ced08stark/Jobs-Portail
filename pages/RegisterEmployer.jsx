import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import StepProgressBar from "react-step-progress";
import ModalLoadComponent from "../components/ModalLoadComponent";

import RegisterEmployerPage1 from "./RegisterEmployerPage1"
import RegisterEmployerPage2 from "./RegisterEmployerPage2";
import RegisterEmployerPage3 from "./RegisterEmployerPage3";
import RegisterEmployerPage4 from "./RegisterEmployerPage4";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";

function RegisterEmployer() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [success, setShowSucces] = useState(false);
  const step1Content = <RegisterEmployerPage1 />;
  const step2Content = <RegisterEmployerPage2 />;
  const step3Content = <RegisterEmployerPage3 />;
  const step4Content = <RegisterEmployerPage4 />;
  const { currentUser, setCurrentUser } = useContext(UserContext);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
  const router = useRouter();
  const getData = async () => {
   
    await axios
      .post("https://jobapp-3jo8.onrender.com/users/employer", {
        userID: currentUser.id,
      })
      .then(function (data) {
        setCurrentUser({
          ...currentUser,
          employerID: data?.data?.id,
        });
      })
      .catch((err) => console.log(err.message));
    //console.log(data.data.id);

    
  };
  //https://jobapp-3jo8.onrender.com
 const handleLogin = async (email, password) => {
   setIsLoading(true);
   const data = await axios
     .post("https://jobapp-3jo8.onrender.com/users/login", {
       email: `${email.toString()}`,
       password: `${password.toString()}`,
     })
     .catch((err) => console.log(err.message));
   setIsLoading(false);
   //console.log(data.data?.data[0]?.id);
   //console.log(data?.data.user?.password);
   if (data.status == 200) {
     setCurrentUser({
       ...currentUser,
       id: data?.data?.user?.id,
       first_name: data?.data?.user?.first_name,
       last_name: data?.data?.user?.last_name,
       email: data?.data?.user?.email,
       role: data?.data?.user?.role,
     });
     dispatch(setToken(data?.data.token));
     alert(data?.data.user.role);

     //  localStorage.setItem(
     //    "user",
     //    JSON.stringify({
     //      email: data?.data?.user?.email,
     //      first_name: data?.data?.user?.first_name,
     //      last_name: data?.data?.user?.last_name,
     //      phone: data?.data?.user?.phone,
     //    })
     //  );
     getData();
     //setMessage("authentification success");
     //setShowSucces(true);
     //setShowMessage(true);
    //  setTimeout(() => {
    //    if (currentUser.role == "Employer") {
    //      router.push("/DashboardPage");
    //    } else {
    //      router.push("/Dashboard2");
    //    }
    //  }, 2000);
   } else {
    //  setShowSucces(false);
    //  setShowMessage(true);
    //  setTimeout(() => {
    //    setShowMessage(false);
    //  }, 2000);
    alert(null)
   }
 };
  const handleRegister = async () => {
    setIsLoading(true);
    const data = await axios
      .post("https://jobapp-3jo8.onrender.com/users/registration/employer", {
        email: currentUser?.email,
        password: currentUser?.password,
        first_name: currentUser?.first_name,
        last_name: currentUser?.last_name,
        profile: currentUser?.profile,
        role: currentUser?.role,
        phone: currentUser?.phone,
      })
      .catch((err) => console.log(err.message));
      setIsLoading(false);
    //console.log(data.data?.data[0]?.id);
    //console.log(data?.data.message);
    setShowMessage(true);
    if (data?.status == 200) {
      setMessage(data?.data.message);
      setShowSucces(true)
      setCurrentUser({
        ...currentUser,
        id: data?.data?.user?.id,
      });
      handleLogin(currentUser?.email, currentUser?.password);
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     id: data?.data?.user?.id,
      //     email: data?.data?.user?.email,
      //     first_name: data?.data?.user?.first_name,
      //     last_name: data?.data?.user?.last_name,
      //     phone: data?.data?.user?.phone,
      //     role: data?.data?.user?.role,
      //     profile: data?.data?.user?.profile,
      //   })
      // );
       setTimeout(() => {
         setShowMessage(false)
         router.push("/SplashPage");
       }, 4000);
    //   setMessage(data?.data.message);
    //   setShowSucces(true);
    //   setShowMessage(true);
    //   setTimeout(() => {
    //     setShowMessage(false);
    //     route.push("/DashboardPage");
    //   }, 2000);
    // } else {
    //   setShowSucces(false);
    //   setShowMessage(true);
    //   setTimeout(() => {
    //     setShowMessage(false);
    //   }, 2000);
    }
    else{
      setMessage("fill a empty field")
      setShowSucces(false)
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  function step2Validator() {
    // return a boolean
  }
  //console.log(currentAdmin?.first_name);
  function step3Validator() {
    
     
     
  }

  function onFormSubmit() {
    handleRegister()
    //console.log(currentUser)
    //setRegisterValide(true)
   
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  
  useEffect(() => {
   
  });
  return (
    <div className="bg-white">
      {isLoading && <ModalLoadComponent />}
      <StepProgressBar
        startingStep={0}
        previousBtnName="preview"
        nextBtnName="next"
        contentClass="m-auto"
        labelClass="progresslabel"
        primaryBtnClass="text-white px-22  rounded-full progressbg"
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Personal infomation",
            name: "step 1",
            content: step1Content,
            //validator: step3Validator,
          },
          {
            label: "Company information",
            name: "step 2",
            content: step2Content,
            // validator: step2Validator,
          },
          {
            label: "Company location",
            name: "step 3",
            content: step3Content,
            // validator: step3Validator,
          },
          {
            label: "payment information",
            name: "step 4",
            content: step4Content,
            validator: step3Validator,
          },
        ]}
      />
    </div>
  );
}

export default RegisterEmployer;

RegisterEmployer.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
