import React from 'react'
import * as Icons from '@heroicons/react/24/outline'
import ModalLoadComponent from '../components/ModalLoadComponent';

function RegisterEmployerPage3() {
  return (
    <div class="h-auto flex space-y-2 flex-col mt-8 lg:mx-32 justify-center pt-4">
      <div className="">
        <div className=" ">
          <div className="">
            <form className=''>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-company"
                >
                  country
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-company2"
                      className="input-group-text"
                    >
                      <Icons.GlobeAmericasIcon className="w-4 h-4" />
                    </span>
                    <select id="country" className="select2 form-select">
                      <option value="">Select</option>
                      <option value="Australia">Australia</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">Korea, Republic of</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Russia">Russian Federation</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-fullname"
                >
                  city
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-fullname2"
                      className="input-group-text"
                    >
                      <i className="bx bx-map"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-icon-default-fullname"
                      placeholder="san francisco"
                      aria-label="John Doe"
                      aria-describedby="basic-icon-default-fullname2"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label
                  className="col-sm-2 form-label"
                  htmlFor="basic-icon-default-phone"
                >
                  quarter
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-phone2"
                      className="input-group-text"
                    >
                      <i className="bx bx-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      className="form-control phone-mask"
                      placeholder="logbessou"
                      aria-label="658 799 8941"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 form-label"
                  htmlFor="basic-icon-default-phone"
                >
                  Address
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-phone2"
                      className="input-group-text"
                    >
                      <i className="bx bx-envelope-open"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      className="form-control phone-mask"
                      placeholder="rue 658"
                      aria-label="658 799 8941"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 form-label"
                  htmlFor="basic-icon-default-phone"
                >
                  code postal
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span
                      id="basic-icon-default-phone2"
                      className="input-group-text"
                    >
                      <i className="bx bx-envelope-open"></i>
                    </span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      className="form-control phone-mask"
                      placeholder="pbox 658 890"
                      aria-label="658 799 8941"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  className="col-sm-2 col-form-label"
                  htmlFor="basic-icon-default-email"
                >
                  Timezone
                </label>
                <div className="col-sm-10">
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="bx bx-group"></i>
                    </span>
                    <select id="timeZones" className="select2 form-select">
                      <option value="">Select Timezone</option>
                      <option value="-12">
                        (GMT-12:00) International Date Line West
                      </option>
                      <option value="-11">
                        (GMT-11:00) Midway Island, Samoa
                      </option>
                      <option value="-10">(GMT-10:00) Hawaii</option>
                      <option value="-9">(GMT-09:00) Alaska</option>
                      <option value="-8">
                        (GMT-08:00) Pacific Time (US & Canada)
                      </option>
                      <option value="-8">
                        (GMT-08:00) Tijuana, Baja California
                      </option>
                      <option value="-7">(GMT-07:00) Arizona</option>
                      <option value="-7">
                        (GMT-07:00) Chihuahua, La Paz, Mazatlan
                      </option>
                      <option value="-7">
                        (GMT-07:00) Mountain Time (US & Canada)
                      </option>
                      <option value="-6">(GMT-06:00) Central America</option>
                      <option value="-6">
                        (GMT-06:00) Central Time (US & Canada)
                      </option>
                      <option value="-6">
                        (GMT-06:00) Guadalajara, Mexico City, Monterrey
                      </option>
                      <option value="-6">(GMT-06:00) Saskatchewan</option>
                      <option value="-5">
                        (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                      </option>
                      <option value="-5">
                        (GMT-05:00) Eastern Time (US & Canada)
                      </option>
                      <option value="-5">(GMT-05:00) Indiana (East)</option>
                      <option value="-4">
                        (GMT-04:00) Atlantic Time (Canada)
                      </option>
                      <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterEmployerPage3

RegisterEmployerPage3.getLayout = function PageLayout(page) {
  return <>{page}</>;
};