import React, {useContext, useEffect, useState} from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import Login from "./component/Auth/Login.tsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.tsx";
import {getLocalStorage, setLocalStorage} from "./utils/localStorage.tsx";
import employeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import {AuthContext} from "./context/AuthProvider.tsx";


const App =() => {


    const AuthData = useContext(AuthContext)
    console.log(AuthData)


    const [user, setUser] = useState('')

    // useEffect(() => {
    //     if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
    //         setLocalStorage();
    //     }
    // }, []);

    const handleLogin =(email,password) =>{
        if(email=='admin@me.com' && password=='123') {
            setUser('admin')
            console.log(user)
        }else if(email=='user@me.com' && password=='123'){
            setUser('user')
            console.log(user)

        }else{
            alert("invalid credentials")
        }
    }



    return(
        <>
            {!user?<Login handleLogin={handleLogin}/>:''}
            {user== 'admin'?<AdminDashboard/>:<EmployeeDashboard/>}
         {/*<EmployeeDashboard/>*/}
         {/*<AdminDashboard/>*/}
        </>
    )
}
export default App;