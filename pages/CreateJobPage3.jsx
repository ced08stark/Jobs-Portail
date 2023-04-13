import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setCurrentJob, selectCurrentJob } from "../features/jobSlice";

function CreateJobPage3() {
  const job = useSelector(setCurrentJob);
  const dispatch = useDispatch();
  return (
    <div className="h-full  flex space-y-2 flex-col items-center justify-center py-6 lg:m-auto ">
      <div className="w-[100%] lg:w-[80%]">
        <div className="app-brand justify-content-center">
          <a href="index.html" className="app-brand-link gap-2">
            <span className="app-brand-logo demo"></span>
            <span className="app-brand-text py-1 demo text-body fw-bolder">
              make your engagement
            </span>
          </a>
        </div>
        <p className="mb-2 text-center">
          Make your app management easy and fun!
        </p>
        <div className="block sm:flex items-center mt-4">
          <div id="formAuthentication" className="w-full mr-0 lg:mr-10">
            <div className="mb-3">
              <label className="form-label">type of contrat</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-file"></i>
                </span>
                <select
                  id="role"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        contract: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="Architecte de base de donnees">
                    remote contract
                  </option>
                  <option value="scientifique des donnees">
                    permantly contract
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">work preference</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-file"></i>
                </span>
                <select
                  id="role"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        workPreference: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="Architecte de base de donnees">
                    remote contract
                  </option>
                  <option value="scientifique des donnees">
                    permantly contract
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">minimum delay</label>
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
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        delay: e.target.value,
                      })
                    );
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">File upload</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-file"></i>
                </span>
                <input
                  type="file"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="upload file"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        file: e.target.value,
                      })
                    );
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">job rate</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-money"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="ex. 500$"
                  min={5}
                  step={5}
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        rate: e.target.value,
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJobPage3


CreateJobPage3.getLayout = function PageLayout(page) {
  return <>{page}</>;
};