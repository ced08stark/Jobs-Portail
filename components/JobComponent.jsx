import React from 'react'

function JobComponent({ title, description, author, authorProfile }) {
  return (
    <div className="flex flex-col shadow-lg border p-2 w-[300px] space-y-3 rounded-lg cursor-pointer hover:scale-105 m-2">
      <div className="flex items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-slate-500 flex items-center justify-center">
          <i class={`bx bx-user text-white`}></i>
        </div>

        <span class="font-bold text-center w-full">{title}</span>
      </div>
      <div className="text-gray-500">{description}</div>
      <div className="flex space-x-1 items-center py-3 border-b">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-300 "></div>
        <span>{author}</span>
      </div>
      <div className='flex justify-between'>
        <div className="flex items-center space-x-1">
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300 "></div>
        </div>
        <div>
          <span>Starting at <span className='font-bold text-xl'>$250</span></span>
        </div>
      </div>
    </div>
  );
}

export default JobComponent
