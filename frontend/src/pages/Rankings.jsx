

import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import RankingsTitle from "../components/RankingsTitle";
import ProfileCard from "../components/ProfileCard";
import { APIs } from "../services/apis";
import { apiConnector } from "../services/apiConnector";
import { FaCrown } from 'react-icons/fa';

function Rankings(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [format, setFormat] = useState("test");
  const [playerType, setPlayerType] = useState("batsmen");
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (format, playerType) => {
    setFormat(format);
    setPlayerType(playerType);
  };

  const fetchPlayers = async () => {
    try {
      const res = await apiConnector("POST", APIs.rankings, {
        format,
        playerType,
      });
      setData(res.data.data.rank);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [playerType, format]);

  return (
    <div className="bg-gray-800">
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

      <aside
        id="default-sidebar"
        style={{ width: "320px" }}
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full mt-16 px-4 py-6 overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-md">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-wide border-b-2 border-blue-500 pb-3">
            ICC World Rankings
          </h2>
          <ul className="space-y-4 font-medium">
            {["test", "odi", "t20"].map((format) => (
              <div key={format} onClick={() => handleClick(format, "teams")} className="flex items-center space-x-3 cursor-pointer hover:bg-blue-500 p-3 rounded-lg transition duration-200">
                <FaCrown className="text-white" />
                <RankingsTitle title={`Men's Team ${format.toUpperCase()} Rankings`} />
              </div>
            ))}
            {["batsmen", "bowlers", "allrounders"].map((playerType) => (
              ["test", "odi", "t20"].map((format) => (
                <div key={`${format}-${playerType}`} onClick={() => handleClick(format, playerType)} className="flex items-center space-x-3 cursor-pointer hover:bg-blue-500 p-3 rounded-lg transition duration-200">
                  <FaCrown className="text-white" />
                  <RankingsTitle title={`Men's Team ${format.toUpperCase()} ${playerType.charAt(0).toUpperCase() + playerType.slice(1)} Rankings`} />
                </div>
              ))
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className={`bg-gray-800 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-80" : "ml-0"} sm:ml-96 w-[100%] sm:w-[calc(100%-30vw)]`}>
        <div className="p-4 bg-white rounded-lg shadow-lg mt-24 mb-16">
          {data.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-300">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pos</th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Team</th>
                    {data[0]?.country && <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Player</th>}
                    <th className="px-6 py-3 pr-12 text-end text-xs font-medium uppercase tracking-wider">Rating</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {data.map((ranking, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                      <td className="px-6 py-4 text-start whitespace-nowrap text-gray-800">{ranking.rank}</td>
                      {ranking?.country && <td className="px-6 py-4 text-center whitespace-nowrap text-gray-800">{ranking.country}</td>}
                      {ranking?.name && <td className="px-6 py-4 text-center whitespace-nowrap text-gray-800">{ranking.name}</td>}
                      <td className="px-6 py-4 pr-12 text-end whitespace-nowrap text-gray-800">{ranking.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rankings;
