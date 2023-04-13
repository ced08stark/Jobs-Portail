import React from 'react'
import Image from "next/image";
import * as Icons from "@heroicons/react/24/solid";
import { setCurrentJob } from "../features/jobSlice";
import { useSelector, useDispatch } from "react-redux";

function JobApplieComponent2({
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
    <div className="relative flex flex-col h-auto shadow-lg border p-3 space-y-2 rounded-lg cursor-pointer duration-500 hover:scale-95 m-4">
      <Icons.BookmarkIcon className="w-8 h-8 absolute right-0" />
      <div className="flex items-center">
        <div className="avatar avatar-online flex items-center justify-center">
          <Icons.UserCircleIcon className='w-10 h-10 text-black' />
        </div>
        <span className="font-bold text-center w-full">{title}</span>
      </div>
      <div className="text-gray-500 flex w-[50%]">{description}</div>
      <div className="flex space-x-1 items-center py-3 border-b">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-300 flex items-center justify-center ">
          <Icons.BuildingOffice2Icon className="w-8 h-8" />
        </div>
        <span>{type}</span>
      </div>
      <div className="flex justify-between">
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
        <div>
          <span>
            Starting at <span className="font-bold text-xl">${montant}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobApplieComponent2
