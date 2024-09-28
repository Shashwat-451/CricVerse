import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TeamsTitle from '../components/TeamsTitle';
import axios from 'axios';
import { players } from '../services/apis';
import Accordion from '../components/Accordian';
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
            const res = await axios.get(`${players.GET_PLAYERS}${teamId}/schedule`, {
                headers: {
                    "x-rapidapi-key": "9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f",
                    "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
                },
            });
        
            // Log the response data directly
            const newData=res.data.teamMatchesData.filter((series)=>!series.adDetail)
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
        <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <div className="h-full mt-16 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <div onClick={() => handleClick(2)}>
                        <TeamsTitle title="India" />
                    </div>
                    <div onClick={() => handleClick(4)}>
                        <TeamsTitle title="Australia" />
                    </div>
                    <div onClick={() => handleClick(9)}>
                        <TeamsTitle title="England" />
                    </div>
                    <div onClick={() => handleClick(11)}>
                        <TeamsTitle title="South Africa" />
                    </div>
                    <div onClick={() => handleClick(13)}>
                        <TeamsTitle title="New Zealand" />
                    </div>
                    <div onClick={() => handleClick(3)}>
                        <TeamsTitle title="Pakistan" />
                    </div>
                    <div onClick={() => handleClick(5)}>
                        <TeamsTitle title="Sri Lanka" />
                    </div>
                    <div onClick={() => handleClick(6)}>
                        <TeamsTitle title="Bangladesh" />
                    </div>
                    <div onClick={() => handleClick(10)}>
                        <TeamsTitle title="West Indies" />
                    </div>
                    <div onClick={() => handleClick(96)}>
                        <TeamsTitle title="Afghanistan" />
                    </div>
                    <div onClick={() => handleClick(27)}>
                        <TeamsTitle title="Ireland" />
                    </div>
                    <div onClick={() => handleClick(12)}>
                        <TeamsTitle title="Zimbabwe" />
                    </div>
                </ul>
            </div>
        </aside>
        <div  className="p-4 sm:ml-64 flex flex-wrap gap-5">
        
        {
           
            data.map((series,index)=>(
                <div key={index} style={{width:"90%",marginLeft:"100px"}} >
               {<Accordion data={series}/>}
                </div>
            ))
         
        }
           </div>
        {/* <div className="p-4 sm:ml-64 flex flex-wrap gap-5">
            {data.map((player) => (
                player.id && <ProfileCard key={player.id} player={player} />  // Ensure each item has a unique `key`
            ))}
        </div> */}

    </>
    );
}

export default Schedules;