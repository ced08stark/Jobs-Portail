import React from "react";
import Image from "next/image";
import * as Icons from "@heroicons/react/24/solid";
import { setCurrentJob } from "../features/jobSlice";
import { useSelector, useDispatch } from "react-redux";

function JobApplieComponent({
  id,
  title,
  description,
  author,
  authorProfile,
  montant,
  delay,
  type,
  certification,
}) {
  return (
    <div className="w-full flex flex-col h-auto md:w-1/2 lg:w-[450px] shadow-lg border p-3 space-y-2 rounded-lg cursor-pointer duration-500 hover:scale-95 m-4 relative">
      <div className="flex items-center">
        <div className="avatar avatar-online flex bg-slate-200 rounded-full items-center justify-center">
          <Icons.UserCircleIcon className="w-10 h-10" />
        </div>
        <span className="font-bold text-center w-full">{title}</span>
      </div>
      <div className="text-gray-500 flex">{description}</div>
      <div className="flex space-x-1 items-center py-3 border-b">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-300 flex items-center justify-center ">
          <Icons.BuildingOffice2Icon className="w-8 h-8" />
        </div>
        <span>{type}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
        </div>
        <div>
          <span>
            Starting at <span className="font-bold text-xl">${montant}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex mr-2">
          <Icons.BanknotesIcon className="w-4 h-4" />
          <span className="text-[10px]">{type}</span>
        </div>
        <div className="flex mr-2">
          <Icons.BookOpenIcon className="w-4 h-4" />
          <span className="text-[10px]">{certification}</span>
        </div>
        <div className="flex mr-2">
          <Icons.CalendarIcon className="w-4 h-4" />
          <span className="text-[10px]">{`jusqu'au ${delay} `}</span>
        </div>
      </div>
      <button className="absolute px-6 text-white font-semibold py-1 rounded-full right-4 top-2 bg-indigo-500 hover:bg-indigo-700">
        Apply
      </button>
    </div>
  );
}

export default JobApplieComponent;
