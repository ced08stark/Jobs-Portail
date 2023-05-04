import React, {useState} from "react";
import { createContext } from "react";



export const UserContext = createContext(null)

function Context({children}){
    const [currentUser, setCurrentUser] = useState({
      id: null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      profile: null,
      role: null,
      phone: "",
      type: "",
      country: "",
      city: "",
      quarter: "",
      address: "",
      code: "",
      timezone: "",
      company_name: "",
      company_logo: "",
      company_web: "",
      company_size: "",
      birthday: "",
      gender: "",
      langue: "",
      ancienne: "",
      employerID: null,
      consultantID: null,
    });

    return (
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </UserContext.Provider>
    );
}

export default Context;