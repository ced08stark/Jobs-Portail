import React from 'react'
import * as Icons from "@heroicons/react/24/solid";
import { ProgressBar } from "react-bootstrap"; 

function TaskProgressComponent({
  startDate,
  endDate,
  description,
  percent,
  setCurrentTask,
  currentTask 
}) {
  const showtask = () => {
    
    //alert(new Date());
    setCurrentTask({...currentTask,
      startDate: startDate,
      endDate: endDate,
      percent: percent,
      description: description,
      
    });
    const lightbox = document.querySelector("#lightboxTask");
    lightbox.classList.remove("scale-0");
    lightbox.classList.add("scale-100");
  };
  return (
    <div
      onClick={() => showtask()}
      className="relative flex items-center justify-between bg-white rounded-sm border py-1 pr-2 my-1 cursor-pointer"
    >
      <div className="flex items-center ">
        <div className="flex items-center mr-5">
          <Icons.EllipsisVerticalIcon className="w-4 h-4 absolute" />
          <Icons.EllipsisVerticalIcon className="w-4 h-4 left-1 absolute" />
        </div>
        <div className="p-1 text-[13px]">{description}</div>
      </div>
      <ProgressBar
        width={400}
        now={percent}
        label={`${percent}% completed`}
        animated
      />
    </div>
  );
}

export default TaskProgressComponent
