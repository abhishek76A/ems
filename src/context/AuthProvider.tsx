import React, {createContext, useContext, useEffect, useState} from 'react';
import {getLocalStorage, setLocalStorage} from "../utils/localStorage.tsx";


export const AuthContext = createContext()


const AuthProvider =({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
         setLocalStorage()
        const {employees,admin} =getLocalStorage();
        setUserData(employees);
    },[])


    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;