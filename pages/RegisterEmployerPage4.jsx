import React from 'react'
import Image from "next/image";

function RegisterEmployerPage4() {
  return (
    <div>
      {
        <div className="w-full flex-1  flex items-center justify-center my-12  ">
          <div className="flex flex-col w-[300px] rounded-xl border-4 border-gray-400 h-[300px] space-y-1 justify-center p-6">
            <h3 className="billing-heading mb-4">Payment Method</h3>
            <div className="form-group">
              <div className="col-md-12">
                <div className="radio">
                  <div className="flex items-center w-full justify-between">
                    <label>
                      <input type="radio" name="optradio" className="mr-2" />{" "}
                      Direct Bank Tranfer
                    </label>
                    <Image
                      src={require("../assets/img/icons/unicons/wallet.png")}
                      width={200}
                      height={50}
                      className="w-px-40 h-auto rounded-circle"
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <div className="radio">
                  <div className="flex items-center w-full justify-between">
                    <label>
                      <input type="radio" name="optradio" className="mr-2" />{" "}
                      Check Payment
                    </label>
                    <Image
                      src={require("../assets/img/icons/brands/behance.png")}
                      width={200}
                      height={50}
                      className="w-px-40 h-auto rounded-circle"
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <div className="radio">
                  <div className="flex items-center w-full justify-between">
                    <label>
                      <input type="radio" name="optradio" className="mr-2" />{" "}
                      Paypal
                    </label>
                    <Image
                      src={require("../assets/img/icons/unicons/paypal.png")}
                      width={200}
                      height={50}
                      className="w-px-40 h-auto rounded-circle"
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" className="mr-2" /> I have
                    read and accept the terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default RegisterEmployerPage4

RegisterEmployerPage4.getLayout = function PageLayout(page) {
  return <>{page}</>;
};