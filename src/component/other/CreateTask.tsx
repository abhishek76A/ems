import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

// Define interfaces for the user data and task
interface Task {
    title: string;
    description: string;
    date: string;
    category: string;
    active: boolean;
    newTask: boolean;
    failed: boolean;
    completed: boolean;
}

interface TaskCounts {
    newTask: number;
    active: number;
    completed: number;
    failed: number;
}

interface User {
    firstName: string;
    tasks: Task[];
    taskCounts: TaskCounts;
}

const CreateTask: React.FC = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [title, settitle] = useState<string>("");
    const [description, setdescription] = useState<string>("");
    const [date, setdate] = useState<string>("");
    const [assignTo, setAssignTo] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask: Task = {
            title,
            description,
            date,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        if (Array.isArray(userData)) {
            const updatedData = userData.map((user: User) => {
                if (user.firstName === assignTo) {
                    return {
                        ...user,
                        tasks: [...(user.tasks || []), newTask],
                        taskCounts: {
                            ...user.taskCounts,
                            newTask: (user.taskCounts?.newTask || 0) + 1,
                        },
                    };
                }
                return user;
            });

            setUserData(updatedData);
            console.log(updatedData);
        } else {
            alert("Invalid user data.");
        }

        // Reset form fields
        settitle("");
        setdescription("");
        setdate("");
        setAssignTo("");
        setCategory("");
    };

    return (
        <div>
            <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form
                    onSubmit={submitHandler}
                    className="flex flex-wrap w-full items-start justify-between"
                >
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                                type="text"
                                placeholder="Make a UI design"
                            />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input
                                value={date}
                                onChange={(e) => setdate(e.target.value)}
                                className="relative text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 custom-date-picker"
                                type="date"
                                placeholder="dd/mm/yyyy"
                            />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                                type="text"
                                placeholder="employee name"
                            />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                                type="text"
                                placeholder="category name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-2/5">
                        <h3 className="text-sm text-gray-400 mb-0.5">Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            className="w-full h-44 text-sm text-white py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        ></textarea>
                        <button
                            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm text-white mt-4 w-full"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
