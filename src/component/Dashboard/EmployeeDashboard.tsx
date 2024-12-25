import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

interface EmployeeDashboardProps {
    data: any;
    changeUser: (user: string) => void;
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ data, changeUser }) => {
    return (
        <div className="p-20 bg-[#1c1c1c] h-screen">
            <Header changeUser={changeUser} data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;
