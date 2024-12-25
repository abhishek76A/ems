import React from "react";
import Header from "../other/Header.tsx";
import CreateTask from "../other/CreateTask.tsx";
import AllTask from "../other/AllTask.tsx";



const AdminDashboard: React.FC = (props) => {


    return (
        <div className="p-20 bg-black h-screen w-full p-7 ">
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>
        </div>

    );
};

export default AdminDashboard;
