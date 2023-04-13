import React from 'react'
import Image from "next/image";
import Link from "next/link";
import  { useRouter } from 'next/router';
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import RemoveCookies from '../hooks/removeCookies';


function ProfilOption() {
  const router = useRouter()
   const { currentUser, setCurrentUser } = useContext(UserContext);
   const handleClick = () =>{

    let profileMenu = document.querySelector("#profileMenu");
    profileMenu.classList.remove("scale-100");
    profileMenu.classList.add("scale-0");
   }
  return (
    <ul
      className="Regular shadow fade-out scale-0"
      id="profileMenu"
      style={{
        marginTop: "330px",
        backgroundColor: "white",
        position: "absolute",
        right: 1,
        listStyle: "none",
        borderRadius: "10px",
      }}
      onClick={() => handleClick()}
    >
      <li>
        <Link className="dropdown-item" href="#">
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <div className="avatar avatar-online">
                <Image
                  src={require("../assets/img/avatars/1.png")}
                  width={200}
                  height={50}
                  alt="profile"
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </div>
            <div className="flex-grow-1">
              <span className="fw-semibold d-block">{currentUser?.email}</span>
              <small className="text-muted">{currentUser?.first_name}</small>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <i className="bx bx-user me-2"></i>
          <span className="align-middle">My Profile</span>
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <i className="bx bx-cog me-2"></i>
          <span className="align-middle">Settings</span>
        </a>
      </li>
      <li>
        <Link className="dropdown-item" href="#">
          <span className="d-flex align-items-center align-middle">
            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
            <span className="flex-grow-1 align-middle">Billing</span>
            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
              4
            </span>
          </span>
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
      <li>
        <div className="dropdown-item cursor-pointer" onClick={()=> {
          RemoveCookies("currentUser")
          RemoveCookies("token");
          setCurrentUser({
            ...currentUser,
            id: null,
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            profile: null,
            role: null,
            employerID: null,
          });
          router.push('LoginPage')

        }}>
          <i className="bx bx-power-off me-2"></i>
          <span className="align-middle">Log Out</span>
        </div>
      </li>
    </ul>
  );
}

export default ProfilOption