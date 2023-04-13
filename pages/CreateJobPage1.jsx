import React from 'react'
import { setCurrentJob } from '../features/jobSlice';
import { useSelector, useDispatch } from "react-redux";


function CreateJobPage1() {
  const job = useSelector(setCurrentJob);
  const dispatch = useDispatch();
  return (
    <div className="h-full  flex space-y-2 flex-col items-center justify-center py-6 lg:m-auto ">
      <div className="w-[100%] lg:w-[80%]">
        <div className="">
          <div className="">
            <div className="">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text py-1 demo text-body fw-bolder">
                    create a new job
                  </span>
                </a>
              </div>
              <p className="mb-2 text-center">
                Make your app management easy and fun!
              </p>
              <div className="block sm:flex items-center">
                <div id="formAuthentication" className="w-full mr-0 lg:mr-10">
                  <div className="mb-3">
                    <label className="form-label">title</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter title job"
                        onChange={(e) => {
                          dispatch(
                            setCurrentJob({
                              ...job.payload.job.currentJob,
                              title: e.target.value,
                            })
                          );
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">primary role</label>
                    <div className="input-group input-group-merge">
                      <select
                        id="role"
                        className="select2 form-select"
                        onChange={(e) => {
                          dispatch(
                            setCurrentJob({
                              ...job.payload.job.currentJob,
                              role: e.target.value,
                            })
                          );
                        }}
                      >
                        <option value="web design">web design</option>
                        <option value="developpement mobile">
                          developpement mobile
                        </option>
                        <option value="developpement web">
                          developpement web
                        </option>
                        <option value="marketing digital">
                          marketing digital
                        </option>
                        <option value="disigner UI/UX">disigner UI/UX</option>
                        <option value="content maquette">
                          content maquette
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      niveau d{"'"}experience
                    </label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="bx bx-time"></i>
                      </span>
                      <select
                        id="gender"
                        placeholder="select old"
                        className="select2 form-select"
                        onChange={(e) => {
                          dispatch(
                            setCurrentJob({
                              ...job.payload.job.currentJob,
                              experience: e.target.value,
                            })
                          );
                        }}
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
                  <div className="">
                    <div className="flex-col flex space-y-2">
                      <span className="font-bold text-xl">Description</span>
                      <textarea
                        className="p-2 border-none outline-1 border outline-indigo-500 rounded-md h-32"
                        placeholder="enter your jobs description"
                        id="describe"
                        minLength={100}
                        onChange={(e) => {
                          dispatch(
                            setCurrentJob({
                              ...job.payload.job.currentJob,
                              description: e.target.value,
                            })
                          );
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJobPage1


CreateJobPage1.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
