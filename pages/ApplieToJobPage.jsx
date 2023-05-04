import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios'
import JobApplieComponent2 from '../components/JobApplieComponent2';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { setToken } from "../features/token";
import { useSelector, useDispatch } from "react-redux";
import SetCookies from "../hooks/setCookies";
import GetCookies from "../hooks/getCookies"

function ApplieToJobPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const [currentConsultant, setCurrentConsultant] = useState(0)
  const token = GetCookies("token");
  const [applieJobs, setApplieJob] = useState([])
   const getConsultant = async () => {
  let user = JSON.parse(GetCookies("currentUser"));
     const data = await axios
       .post(
         `https://jobapp-3jo8.onrender.com/users/consultant/consultantInfo`,
         {
           userID: user?.id,
         },
         {
           headers: {
             Authorization: `basic ${token}`,
           },
         }
       )
       .catch((err) => console.log(err.message));
     if (data?.status == 200) {
      
       setCurrentConsultant(data?.data.id);
       const r = await axios
         .post(
           `https://jobapp-3jo8.onrender.com/users/applicant`,
           {
             consultantID: data?.data.id,
           },
           {
             headers: {
               Authorization: `basic ${token}`,
             },
           }
         )
         .catch((err) => console.log(err.message));
        //console.log(r.data.result);
        if(r?.status == 200){
         var i = 0;
        
          for(i = 0; i<r.data.result.length; i++){
             //console.log(r.data.result[i].jobID);
             
              if (r.data.result[i].jobID != null) {
                
                 const  jobs =  await axios
                      .get(
                        `https://jobapp-3jo8.onrender.com/users/projet/job/${r?.data.result[i].jobID}`
                      )
                      .catch((err) => console.log(err.message));

                    if(jobs?.status == 200){
                      console.log(jobs);
                          
                          setApplieJob((applieJobs) => [
                           ...applieJobs,
                           jobs?.data.result,
                         ])
                    }
                       
              }
             
          } 
        }
        
     }
    
   };

    

   useEffect(()=>{
     
    getConsultant()

    
   }, [])

  return (
    <div className="flex flex-col">
      <div>
        {
          /* {applieJobs?.map((job) => (
          <JobApplieComponent2
            key={job.id}
            type={job.contratType}
            montant={job.montant}
            certification={job.certification}
            title={job.title}
            description={job.description}
            delay={job.delay}
          />
        ))} */
          applieJobs
            .filter((job, i) => applieJobs.indexOf(job) === i)
            .map((job) => (
              <JobApplieComponent2
                key={job.id}
                id={job.id}
                type={job.contratType}
                montant={job.montant}
                certification={job.certification}
                title={job.title}
                description={job.description}
                delay={job.delay}
                consultantID={currentConsultant}
              />
            ))
        }
      </div>
    </div>
  );
}

export default ApplieToJobPage
