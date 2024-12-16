import React, {useContext, useEffect, useState} from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import Login from "./component/Auth/Login.tsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.tsx";
import {getLocalStorage, setLocalStorage} from "./utils/localStorage.tsx";
import employeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import {AuthContext} from "./context/AuthProvider.tsx";

const App =() => {

    const [user, setUser] = useState('')
    const authData = useContext(AuthContext)


    const handleLogin =(email,password) =>{
        if(email=='admin@me.com' && password=='123') {
            setUser('admin')
            console.log(user)
        }else if(authData && authData.employees.find((e)=> email ===e.email && e.password == password)){
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