import React, {useState} from 'react'
import StepProgressBar from "react-step-progress";
import ModalLoadComponent from "../components/ModalLoadComponent";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import RegisterConsultant1 from './RegisterConsultant1';
import RegisterEmployerPage3 from "./RegisterEmployerPage3";

function RegisterConsultantPage() {
    const [regiterValide, setRegisterValide] = useState(false);
    const step1Content = (
      <RegisterConsultant1 />
    );
    const step2Content = <RegisterEmployerPage3 />;
    const step3Content = <RegisterEmployerPage3 />;
    const { currentAdmin } = useContext(AdminContext);
    const router = useRouter();

    function step2Validator() {
      // return a boolean
    }
    //console.log(currentAdmin?.first_name);
    function step3Validator() {
      if (currentAdmin.first_name == "r" || currentAdmin.last_name == "r") {
        return false;
      } else {
        return true;
      }
      //alert(regiterValide)
    }

    function onFormSubmit() {
      setRegisterValide(true);
      setTimeout(() => {
        setRegisterValide(false);
        router.push("/DashboardPage");
      }, 4000);
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed
    }
  return (
    <div>
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
            label: "Company location",
            name: "step 3",
            content: step3Content,
            // validator: step3Validator,
          },
          {
            label: "Jobs information",
            name: "step 4",
            content: step3Content,
            validator: step3Validator,
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
