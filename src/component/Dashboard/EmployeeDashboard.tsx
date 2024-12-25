import React from "react";
import Header from "../other/Header.tsx";
import TaskListNumbers from "../other/TaskListNumbers.tsx";
import TaskList from "../TaskList/TaskList.tsx";

const EmployeeDashboard: React.FC<{ data: any; changeUser: any }> = (props) => {
    // Accessing the properties from the props object
    const { data, changeUser } = props;

    return (
        <div className="p-20 bg-[#1c1c1c] h-screen ">
            <Header changeUser={changeUser} data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;
