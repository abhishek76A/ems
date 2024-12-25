import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

// Define the type for individual task
interface Task {
    title: string;
    category: string;
    date: string;
    description: string;
    active: boolean;
    newTask: boolean;
    completed: boolean;
    failed: boolean;
}

// Define the type for data prop
interface TaskListProps {
    data: {
        tasks: Task[];
    };
}

const TaskList: React.FC<TaskListProps> = ({ data }) => {
    return (
        <div
            id="tasklist"
            className="h-[55%] py-5 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10"
        >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
                return null;
            })}
        </div>
    );
};

export default TaskList;
