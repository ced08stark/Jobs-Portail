import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentJob, selectCurrentJob } from "../features/jobSlice";

function CreateJobPage2() {
  const job = useSelector(setCurrentJob);
  const dispatch = useDispatch();
  //console.log(job.payload.job.currentJob);
  return (
    <div className="h-full  flex space-y-2 flex-col items-center justify-center py-6 lg:m-auto ">
      <div className="w-[100%] lg:w-[80%]">
        <div className="app-brand justify-content-center">
          <a href="index.html" className="app-brand-link gap-2">
            <span className="app-brand-logo demo"></span>
            <span className="app-brand-text py-1 demo text-body fw-bolder">
              choose your preferred candidature
            </span>
          </a>
        </div>
        <p className="mb-2 text-center">
          Make your app management easy and fun!
        </p>
        <div className="block sm:flex items-center mt-4">
          <div id="formAuthentication" className="w-full mr-0 lg:mr-10">
            <div className="mb-3">
              <label className="form-label">Soft Skill</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-desktop"></i>
                </span>
                <select
                  id="role"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        skill: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="Architecte de base de donnees">
                    Architecte de base de donnees
                  </option>
                  <option value="scientifique des donnees">
                    scientifique des donnees
                  </option>
                  <option value="Chef livreur">Chef livreur</option>
                  <option value="Developpeur">Developpeur</option>
                  <option value="Ingenieur DevOps">Ingenieur DevOps</option>
                  <option value="Chef de produit">Chef de produit</option>
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
                  <option value="Gestionnaire UX">Gestionnaire UX</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Certification</label>
              <div className="input-group input-group-merge">
                <select
                  id="role"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        certification: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="web design">web design</option>
                  <option value="developpement mobile">
                    developpement mobile
                  </option>
                  <option value="developpement web">developpement web</option>
                  <option value="marketing digital">marketing digital</option>
                  <option value="disigner UI/UX">disigner UI/UX</option>
                  <option value="content maquette">content maquette</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">langue</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-globe"></i>
                </span>
                <select
                  id="gender"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        langue: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="francais">francais</option>
                  <option value="anglais">anglais</option>
                  <option value="spanish">spanish</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Team working style</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">
                  <i className="bx bx-box"></i>
                </span>
                <select
                  id="gender"
                  className="select2 form-select"
                  onChange={(e) => {
                    dispatch(
                      setCurrentJob({
                        ...job.payload.job.currentJob,
                        isTeamWork: e.target.value,
                      })
                    );
                  }}
                >
                  <option value={false}>no</option>
                  <option value={true}>yes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJobPage2

CreateJobPage2.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
