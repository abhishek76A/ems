import React from "react";

const CreateTask: React.FC = () => {
    return (
        <div>
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            className='text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" placeholder="Make a UI design"/>
                        <h3 className='text-sm text-gray-300 mb-0.5'> Date</h3>
                        <input
                            className='relative text-sm text-gray-400 py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 custom-date-picker'
                            type="date" placeholder='dd/mm/yyyy'/>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            className='text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" placeholder='employee name'/>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            className='text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" placeholder='employee name'/>
                    </div>
                    <div className='flex flex-col items-start w-2/5'>
                        <h3 className='text-sm text-gray-400 mb-0.5'>Description</h3>
                        <textarea
                            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            name="" id=""></textarea>
                        <button
                            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm text-white mt-4 w-full'>Create
                            Task
                        </button>
                    </div>
                </form>


            </div>


        </div>
    );
};

export default CreateTask;
