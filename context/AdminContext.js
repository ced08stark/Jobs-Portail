import React, {useState} from "react";
import { createContext } from "react";



export const AdminContext = createContext(null)

function Context({children}){
    const [currentAdmin, setCurrentAdmin] = useState({
        id: 6,
        first_name: "tony",
        last_name: "stark",
        address: "r",
        email: "r",
        password: "r",
        picture: "r",
    });

    return (
      <AdminContext.Provider value={{ currentAdmin, setCurrentAdmin }}>
        {children}
      </AdminContext.Provider>
    );
}

export default Context;