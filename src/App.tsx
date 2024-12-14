import React, {useEffect, useState} from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import Login from "./component/Auth/Login.tsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.tsx";
import {getLocalStorage, setLocalStorage} from "./utils/localStorage.tsx";


const App =() => {

    const [user, setUser] = useState('')

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