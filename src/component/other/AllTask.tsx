import React from "react";

const AllTask: React.FC = () => {
    return (
        <div>
            <div className='p-5 mt-5 h-48 rounded overflow-auto bg-[#1c1c1c]'>
                <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
                    <h3>Make UI Design</h3>
                    <h2>Abhishek</h2>
                    <h5>Status</h5>
                </div>
                <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded '>
                    <h3>Make UI Design</h3>
                    <h2>Abhishek</h2>
                    <h5>Status</h5>
                </div>
                <div className='bg-blue-400 mb-2  py-2 px-4 flex justify-between rounded '>
                    <h3>Make UI Design</h3>
                    <h2>Abhishek</h2>
                    <h5>Status</h5>
                </div>
                <div className='bg-purple-400 mb-2  py-2 px-4 flex justify-between rounded '>
                    <h3>Make UI Design</h3>
                    <h2>Abhishek</h2>
                    <h5>Status</h5>
                </div>


            </div>


        </div>
    );
};

export default AllTask;
