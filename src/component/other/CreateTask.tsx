import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState(""); // Corrected variable name
    const [category, setCategory] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        if (Array.isArray(userData)) {
            const updatedData = userData.map((user) => {
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
        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
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
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                                type="text"
                                placeholder="Make a UI design"
                            />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
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
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
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
