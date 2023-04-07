import React, {useState} from "react";
import { createContext } from "react";



export const AdminContext = createContext(null)

function Context({children}){
    const [currentAdmin, setCurrentAdmin] = useState({
      id: 0,
      first_name: "r",
      last_name: "r",
      address: "",
      email: "",
      password: "",
      picture: "",
    });

    return (
      <AdminContext.Provider value={{ currentAdmin, setCurrentAdmin }}>
        {children}
      </AdminContext.Provider>
    );
}

export default Context;