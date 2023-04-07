import React, {useState} from 'react'
import { WrenchIcon, EyeIcon, PencilIcon, ArrowLeftIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';
import Link from 'next/link';


function RolesPage() {
  const [principalRoute, setPrincipalRoute] = useState("/RegisterConsultant")
  const router = useRouter();
    const handleClick = (id)=>{
        let active = document.querySelector('.bg-indigo-500')
        let currentElement = document.getElementById(`${id}`)

        active.classList.remove('bg-indigo-500')
        active.classList.remove("text-white");
        active.classList.add("bg-white");
        active.classList.add("text-indigo-500");
        currentElement.classList.remove("bg-white");
        currentElement.classList.remove("text-indigo-500");
        currentElement.classList.add("bg-indigo-500");
        currentElement.classList.add("text-white");
        if(id==2){
          setPrincipalRoute("/RegisterEmployer")
        }
        else{
          setPrincipalRoute("/RegisterConsultant");
        }
        
    }
  return (
    <div className="flex w-full h-screen justify-center bg-white items-center space-y-12 flex-col">
      <span className="font-extrabold text-3xl">Let{"'"}s sign you up</span>
      <span className="text-xl lg:text-3xl font-bold text-black ">Select a type of account</span>
      <div className="m-10 lg:m-auto  bg-gray-200/40 rounded-lg flex flex-col">
        <div className=" flex  items-center justify-around lg:justify-between p-3">
          <div
            id="2"
            onClick={() => handleClick(2)}
            className="flex-col p-2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center shadow-xl space-y-3 rounded-lg bg-white text-blue-500 cursor-pointer active"
          >
            <BuildingLibraryIcon className="h-8 w-8 lg:h-12 lg:w-12" />
            <span className="text-xs lg:text-base text-center">
              Employer or organisation
            </span>
          </div>
          <div
            id="3"
            onClick={() => handleClick(3)}
            className="flex-col p-2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center shadow-xl space-y-3 rounded-lg bg-indigo-500 text-white cursor-pointer"
          >
            <PencilIcon className="h-8 w-8 lg:h-12 lg:w-12" />
            <span className="text-xs lg:text-base text-center">
              Staff Consultant
            </span>
          </div>
        </div>
        <div>
          <p className="p-3 text-sm lg:text-base text-center">
            Discover a new to go to work by creating you free account
          </p>
        </div>
      </div>
      <div className="space-x-5 flex">
        <button
          className="px-12 rounded-full py-2 text-blue-500 flex space-x-4 text-xs lg:text-base"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-4 w-4 lg:h-6 lg:w-6 " />
          <span>back</span>
        </button>
        <button
          className="px-10 lg:px-24 rounded-full py-2 bg-blue-500 text-white text-xs lg:text-base"
          onClick={() => router.push(`${principalRoute}`)}
        >
          continue
        </button>
      </div>
      <span className='text-sm lg:text-base'>Already have an account with us? <Link href='/LoginPage'>Log in here</Link></span>
    </div>
  );
}

export default RolesPage


RolesPage.getLayout = function PageLayout(page){
    return(
        <>
        {page}
        </>
    )
}

