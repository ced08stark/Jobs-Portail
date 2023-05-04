import React, {useState} from 'react'
import StepProgressBar from "react-step-progress";
import ModalLoadComponent from "../components/ModalLoadComponent";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RegisterConsultant1 from './RegisterConsultant1';
import RegisterEmployerPage3 from "./RegisterEmployerPage3";
import RegisterEmployerPage4 from "./RegisterEmployerPage4";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";
import SetCookies from "../hooks/setCookies";
import RemoveCookies from "../hooks/removeCookies"



function RegisterConsultantPage() {
  const dispatch = useDispatch();
    const [regiterValide, setRegisterValide] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
     const [isLoading, setIsLoading] = useState(false);
      const [success, setShowSucces] = useState(false);
       const [status, setStatus] = useState(0);
    const step1Content = (
      <RegisterConsultant1 />
    );
    const step2Content = <RegisterEmployerPage3 />;
    const step3Content = <RegisterEmployerPage4 />;
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser.role);
    const router = useRouter();
      const getData = async (d) => {
        //alert(result?.data?.user?.id);
        alert(d)
        const data = await axios
          .post("https://jobapp-3jo8.onrender.com/users/employer", {
            userID: d.data.user.id,
          })
          .catch((err) => console.log(err.message));

        setCurrentUser({
          ...currentUser,
          employerID: data?.data.id,
          id: d?.data?.user?.id,
          first_name: d?.data?.user?.first_name,
          last_name: d?.data?.user?.last_name,
          email: d?.data?.user?.email,
          role: d?.data?.user?.role,
        });
        SetCookies(
          "currentUser",
          JSON.stringify({
            employerID: data?.data.id,
            id: d?.data?.user?.id,
            first_name: d?.data?.user?.first_name,
            last_name: d?.data?.user?.last_name,
            email: d?.data?.user?.email,
            role: d?.data?.user?.role,
          })
        );

        setTimeout(() => {
            router.push("/SplashPage");
        }, 2000);
        //alert(data?.data.id);
      };

      const handleLogin = async (email, password) => {
        alert("connexion")
        setIsLoading(true);
        const data = await axios
          .post("https://jobapp-3jo8.onrender.com/users/login", {
            email: `${email}`,
            password: `${password}`,
          })
          .catch((err) => console.log(err.message));
        setIsLoading(false);
        console.log(data);
        //console.log(data?.data.user?.password);
        if (data?.status == 200) {
          RemoveCookies("currentUser");
          RemoveCookies("token");
          SetCookies("token", data?.data.token);
          setCurrentUser({
            ...currentUser,
            id: data?.data?.user?.id,
            first_name: data?.data?.user?.first_name,
            last_name: data?.data?.user?.last_name,
            email: data?.data?.user?.email,
            role: data?.data?.user?.role,
          });

          dispatch(setToken(data?.data.token));
          getData(data);
          setMessage("authentification success");
          setShowSucces(true);
          setShowMessage(true);
          
        } else {
          setShowSucces(false);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        }
      };
      const handleRegister = async () => {
        setIsLoading(true);
        const data = await axios
          .post(
            "https://jobapp-3jo8.onrender.com/users/registration/consultant",
            {
              email: currentUser?.email,
              password: currentUser?.password,
              first_name: currentUser?.first_name,
              last_name: currentUser?.last_name,
              profile: currentUser?.profile,
              role: currentUser?.role,
              phone: currentUser?.phone,
            }
          )
          .catch((err) => console.log(err.message));
        setIsLoading(false);
        //console.log(data.data?.data[0]?.id);
        //console.log(data?.data.message);
        setShowMessage(true);
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
      }, 1000);
    }
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
      
    function step2Validator() {
      // return a boolean
    }
    //console.log(currentAdmin?.first_name);
    function step3Validator() {
      

    }

    function onFormSubmit() {
      handleRegister()
      
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed
    }
  return (
    <div>
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
            label: "about you",
            name: "step 1",
            content: step1Content,
            // validator: step3Validator,
          },
          {
            label: "location information",
            name: "step 2",
            content: step2Content,
            // validator: step2Validator,
          },

          {
            label: "Jobs information",
            name: "step 3",
            content: step3Content,
            // validator: step3Validator,
          },
        ]}
      />
    </div>
  );
}

export default RegisterConsultantPage

RegisterConsultantPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
