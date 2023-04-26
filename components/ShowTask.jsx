import React, {useState} from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import { DateRangePicker } from "react-date-range";

function ShowTask({currentTask}) {
    console.log(currentTask);
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setShowSucces] = useState(false);

    const [startDate, setDateStart] = useState(new Date());
    const [endDate, setDateEnd] = useState(new Date());

    const handleSelect = (ranges) => {
      setDateStart(ranges.selection.startDate);
      setDateEnd(ranges.selection.endDate);
      
    };
    
    const selectionRange = {
      startDate: new Date(currentTask.startDate),
      endDate: new Date(currentTask.endDate),
      key: "selection",
    };

    const close = () => {
      const lightbox = document.querySelector("#lightboxTask");
      setDateStart(new Date());
      setDateEnd(new Date());
      lightbox.classList.remove("scale-100");
      lightbox.classList.add("scale-0");
    };
  return (
    <section
      className="fixed z-50  inset-0 w-full h-full dark:text-white flex-col   flex items-center justify-center transition-all duration-300 scale-0"
      id="lightboxTask"
    >
      <div
        className="flex-col space-y-2  flex rounded-md bg-white dark:bg-gray-800 w-[90%]  sm:w-1/2 h-auto    sm:p-0 shadow-lg shadow-black overflow-y-scroll overflow-scroll scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100"
        id="lightbox-body"
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-xl sm:text-3xl font-bold ">
            Task information
          </span>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => close()}
          />
        </div>
        <div className="space-y-2">
          <div>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={["sky"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowTask
