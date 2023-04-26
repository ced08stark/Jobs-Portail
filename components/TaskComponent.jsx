import React, {useEffect} from 'react'
import * as Icons from '@heroicons/react/24/solid' 
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";
import { setCurrentApplie } from "../features/applieSlice";

function TaskComponent({ id, description, setTaskList }) {
  const token = useSelector(setToken);
  const currentApplie = useSelector(setCurrentApplie);
  const getAllTask = async () => {
    const data = await axios
      .post(
        "https://jobapp-3jo8.onrender.com/users/timesheets",
        {
          jobID: currentApplie?.payload.applie.currentApplie.jobID,
          consultantID:
            currentApplie?.payload.applie.currentApplie.consultantID,
        },
        {
          headers: {
            Authorization: `basic ${token.payload.token.token}`,
          },
        }
      )
      .catch((err) => console.log(err.message));
    console.log(data);
    if (data?.status == 200) {
      setTaskList(data?.data.Timesheet);
    }
  };

  
  
  const startTask = async () => {
    const data = await axios
      .put(
        `https://jobapp-3jo8.onrender.com/users/timesheet/update/${id}`,
        { status: "in progress", percent: 10 },
        {
          headers: {
            Authorization:
              `basic ${token.payload.token.token}`,
          },
        }
      )
      .catch((err) => console.log(err.message));
    //console.log(data);
    getAllTask();
  };
  return (
    <div className="flex items-center justify-between relative bg-white rounded-sm border py-1 pr-2 my-1 cursor-pointer">
      <div className="flex items-center ">
        <div className="flex items-center mr-5">
          <Icons.EllipsisVerticalIcon className="w-4 h-4 absolute" />
          <Icons.EllipsisVerticalIcon className="w-4 h-4 left-1 absolute" />
        </div>
        <div className="p-1 text-[13px]">{description}</div>
      </div>

      <button
        className=" bg-indigo-500 text-white rounded-full px-2 py-1 text-xs"
        onClick={() => startTask()}
      >
        begin
      </button>
    </div>
  );
}

export default TaskComponent
