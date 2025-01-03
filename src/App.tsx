import React, {useContext, useEffect, useState} from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard.tsx";
import Login from "./component/Auth/Login.tsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.tsx";
import {AuthContext} from "./context/AuthProvider.tsx";

const App =() => {

    const [user, setUser] = useState('')
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData,setUserData] = useContext(AuthContext)
    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser")

        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser)

            setUser(userData.role)
            setLoggedInUserData(userData.data)

        }

    }, []);

    // useEffect(() => {
    //     if (userData){
    //         const loggedInUser = localStorage.getItem("user");
    //         if(loggedInUser){
    //             setUser(loggedInUser.role)
    //         }
    //     }
    // }, [userData]);


    const handleLogin =(email,password) =>{
        if(email=='admin@me.com' && password=='123') {
            setUser('admin')
            localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

        }else if(userData ){
            const employee =userData.find((e)=> email ===e.email && e.password == password)
            if (employee){
                setUser('employee')
                setLoggedInUserData(employee)
                localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
            }

        }else{
            alert("invalid credentials")
        }
    }



    return(
        <>
            {!user ? <Login handleLogin={handleLogin} /> : null}
            {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
        </>

    )
}
export default App;