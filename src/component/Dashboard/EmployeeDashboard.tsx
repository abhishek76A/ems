import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

interface EmployeeDashboardProps {
    data: any;  // You can specify a more precise type instead of 'any' if you know the structure of 'data'
    changeUser: (user: string) => void;  // Assuming changeUser is a function that takes a string and returns nothing
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
