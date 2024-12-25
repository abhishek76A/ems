import React from "react";


interface TaskData {
    title: string;
    category: string;
    date: string;
    description: string;
}

interface CompletedTaskProps {
    data: TaskData;
}

const CompletedTask: React.FC<CompletedTaskProps> = ({ data }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-red-300">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 px-3 py-1 rounded-xl">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 px-5 text-xl font-semibold">{data.title}</h2>
            <p className="text-sm px-5 mt-2">{data.description}</p>

            <div className="mt-5">
                <button className="w-full">Completed</button>
            </div>
        </div>
    );
};

export default CompletedTask;
