import React from "react";

const AcceptTask: React.FC = ({data}) => {
    console.log(data.title);

    return (
        <div className=" flex-shrink-0 h-full  w-[300px] rounded-2xl bg-red-300">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 px-3 py-1 rounded-xl">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>

            <h2 className="mt-5 px-5 text-xl font-semibold">{data.title}</h2>

            <p className="text-sm px-5 mt-2">{data.description}</p>

            <div className='flex justify-between p-5 mt-10'>
                <button className='bg-green-500 py-1 px-2 rounded-xl text-sm'> Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2  rounded-xl text-sm'> Mark as Failed</button>

            </div>


        </div>

    );
};



export default AcceptTask;
