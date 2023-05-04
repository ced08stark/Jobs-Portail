
import React, {useState} from 'react'
import {EyeIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCurrentProjet } from '../features/projetSlice';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { setToken } from "../features/token";
import SetCookies from '../hooks/setCookies';
import GetCookies from "../hooks/getCookies";


function ProjetComponent({ id, title, description, setProjets }) {
  const token = GetCookies("token");
  
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
 
  const getProjet = async () => {
    setIsLoading(true);
    const data = await axios
      .get("https://jobapp-3jo8.onrender.com/users/projets")
      .catch((err) => console.log(err.message));
    setIsLoading(false);
    //console.log(data);
    if (data?.status == 200) {
      setProjets(data?.data);
    }
  };

  const deleteProject = async () => {
    setIsLoading(true);
    await axios
      .delete(`https://jobapp-3jo8.onrender.com/users/projet/delete/${id}`, {
        headers: {
          Authorization: `basic ${token}`,
        },
      })
      .catch((err) => console.log(err.message));
    setIsLoading(false);
    getProjet();
  };


  return (
    <div className="col-sm-6 col-lg-4 lg:w-auto w-full  mb-4 transition-all duration-500 z-10 hover:scale-95">
      <div className="card">
        <div className="absolute left-0 -top-4">
          <div className="demo-inline-spacing">
            {/* <div className="btn-group">
              <button
                type="button"
                id="menu"
                onClick={() => handleMenu()}
                className="btn btn-primary btn-icon rounded-pill dropdown-toggle hide-arrow hover:text-white"
              >
                <i className="bx bx-dots-vertical-rounded hover:text-white"></i>
              </button>
              {show ? (
                <ul
                  className="dropdown-menu1 dropdown-menu-end flex flex-col shadow"
                  onClick={() => setShow(false)}
                >
                  <li className="flex items-center cursor-pointer">
                    <div class="p-2">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-success hover:text-white"
                      >
                        <i class="bx bx-plus"></i>
                      </button>
                    </div>
                    <span className="text-green-500 ">add job</span>
                  </li>
                  <Link href="/ProjetViewPage" className="flex items-center cursor-pointer">
                    <div class="p-2">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-info hover:text-white"
                      >
                        <i class="bx bx-show-alt"></i>
                      </button>
                    </div>
                    <span className="text-sky-500 ">view projet</span>
                  </Link>
                  <li className="flex items-center cursor-pointer">
                    <div class="p-2">
                      <button
                        type="button"
                        class="btn btn-icon btn-outline-danger"
                      >
                        <i class="bx bx-trash-alt"></i>
                      </button>
                    </div>
                    <span className="text-red-600 cursor-pointer">
                      delete projet
                    </span>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div> */}
          </div>
        </div>
        <div className="card-body">
          <div className="flex items-center justify-between mb-2">
            <h5 className="card-title pt-3 font-semibold text-xl">{title}</h5>
            <li className="flex items-center cursor-pointer space-x-2">
              <div class="">
                <button
                  type="button"
                  class="btn btn-icon btn-outline-info"
                  onClick={() => {
                    dispatch(
                      setCurrentProjet({
                        id: id,
                        title: title,
                        description: description,
                      })
                    );
                    SetCookies("currentProjet", JSON.stringify({
                      id: id,
                      title: title,
                      description: description,
                    }));
                    router.push("/ProjetViewPage");
                  }}
                >
                  <i class="bx bx-show-alt"></i>
                </button>
              </div>
              <div class="">
                <button
                  type="button"
                  onClick={() => deleteProject()}
                  class="btn btn-icon btn-outline-danger"
                >
                  <i class="bx bx-trash-alt"></i>
                </button>
              </div>
            </li>
          </div>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjetComponent