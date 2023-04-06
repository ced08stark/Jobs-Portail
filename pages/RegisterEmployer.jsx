import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import StepProgressBar from "react-step-progress";

import RegisterEmployerPage1 from "./RegisterEmployerPage1"
import RegisterEmployerPage2 from "./RegisterEmployerPage2";

function RegisterEmployer() {
  const step1Content = <RegisterEmployerPage1 />;
  const step2Content = <RegisterEmployerPage2 />;
  const step3Content = <h1>Step 3 Content</h1>;

  function step2Validator() {
    // return a boolean
  }

  function step3Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  
  useEffect(() => {
   
  });
  return (
    <div className="">
      <StepProgressBar
        startingStep={0}
        previousBtnName="preview"
        nextBtnName="next"
        contentClass="m-auto"
        primaryBtnClass="text-white px-10 py-1 rounded-full btn"
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Step 1",
            name: "step 1",
            content: step1Content,
          },
          {
            label: "Step 2",
            name: "step 2",
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: "Step 3",
            name: "step 3",
            content: step3Content,
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
