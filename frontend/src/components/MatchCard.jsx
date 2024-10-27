import React, { useEffect, useMemo, useState } from 'react';
import { apiConnector } from '../services/apiConnector';
import { APIs } from '../services/apis';
import Scoreboard from './Scoreboard';

const MatchCard = (props) => {
    const data = props.data;
    const matchId = data.matchInfo.matchId;
    const [score, setScore] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState(0);

    const fetchMatchDetails = async () => {
        try {
            const response = await apiConnector("POST", APIs.liveScorecard, { matchId });
            setScore(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const matchData = useMemo(() => fetchMatchDetails(matchId), [matchId]);

    const tabs = [];
    if (data.matchScore?.team1Score?.inngs1) tabs.push(`${data.matchInfo.team1.teamName} 1st Inn`);
    if (data.matchScore?.team2Score?.inngs1) tabs.push(`${data.matchInfo.team2.teamName} 1st Inn`);
    if (data.matchScore?.team1Score?.inngs2) tabs.push(`${data.matchInfo.team1.teamName} 2nd Inn`);
    if (data.matchScore?.team2Score?.inngs2) tabs.push(`${data.matchInfo.team2.teamName} 2nd Inn`);

    const handleTabClick = (tab) => setTab(tab);

    return (
        <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 shadow-xl rounded-lg border  hover:shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 px-5 rounded-t-lg">
                <h1 className="text-lg font-semibold tracking-wide">{data.matchInfo.seriesName}</h1>
            </div>

            {/* Teams and Venue */}
            <div className="bg-white p-5 border-b">
                <h2 className="text-lg font-semibold text-gray-800">{data.matchInfo.matchDesc}</h2>
                <p className="text-sm text-gray-600"> {data.matchInfo.team1.teamName} vs {data.matchInfo.team2.teamName}</p>
                <p className="text-sm text-gray-600">{data.matchInfo.venueInfo.ground}, {data.matchInfo.venueInfo.city}</p>
            </div>

            {/* Match Scores */}
            <div className="p-5 text-gray-800 bg-gray-100">
                <h3 className="text-md font-semibold text-indigo-600 mb-2">{data.matchInfo.status}</h3>
                <div className="space-y-3 text-gray-700">
                    {data.matchScore?.team1Score?.inngs1 && (
                        <div className="p-3 rounded-lg shadow-sm bg-white border">
                            <p className="font-medium">{data.matchInfo.team1.teamName} 1st Innings</p>
                            <p>Score: {data.matchScore.team1Score.inngs1.runs}/{data.matchScore.team1Score.inngs1.wickets}</p>
                            <p>Overs: {data.matchScore.team1Score.inngs1.overs}</p>
                        </div>
                    )}
                    {data.matchScore?.team1Score?.inngs2 && (
                        <div className="p-3 rounded-lg shadow-sm bg-white border">
                            <p className="font-medium">{data.matchInfo.team1.teamName} 2nd Innings</p>
                            <p>Score: {data.matchScore.team1Score.inngs2.runs}/{data.matchScore.team1Score.inngs2.wickets}</p>
                            <p>Overs: {data.matchScore.team1Score.inngs2.overs}</p>
                        </div>
                    )}
                    {data.matchScore?.team2Score?.inngs1 && (
                        <div className="p-3 rounded-lg shadow-sm bg-white border">
                            <p className="font-medium">{data.matchInfo.team2.teamName} 1st Innings</p>
                            <p>Score: {data.matchScore.team2Score.inngs1.runs}/{data.matchScore.team2Score.inngs1.wickets}</p>
                            <p>Overs: {data.matchScore.team2Score.inngs1.overs}</p>
                        </div>
                    )}
                    {data.matchScore?.team2Score?.inngs2 && (
                        <div className="p-3 rounded-lg shadow-sm bg-white border">
                            <p className="font-medium">{data.matchInfo.team2.teamName} 2nd Innings</p>
                            <p>Score: {data.matchScore.team2Score.inngs2.runs}/{data.matchScore.team2Score.inngs2.wickets}</p>
                            <p>Overs: {data.matchScore.team2Score.inngs2.overs}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Toggleable Scorecard Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors rounded-lg flex items-center justify-center"
            >
                {isOpen ? 'Hide Scorecard' : 'Show Scorecard'}
                <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M9 5l7 7-7 7"} />
                </svg>
            </button>

            {/* Scorecard */}
            {isOpen && (
                <div className="p-5 bg-gray-50 border-t">
                    <div className="flex space-x-4 overflow-x-auto text-center pb-2 ml-4">
                        {tabs.map((tabLabel, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`py-2 px-4 text-sm font-semibold transition-all rounded-md ${tab === index ? "text-indigo-600 bg-indigo-100 border border-indigo-300" : "text-gray-600 hover:text-gray-800"}`}
                            >
                                {tabLabel}
                            </button>
                        ))}
                    </div>

                    {/* Scoreboard */}
                    <Scoreboard data={score} index={tab} />
                </div>
            )}
        </div>
    );
};

export default MatchCard;
