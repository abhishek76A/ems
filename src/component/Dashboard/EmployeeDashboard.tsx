import React from "react";
import Header from "../other/Header.tsx";
import TaskListNumbers from "../other/TaskListNumbers.tsx";
import TaskList from "../TaskList/TaskList.tsx";


const EmployeeDashboard: React.FC = () => {


    return (
        <div className="p-20 bg-[#1c1c1c] h-screen ">
            <Header />
            <TaskListNumbers/>
            <TaskList/>
        </div>


    );
};

export default EmployeeDashboard;