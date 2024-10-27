import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TeamsTitle from '../components/TeamsTitle';
import axios from 'axios';
import { APIs, players } from '../services/apis';
import Accordion from '../components/Accordian';
import { apiConnector } from '../services/apiConnector';
import india from "../assets/images/india.png"
import afg from "../assets/images/afg.png"
import aus from "../assets/images/aus.png"
import bangladesh from "../assets/images/bangladesh.png"
import eng from "../assets/images/eng.png"
import ireland from "../assets/images/ireland.png"
import nz from "../assets/images/nz.png"
import pak from "../assets/images/pak.png"
import sa from "../assets/images/sa.png"
import sri from "../assets/images/sri.png"
import wi from "../assets/images/wi.png"
import zimbabwe from "../assets/images/zimbabwe.png"

function Schedules(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState([]);
    const [teamId, setTeam] = useState(2);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
 
    const handleClick = (team) => {
        setTeam(team); // Use the `team` argument instead of `teamId`
         // Pass the correct `teamId` when fetching players
    };
    const fetchSchedule = async () => {
        try {
            const res = await apiConnector("POST",APIs.schedule,{teamId})
            console.log("res",res);
            const newData=res.data.data.teamMatchesData.filter((series)=>!series.adDetail)
            setData(newData)
           
        } catch (error) {
            console.error(error);  // Handle and log errors
        }
    };

    useEffect(() => {
        fetchSchedule(teamId)
    }, [teamId])
    console.log(data);
    return (
        <>
        <Navbar />
        {/* Toggle button */}
        {console.log("datacd",data)}
        <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
            <span className="sr-only">Open sidebar</span>
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
            </svg>
        </button>

        {/* Sidebar */}
        {/* <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <div className="h-full mt-16 px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
                <ul className="space-y-2 font-medium " >
                    <div className=" mt-5 flex" onClick={() => handleClick(2)}>
                        <img width="40px" height="15px" src={india} alt='india'/>
                        <TeamsTitle title="India" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(4)}>
                    <img width="40px" height="15px" src={aus} alt='aus'/>
                        <TeamsTitle title="Australia" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(9)}>
                    <img width="40px" height="15px" src={eng} alt='eng'/>
                        <TeamsTitle title="England" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(11)}>
                    <img width="40px" height="15px" src={sa} alt='sa'/>
                        <TeamsTitle title="South Africa" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(13)}>
                    <img width="40px" height="15px" src={nz} alt='nz'/>
                        <TeamsTitle title="New Zealand" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(3)}>
                    <img width="40px" height="15px" src={pak} alt='pak'/>
                        <TeamsTitle title="Pakistan" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(5)}>
                    <img width="40px" height="15px" src={sri} alt='sri'/>
                        <TeamsTitle title="Sri Lanka" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(6)}>
                    <img width="40px" height="15px" src={bangladesh} alt='bangladesh'/>
                        <TeamsTitle title="Bangladesh" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(10)}>
                    <img width="40px" height="15px" src={wi} alt='wi'/>
                        <TeamsTitle title="West Indies" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(96)}>
                    <img width="40px" height="15px" src={afg} alt='afg'/>
                        <TeamsTitle title="Afghanistan" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(27)}>
                    <img width="40px" height="15px" src={ireland} alt='ireland'/>
                        <TeamsTitle title="Ireland" />
                    </div>
                    <div className=" mt-5 flex" onClick={() => handleClick(12)}>
                    <img width="40px" height="15px" src={zimbabwe} alt='zimbabwe'/>
                        <TeamsTitle title="Zimbabwe" />
                    </div>
                </ul>
            </div>
        </aside> */}

        <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg`}
                aria-label="Sidebar"
            >
                <div className="h-full mt-16 px-3 py-4 overflow-y-auto">
                    <ul className="space-y-4 font-medium text-white">
                        {[{teamId: 2, img: india, name: "India"}, {teamId: 4, img: aus, name: "Australia"}, {teamId: 9, img: eng, name: "England"}, {teamId: 11, img: sa, name: "South Africa"}, {teamId: 13, img: nz, name: "New Zealand"}, {teamId: 3, img: pak, name: "Pakistan"}, {teamId: 5, img: sri, name: "Sri Lanka"}, {teamId: 6, img: bangladesh, name: "Bangladesh"}, {teamId: 10, img: wi, name: "West Indies"}, {teamId: 96, img: afg, name: "Afghanistan"}, {teamId: 27, img: ireland, name: "Ireland"}, {teamId: 12, img: zimbabwe, name: "Zimbabwe"}].map((team) => (
                            <li key={team.teamId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition cursor-pointer" onClick={() => handleClick(team.teamId)}>
                                <img src={team.img} alt={team.name} className="w-10 h-10 " />
                                <TeamsTitle title={team.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

        <div  className="p-4 sm:ml-64 flex flex-wrap gap-5 justify-center align-middle bg-gray-800 mt-16" >
        
        {
           
            data.map((series,index)=>(
                <div className='  ' key={index} style={{width:"90%"}} >
               {<Accordion data={series}/>}
                </div>
            ))
         
        }
           </div>
        

    </>
    );
}

export default Schedules;