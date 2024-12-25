import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

interface AdminDashboardProps {
    changeUser: (user: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ changeUser }) => {
    return (
        <div className="p-20 bg-black h-screen w-full p-7">
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
