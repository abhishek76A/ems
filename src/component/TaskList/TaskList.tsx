import React from "react";
import AcceptTask from "./AcceptTask.tsx";
import NewTask from "./NewTask.tsx";
import CompleteTask from "./CompleteTask.tsx";
import FailedTask from "./FailedTask.tsx";

const TaskList : React.FC = ({data}) => {
    console.log(data);

    return (
        <div id='tasklist'
             className="h-[55%] py-5 overflow-x-auto  flex items-center justify-start gap-5  flex-nowrap w-full mt-10 ">
            {data.tasks.map((elem) =>{

                if (elem.active){
                    return <AcceptTask/>
                }
                if (elem.newTask){
                    return <NewTask/>
                }
                if (elem.completed){
                    return <CompleteTask/>
                }
                if (elem.failed){
                    return <FailedTask/>
                }
            } )}
        </div>
    );
};

export default TaskList;
