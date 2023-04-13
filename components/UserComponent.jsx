import React from 'react'
import {UserIcon} from "@heroicons/react/24/outline"


function UserComponent() {
  return (
    <div className="m-4 w-[90%]  md:w-[300px] rounded-lg shadow-lg flex flex-col space-y-4 py-3 items-center transition-all duration-500 hover:scale-95">
      <div>
        <UserIcon className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="">developpeur fullstark</span>
        <span className="text-sm">developpeur junior</span>
      </div>
      <div className="flex items-center justify-center w-full space-x-2 ">
        <span className="px-6 py-2 cursor-pointer rounded-md hover:bg-slate-400">
          voir profil
        </span>
        <span className="px-6 py-2 cursor-pointer rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-semibold">
          contacter
        </span>
      </div>
    </div>
  );
}

export default UserComponent