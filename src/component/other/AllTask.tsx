import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

interface TaskCounts {
    newTask: number;
    active: number;
    completed: number;
    failed: number;
}

interface User {
    firstName: string;
    taskCounts: TaskCounts;
}

const AllTask: React.FC = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div>
            <div className="p-5 mt-5 rounded bg-[#1c1c1c]">
                <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
                    <h3 className="text-lg font-semibold w-1/5">New Tasks</h3>
                    <h3 className="text-lg font-semibold w-1/5">Active Task</h3>
                    <h3 className="text-lg font-semibold w-1/5">Completed Task</h3>
                    <h3 className="text-lg font-semibold w-1/5">Failed</h3>
                </div>
                <div className="h-[80%]">
                    {userData.map((elem: User, idx: number) => {
                        return (
                            <div
                                key={idx}
                                className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
                            >
                                <h2 className="text-lg font-semibold w-1/5 text-white">
                                    {elem.firstName}
                                </h2>
                                <h3 className="text-lg font-semibold w-1/5 text-blue-600">
                                    {elem.taskCounts.newTask}
                                </h3>
                                <h3 className="text-lg font-semibold w-1/5 text-yellow-400">
                                    {elem.taskCounts.active}
                                </h3>
                                <h3 className="text-lg font-semibold w-1/5 text-white">
                                    {elem.taskCounts.completed}
                                </h3>
                                <h3 className="text-lg font-semibold w-1/5 text-red-600">
                                    {elem.taskCounts.failed}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllTask;
