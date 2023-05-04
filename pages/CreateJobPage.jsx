import React, {useState, useEffect, useContext} from 'react'
import CreateJobPage1 from "./CreateJobPage1"
import CreateJobPage2 from './CreateJobPage2'
import CreateJobPage3 from './CreateJobPage3'
import StepProgressBar from "react-step-progress";
import ModalLoadComponent from "../components/ModalLoadComponent";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentJob, selectCurrentJob } from "../features/jobSlice";
import { setCurrentProjet } from '../features/projetSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setToken } from '../features/token';
import GetCookies from "../hooks/getCookies";
import { UserContext } from "../context/UserContext";


function CreateJobPage() {
  const router = useRouter()
 const step1Content = <CreateJobPage1 />;
 const step2Content = <CreateJobPage2 />;
 const step3Content = <CreateJobPage3 />;
 //const token = useSelector(setToken);
 const { currentUser, setCurrentUser } = useContext(UserContext);
 const [isLoading, setIsLoading] = useState(false);
  const job = useSelector(setCurrentJob);
  const cprojet = useSelector(setCurrentProjet);
  const [success, setShowSucces] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const token = GetCookies("token")
const dispatch = useDispatch();
 
 const createJob = async () => {

    
     setIsLoading(true);
     //alert(job.payload.job.currentJob.description);
     const data = await axios
       .post(
         `https://jobapp-3jo8.onrender.com/users/projet/job/save`,
         {
           name: job.payload.job.currentJob.title,
           logo: "uuuu",
           description: job.payload.job.currentJob.description,
           type: job.payload.job.currentJob.role,
           livrable_date: job.payload.job.currentJob.delay,
           experience: job.payload.job.currentJob.experience,
           skill: job.payload.job.currentJob.skill,
           certification: job.payload.job.currentJob.certification,
           langue: job.payload.job.currentJob.langue,
           isWorkTeam: "true",
           contratType: job.payload.job.currentJob.contract,
           workPreference: job.payload.job.currentJob.workPreference,
           delay: job.payload.job.currentJob.delay,
           file: job.payload.job.currentJob.file,
           montant: job.payload.job.currentJob.rate,
           projetID: cprojet.payload.projet.currentProjet.id,
         },
         {
           headers: {
             Authorization: `basic ${token}`,
           },
         }
       )
       .catch((err) => console.log(err.message));
      setIsLoading(false);
     if (data) {
       setMessage(data?.data.message);
       setShowSucces(true);
       setShowMessage(true);
       setTimeout(() => {
         setShowMessage(false);
         router.back()
       }, 500);
      
     } 
     else 
     {
       setShowSucces(false);
       setShowMessage(true);
       setTimeout(() => {
         setShowMessage(false);
       }, 2000);
     }

    
   
 };

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


 function step2Validator() {
   // return a boolean
 }
 //console.log(currentAdmin?.first_name);
 function step3Validator() {
   //alert(regiterValide)
 }

 function onFormSubmit() 
 {
  
  createJob()
  //console.log(job.payload.job.currentJob)

   //handleRegister();
   //console.log(currentUser)
   //setRegisterValide(true)

   // handle the submit logic here
   // This function will be executed at the last step
   // when the submit button (next button in the previous steps) is pressed
 }

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
             label: "Role infomation",
             name: "step 1",
             content: step1Content,
             //validator: step3Validator,
           },
           {
             label: "Preferred candidature",
             name: "step 2",
             content: step2Content,
             // validator: step2Validator,
           },
           {
             label: "Engagement information",
             name: "step 3",
             content: step3Content,
             // validator: step3Validator,
           },
          
         ]}
       />
     </div>
   );
}

export default CreateJobPage


CreateJobPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};