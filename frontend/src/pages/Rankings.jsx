import React from 'react';
import Navbar from '../components/Navbar';
import { useState,useEffect } from 'react';
import axios from "axios";
import RankingsTitle from '../components/RankingsTitle';
import ProfileCard from '../components/ProfileCard';
import { players } from '../services/apis';


function Rankings(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState([]);
    const [format, setFormat] = useState("test");
    const [playerType,setPlayerType]=useState("batsmen")
    const [teamId, setTeam] = useState(2);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClick = (format,playerType) => {
        setFormat(format);
        setPlayerType(playerType) 
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
            const res = await axios.get(`${players.GET_RANKINGS}${playerType}?formatType=${format}`, {
                headers: {
                    "x-rapidapi-key": "9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f",
                    "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
                },
            });
            setData(res.data.rank);  // Set the data in the state
            // Log the response data directly
            
        } catch (error) {
            console.error(error);  // Handle and log errors
        }
    };
  
    useEffect(() => {
        fetchPlayers()
    }, [playerType,format])
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
                id="default-sidebar" style={{width:"320px"}}
                className={`fixed top-0 left-0 z-40  h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full mt-16 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        
                        
                        
                    <h2 style={{marginBottom:"40px"}} className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                      ICC World Rankings
                     </h2>
                        <div onClick={() => handleClick("test","teams")}>
                            <RankingsTitle title="Men's Team Test Rankings" />
                        </div>
                        <div onClick={() => handleClick("odi","teams")}>
                            <RankingsTitle title="Men's Team ODI Rankings" />
                        </div>
                        <div onClick={() => handleClick("t20","teams")}>
                            <RankingsTitle title="Men's Team T20I Rankings" />
                        </div>
                        <div onClick={() => handleClick("test","batsmen")}>
                            <RankingsTitle title="Men's Team Test Batting Rankings" />
                        </div>
                        <div onClick={() => handleClick("test","bowlers")}>
                            <RankingsTitle title="Men's Team Test Bowling Rankings" />
                        </div>
                        <div onClick={() => handleClick("test","allrounders")}>
                            <RankingsTitle title="Men's Team Test All-Rounder Rankings" />
                        </div>
                        <div onClick={() => handleClick("odi","batsmen")}>
                            <RankingsTitle title="Men's Team ODI Batting Rankings" />
                        </div>
                        <div onClick={() => handleClick("odi","bowlers")}>
                            <RankingsTitle title="Men's Team ODI Bowling Rankings" />
                        </div>
                        <div onClick={() => handleClick("odi","allrounders")}>
                            <RankingsTitle title="Men's Team ODI All-Rounder Rankings" />
                        </div>
                        <div onClick={() => handleClick("t20","batsmen")}>
                            <RankingsTitle title="Men's Team T20I Batting Rankings" />
                        </div>
                        <div onClick={() => handleClick("t20","bowlers")}>
                            <RankingsTitle title="Men's Team T20I Bowling Rankings" />
                        </div>
                        <div onClick={() => handleClick("t20","allrounders")}>
                            <RankingsTitle title="Men's Team T20I All-Rounder Rankings" />
                        </div>
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex flex-col ml-72 w-[70%] align-middle justify-center">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Pos</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Team</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Player</th>
                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.map((ranking)=>(
                        <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{ranking.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{ranking.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{ranking.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{ranking.rating}</td>
                </tr>
                    ))
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

        </>

    );
}

export default Rankings;