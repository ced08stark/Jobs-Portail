import React from 'react'
import { WrenchIcon, EyeIcon, PencilIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';


function RolesPage() {
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
        
    }
  return (
    <div className="flex w-full h-screen justify-center items-center space-y-12 flex-col">
      <span className="font-extrabold text-3xl"></span>
      <span className="text-3xl font-bold text-black">Select user type</span>
      <div className="bg-gray-200/40 w-[60%] rounded-lg">
        <div className="block lg:flex  items-center justify-between p-3">
          <div
            id="1"
            className="flex-col p-2 w-[200px] h-[200px] flex items-center justify-center shadow-xl space-y-3 rounded-lg bg-white text-blue-500 cursor-pointer"
            onClick={() => handleClick(1)}
          >
            <WrenchIcon className="h-12 w-12 " />
            <span className="">Admin</span>
          </div>
          <div
            id="2"
            onClick={() => handleClick(2)}
            className="flex-col p-2 w-[200px] h-[200px] flex items-center justify-center shadow-xl space-y-3 rounded-lg bg-white text-blue-500 cursor-pointer"
          >
            <EyeIcon className="h-12 w-12" />
            <span className="">Employer</span>
          </div>
          <div
            id="3"
            onClick={() => handleClick(3)}
            className="flex-col p-2 w-[200px] h-[200px] flex items-center justify-center shadow-xl space-y-3 rounded-lg bg-indigo-500 text-white cursor-pointer"
          >
            <PencilIcon className="h-12 w-12 " />
            <span className="">Staff</span>
          </div>
        </div>
        <div>
          <p className="p-3">
            you would have a permission but you can{"'"}t edit or make change
          </p>
        </div>
      </div>
      <div className="space-x-5 flex">
        <button
          className="px-12 rounded-full py-2 text-blue-500 flex space-x-4"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-6 w-6 " />
          <span>back</span>
        </button>
        <button
          className="px-24 rounded-full py-2 bg-blue-500 text-white"
          onClick={() => router.push("/RegisterEmployer")}
        >
          continue
        </button>
      </div>
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

