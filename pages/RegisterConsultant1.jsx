import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import AlertComponent from "../components/AlertComponent";
import {
  ArrowRightIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ProfilOption from "../components/ProfilOption";
import * as Icons from "@heroicons/react/24/solid";
import Image from "next/image";

function RegisterConsultant1() {
   const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <div className="flex space-y-2 flex-col items-center justify-center my-12 lg:m-auto pt-3">
        <div className="w-[100%] lg:w-[80%]">
          <div className="">
            <div className="">
              <div className="">
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text py-1 demo text-body fw-bolder">
                      Register Staff
                    </span>
                  </a>
                </div>
                <h4 className="mb-2 py-2 text-center">
                  il n{"'"}est question que de toi 🚀
                </h4>
                <p className="mb-2 text-center p-3">
                  Afin que nous puissons commencer a construire votre profil, il
                  est temps pour vous de renseigner quelques informations
                  personnelles et professionnelles.
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex items-center justify-center w-[100px] h-[100px]  lg:w-[150px] lg:h-[150px] border-dotted rounded-full cursor-pointer border-2 border-indigo-500">
                    <UserIcon className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] text-indigo-500" />
                  </div>
                </div>
                <div className="block sm:flex items-center ">
                  <div id="formAuthentication" className="w-full mr-0 lg:mr-10">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter your firstname"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              first_name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last name</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-pen"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter your lastname"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              last_name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="col-sm-2 col-form-label">Email</label>

                      <div className="">
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i className="bx bx-envelope"></i>
                          </span>
                          <input
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control"
                            placeholder="john.doe"
                            aria-label="john.doe"
                            aria-describedby="basic-icon-default-email2"
                            onChange={(e) =>
                              setCurrentUser({
                                ...currentUser,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <div className="">
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i className="bx bx-key"></i>
                          </span>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                            onChange={(e) =>
                              setCurrentUser({
                                ...currentUser,
                                password: e.target.value,
                              })
                            }
                          />
                          <span className="input-group-text cursor-pointer">
                            <i className="bx bx-hide"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">phone number</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-phone"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter your firstname"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div id="formAuthentication" className="w-full">
                    <div className="mb-3">
                      <label className="form-label">Birthday</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-calendar"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter your firstname"
                          onChange={(e) =>
                            setCurrentUser({
                              ...currentUser,
                              birthday: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-male"></i>
                        </span>
                        <select id="gender" className="select2 form-select">
                          <option value="Male">Male</option>
                          <option value="Femele">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Role</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-desktop"></i>
                        </span>
                        <select id="role" className="select2 form-select">
                          <option value="Architecte de base de donnees">
                            Architecte de base de donnees
                          </option>
                          <option value="scientifique des donnees">
                            scientifique des donnees
                          </option>
                          <option value="Chef livreur">Chef livreur</option>
                          <option value="Developpeur">Developpeur</option>
                          <option value="Ingenieur DevOps">
                            Ingenieur DevOps
                          </option>
                          <option value="Chef de produit">
                            Chef de produit
                          </option>
                          <option value="Conception de prodiut(UI)">
                            Conception de prodiut(UI)
                          </option>
                          <option value="Analyste de Qualite">
                            Analyste de Qualite
                          </option>
                          <option value="Chef de projet">Chef de projet</option>
                          <option value="Architecte de solution">
                            Architecte de solution
                          </option>
                          <option value="Gestionnaire UX">
                            Gestionnaire UX
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Anciennete</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-time"></i>
                        </span>
                        <select
                          id="gender"
                          placeholder="select old"
                          className="select2 form-select"
                        >
                          <option value="Principal - 12 - plus">
                            Principal - 12 - plus
                          </option>
                          <option value="Senior - 8 - 12 ans">
                            Senior - 8 - 12 ans
                          </option>
                          <option value="Intermediaire - 5 - 8 ans">
                            Intermediaire - 5 - 8 ans
                          </option>
                          <option value="Intermediaire - 5 - 8 ans">
                            Junior - 2 - 5 ans
                          </option>
                          <option value="Intermediaire - 5 - 8 ans">
                            Debutant - 0 - 2 ans
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">langue</label>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-globe"></i>
                        </span>
                        <select id="gender" className="select2 form-select">
                          <option value="francais">francais</option>
                          <option value="anglais">anglais</option>
                          <option value="spanish">spanish</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms-conditions"
                      name="terms"
                      readOnly
                    />
                    <label className="form-check-label">
                      I agree to
                      <a>privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterConsultant1;

RegisterConsultant1.getLayout = function PageLayout(page) {
  return <>{page}</>;
};