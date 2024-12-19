import React from "react";
import Header from "../other/Header.tsx";
import TaskListNumbers from "../other/TaskListNumbers.tsx";
import TaskList from "../TaskList/TaskList.tsx";

const EmployeeDashboard: React.FC<{ data: any }> = ({ data }) => {
    console.log(data); // This logs the data to the console

    return (
        <div className="p-20 bg-[#1c1c1c] h-screen ">
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;
