import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";
import * as Icons from "@heroicons/react/24/solid";
import ProfilOption from "../components/ProfilOption";
import Link from "next/link";
import JobComponent from "../components/JobComponent";
import JobViewComponent from "../components/JobViewComponent";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { selectCurrentProjet, setCurrentProjet } from "../features/projetSlice";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/token";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import TaskProgressComponent from "../components/TaskProgressComponent"
import TaskComponent from "../components/TaskComponent"
import AddTaskComponent from "../components/AddTaskComponent";
import ShowTask from "../components/ShowTask";
import { setCurrentApplie } from "../features/applieSlice";
import GetCookies from "../hooks/getCookies";


function TaskPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
    const [TaskList, setTaskList] = useState([]);
     const token = GetCookies('token');
     const currentApplie = useSelector(setCurrentApplie);
    const [currentTask, setCurrentTask] = useState({
      startDate: new Date(),
      endDate: new Date(),
      percent: 0,
      description: null,
    });
    
    const getAllTask = async () => {
      
      const data = await axios
        .post(
          "https://jobapp-3jo8.onrender.com/users/timesheets",
          {
            jobID: currentApplie?.payload.applie.currentApplie.jobID,
            consultantID: currentApplie?.payload.applie.currentApplie.consultantID,
          },
          {
            headers: {
              Authorization: `basic ${token}`,
            },
          }
        )
        .catch((err) => console.log(err.message));
        //console.log(data);
      if (data?.status == 200) {
        setTaskList(data?.data.Timesheet);
      }
    };

    useEffect(() => {
     getAllTask();
    }, []);

    useEffect(() => {
      let user = GetCookies("currentUser");
      let applie = GetCookies("currentApplie");
      if (currentUser?.id == null && user == null) {
        route.push("/LoginPage");
      } else if (currentUser?.id == null) {
        setCurrentUser(JSON.parse(user));
        setCurrentApplie(JSON.parse(applie));
      }
    });
  
    const AddProjet = () => {
      const lightbox = document.querySelector("#lightbox");
      lightbox.classList.remove("scale-0");
      lightbox.classList.add("scale-100");
    };
  return (
    <div className="flex flex-col m-4">
      <div className="flex p-3 bg-white items-center space-x-3 justify-between">
        <div className="flex bg-white space-x-3">
          <span
            href="/"
            className="font-bold lg:flex hidden text-black text-xl items-center cursor-pointer"
            onClick={() => router.back()}
          >
            jobs <ChevronRightIcon className="w-6 h-6 pt-1 mt-1" />
          </span>
          <Link
            href="/"
            className="font-bold lg:flex hidden text-black text-xl  items-center"
          >
            <span>task</span>
            <ChevronRightIcon className="w-6 h-6 pt-1 mt-1" />
          </Link>
          <span className="underline text-black cursor-pointer font-semibold"></span>
        </div>
        <div>
          <button
            className="px-3 text-white bg-indigo-500 p-1 font-bold rounded-md"
            onClick={() => AddProjet()}
          >
            create task
          </button>
        </div>
      </div>
      <div className="flex space-x-3 justify-between mt-3 h-full">
        <div className="p-2 w-full h-auto   border-2 rounded-md overflow-y-scroll overflow-scroll scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-rounded-* scrollbar-track-gray-100">
          <span className="font-bold">To Do</span>
          {TaskList?.filter((dataFilter) => dataFilter.status == "begin").map(
            (item) => (
              <TaskComponent
                id={item?.id}
                setTaskList={setTaskList}
                key={item?.id}
                description={item.flag}
                status={item.status}
              />
            )
          )}
        </div>
        <div className="p-2 w-full border-2 rounded-md">
          <span className="font-bold">In Progress</span>
          {TaskList?.filter(
            (dataFilter) => dataFilter.status == "in progress"
          ).map((item) => (
            <TaskProgressComponent
              key={item.id}
              TaskList={TaskList}
              description={item.flag}
              startDate={item.start_date}
              endDate={item.end_date}
              percent={item.percent}
              setCurrentTask={setCurrentTask}
            />
          ))}
        </div>
        <div className="p-2 w-full border-2 rounded-md">
          <span className="font-bold">Done</span>
          {TaskList?.filter((dataFilter) => dataFilter.status == "end").map(
            (item) => (
              <TaskProgressComponent
                key={item.id}
                description={item.flag}
                percent={item.percent}
                TaskList={TaskList}
                currentTask={currentTask}
              />
            )
          )}
        </div>
      </div>
      <AddTaskComponent setTaskList={setTaskList} />
      <ShowTask currentTask={currentTask} />
    </div>
  );
}

export default TaskPage;
