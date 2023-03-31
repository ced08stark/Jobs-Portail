import React, {useState} from 'react'
import Image from 'next/image';
import {XMarkIcon} from "@heroicons/react/24/outline"

function AddJob() {
   
     const handleAddProjet = (e) => {
       const lightbox = document.querySelector("#lightbox");
       const idName = e.target.getAttribute("id");
       if (idName === "lightbox") {
         lightbox.classList.remove("scale-100");
         lightbox.classList.add("scale-0");
       }
     };
     const AddProjet = () => {
       const lightbox = document.querySelector("#lightbox");
       
         lightbox.classList.remove("scale-100");
         lightbox.classList.add("scale-0");
       
     };

     const [projet, setProjet] = useState({
        name: "",
        description: "",
        montant: "0",
        createdAt: ""
     })
    
  return (
    <section
      class="fixed z-50  inset-0 w-full h-full dark:text-white  flex items-center justify-center transition-all duration-300 scale-0"
      id="lightbox"
      onClick={handleAddProjet}
    >
      <div
        class="flex-col space-y-3  flex rounded-md bg-white dark:bg-gray-800 w-[80%]  sm:w-1/2 h-[600px]  overflow-hidden  sm:p-0 shadow-lg shadow-black "
        id="lightbox-body"
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-xl sm:text-3xl font-bold ">Create projet</span>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => AddProjet()}
          />
        </div>
        <div>
          <div className="flex-col flex p-4 space-y-2">
            <span className="font-bold text-xl">Projet name</span>
            <input
              type="text"
              className="p-2 border-none outline-1 border outline-indigo-500 rounded-md"
              placeholder="enter your projet name"
            />
          </div>
          <div className="flex-col flex px-4 space-y-2">
            <span className="font-bold text-xl">Description</span>
            <textarea
              className="p-2 border-none outline-1 border outline-indigo-500 rounded-md h-32"
              placeholder="enter your projet description"
            ></textarea>
          </div>
          <div className="flex space-x-2 justify-end items-center p-4">
            <span>Montant</span>
            <input
              onChange={(e) =>
                setProjet({ ...projet, montant: e.target.value })
              }
              type="number"
              placeholder="$"
              step={5}
              min={0}
              className="p-2 border-none outline-1 border outline-indigo-500 rounded-md"
            />
          </div>
          <div className="flex items-center justify-end p-4 space-x-3 mt-6">
            <button
              onClick={() => AddProjet()}
              className="px-10 text-xs sm:text-base py-2 rounded-md hover:bg-gray-300/50 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => AddProjet()}
              className="px-10 text-xs sm:text-base sm:px-20  sm:font-semibold py-2 text-white rounded-md font-bold bg-indigo-500"
            >
              Create Projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddJob