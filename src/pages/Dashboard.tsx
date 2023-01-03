import React from 'react';
import Cards from '../../src/components/Cards/Cards'
import LeftSideBar from '../../src/components/leftSidebar'
import RightSidebar from '../components/Sidebar/rightSideBar';
const Dashboard: React.FC = () => {
    return (
        <div className="flex p-[80px] bg-[#AABBCC]">
<LeftSideBar></LeftSideBar>
            {/* <div className="w-28 h-screen bg-yellow-500 "></div> */}
            <div className="bg-[#f6f9f7]" >
<div className='p-[40px]'>
                <div className="text-[14px] font bold">Dashboard</div>
                <div className='flex flex-row'>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </div>
                < div className="text-2xl font bold "></div>
                </div>


                {/* <div className="flex p-1 rounded-lg bg-blue-400"></div> */}
                {/* <div className="px-1 py-1 bg-yellow-300 text-black">
                        search
                    </div> */}



            </div>
            <RightSidebar></RightSidebar>
            {/* <div className="w-28  flex-none h-screen  bg-violet-500 "></div> */}
        </div>

    );
};



export default Dashboard;
