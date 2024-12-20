import React from "react";

const FailedTask: React.FC = () => {

    return (
        <div className=" flex-shrink-0 h-full  w-[300px] rounded-2xl bg-yellow-300">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 px-3 py-1 rounded-xl">cateogory</h3>
                <h4 className="text-sm">20 aug 2024</h4>
            </div>
            <h2 className="mt-5 px-5 text-xl font-semibold"> Complete the react course today</h2>
            <p className="text-sm px-5 mt-2"> Finish the React course by reviewing remaining modules, practicing key
                concepts, and completing exercises.
                Focus on advanced topics like hooks and routing to solidify your understanding and be ready to apply
                your skills.
            </p>

            <div className='mt-5'>
                <button className='w-full'>Failed</button>


            </div>


        </div>

    );
};



export default FailedTask;
