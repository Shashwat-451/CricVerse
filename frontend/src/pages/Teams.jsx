import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TeamsTitle from '../components/TeamsTitle';
import { apiConnector } from "../services/apiConnector";
import ProfileCard from '../components/ProfileCard';
import { APIs } from '../services/apis';
import india from "../assets/images/india.png";
import afg from "../assets/images/afg.png";
import aus from "../assets/images/aus.png";
import bangladesh from "../assets/images/bangladesh.png";
import eng from "../assets/images/eng.png";
import ireland from "../assets/images/ireland.png";
import nz from "../assets/images/nz.png";
import pak from "../assets/images/pak.png";
import sa from "../assets/images/sa.png";
import sri from "../assets/images/sri.png";
import wi from "../assets/images/wi.png";
import zimbabwe from "../assets/images/zimbabwe.png";

const Teams = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState([]);
    const [teamId, setTeam] = useState(2);
    const [teamName, setTeamName] = useState('India');

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleClick = (team, teamName) => {
        setTeam(team); 
        setTeamName(teamName);
    };

    const fetchPlayers = async () => {
        try {
            const res = await apiConnector("POST", APIs.teams, { teamId });
            setData(res.data.data.player);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, [teamId]);

    return (
        <>
            <Navbar />
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="p-2 mt-2 ms-3 text-gray-500 rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg`}
                aria-label="Sidebar"
            >
                <div className="h-full mt-16 px-3 py-4 overflow-y-auto">
                    <ul className="space-y-4 font-medium text-white">
                        {[{teamId: 2, img: india, name: "India"}, {teamId: 4, img: aus, name: "Australia"}, {teamId: 9, img: eng, name: "England"}, {teamId: 11, img: sa, name: "South Africa"}, {teamId: 13, img: nz, name: "New Zealand"}, {teamId: 3, img: pak, name: "Pakistan"}, {teamId: 5, img: sri, name: "Sri Lanka"}, {teamId: 6, img: bangladesh, name: "Bangladesh"}, {teamId: 10, img: wi, name: "West Indies"}, {teamId: 96, img: afg, name: "Afghanistan"}, {teamId: 27, img: ireland, name: "Ireland"}, {teamId: 12, img: zimbabwe, name: "Zimbabwe"}].map((team) => (
                            <li key={team.teamId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition cursor-pointer" onClick={() => handleClick(team.teamId, team.name)}>
                                <img src={team.img} alt={team.name} className="w-10 h-10 " />
                                <TeamsTitle title={team.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <div className="mt-16 justify-center align-middle p-6 sm:ml-64 flex flex-wrap gap-6 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-gray-300">
                {data.map((player) => player.id && (
                    <ProfileCard key={player.id} player={player} team={teamName} />
                ))}
            </div>
        </>
    );
};

export default Teams;
