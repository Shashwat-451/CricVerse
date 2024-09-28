import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TeamsTitle from '../components/TeamsTitle';
import { apiConnector } from "../services/apiConnector"
import { players } from '../services/apis';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';

const Teams = () => {
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

    //   const fetchPlayers = async (teamId) => {
    //     try {
    //       const response = await apiConnector(
    //         "GET",
    //         `${players.GET_PLAYERS}${teamId}/players`,
    //         null,
    //         {
    //           "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    //           "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    //         }
    //       );
    //       setData(response.data);
    //       console.log(response.data); // Log `response.data` directly here
    //     } catch (error) {
    //       console.error(error); // Handle the error properly
    //     }
    //   };

    const fetchPlayers = async () => {
        try {
            const res = await axios.get(`${players.GET_PLAYERS}${teamId}/players`, {
                headers: {
                    "x-rapidapi-key": "9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f",
                    "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
                },
            });
            setData(res.data.player);  // Set the data in the state
            // Log the response data directly
            console.log(data);
        } catch (error) {
            console.error(error);  // Handle and log errors
        }
    };

    useEffect(() => {
        fetchPlayers(teamId)
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

            {/* Main content */}
            <div className="p-4 sm:ml-64 flex flex-wrap gap-5">
                {data.map((player) => (
                    player.id && <ProfileCard key={player.id} player={player} />  // Ensure each item has a unique `key`
                ))}
            </div>

        </>

    );
};

export default Teams;
