import React from 'react';

const Scoreboard = ({ data, index }) => {
    const match = data.scoreCard[index];
    const { batTeamDetails, bowlTeamDetails, scoreDetails, extrasData } = match;
    const batsmen = Object.values(batTeamDetails.batsmenData);
    const bowlers = Object.values(bowlTeamDetails.bowlersData);

    return (
        <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg border border-gray-300">
            {/* Score and Team Details */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-indigo-600">
                    {batTeamDetails.batTeamName} vs {bowlTeamDetails.bowlTeamName}
                </h2>
                <p className="text-lg text-gray-700">Score: {scoreDetails.runs}/{scoreDetails.wickets} in {scoreDetails.overs} overs</p>
                <p className="text-gray-500">Run Rate: {scoreDetails.runRate}</p>
            </div>

            {/* Batsmen Table */}
            <div className="overflow-x-auto mb-8">
                <h3 className="text-xl font-semibold text-indigo-500 mb-3">Batsmen</h3>
                <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                        <tr className="bg-indigo-100 text-left">
                            <th className="py-2 px-4 font-medium">Name</th>
                            <th className="py-2 px-4 font-medium">Runs</th>
                            <th className="py-2 px-4 font-medium">Balls</th>
                            <th className="py-2 px-4 font-medium">Fours</th>
                            <th className="py-2 px-4 font-medium">Sixes</th>
                            <th className="py-2 px-4 font-medium">Strike Rate</th>
                            <th className="py-2 px-4 font-medium">Dismissal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batsmen.map((batsman) => (
                            <tr key={batsman.batId} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4">{batsman.batName}</td>
                                <td className="py-3 px-4">{batsman.runs}</td>
                                <td className="py-3 px-4">{batsman.balls}</td>
                                <td className="py-3 px-4">{batsman.fours}</td>
                                <td className="py-3 px-4">{batsman.sixes}</td>
                                <td className="py-3 px-4">{batsman.strikeRate}</td>
                                <td className="py-3 px-4">{batsman.outDesc || 'Not Out'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bowlers Table */}
            <div className="overflow-x-auto mb-8">
                <h3 className="text-xl font-semibold text-indigo-500 mb-3">Bowlers</h3>
                <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                        <tr className="bg-indigo-100 text-left">
                            <th className="py-2 px-4 font-medium">Name</th>
                            <th className="py-2 px-4 font-medium">Overs</th>
                            <th className="py-2 px-4 font-medium">Maidens</th>
                            <th className="py-2 px-4 font-medium">Runs</th>
                            <th className="py-2 px-4 font-medium">Wickets</th>
                            <th className="py-2 px-4 font-medium">Economy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bowlers.map((bowler) => (
                            <tr key={bowler.bowlerId} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4">{bowler.bowlName}</td>
                                <td className="py-3 px-4">{bowler.overs}</td>
                                <td className="py-3 px-4">{bowler.maidens}</td>
                                <td className="py-3 px-4">{bowler.runs}</td>
                                <td className="py-3 px-4">{bowler.wickets}</td>
                                <td className="py-3 px-4">{bowler.economy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Extras and Powerplay Data */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-lg font-semibold text-indigo-500 mb-2">Extras</h3>
                <p className="text-gray-700">Wides: {extrasData.wides}</p>
                <p className="text-gray-700">Leg Byes: {extrasData.legByes}</p>
                <p className="text-gray-700 font-medium">Total Extras: {extrasData.total}</p>
            </div>
        </div>
    );
};

export default Scoreboard;
