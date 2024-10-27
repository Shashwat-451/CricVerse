import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BattingStats from '../components/BattingStats';
import BowlingStats from '../components/BowlingStats';
import { APIs } from '../services/apis';
import { apiConnector } from '../services/apiConnector';
import Navbar from '../components/Navbar';

function PlayerStats() {
  const [bowlingData, setBowlingData] = useState([]);
  const [battingData, setBattingData] = useState([]);
  const [bio, setBio] = useState({});
  const [showFullBio, setShowFullBio] = useState(false);

  const { playerId } = useParams();
  const { imageId } = useParams();

  const fetchPlayerStats = async (playerId) => {
    try {
      const res = await apiConnector("POST", APIs.playerStats, { playerId });
      setBattingData(res.data.data.Batting);
      setBowlingData(res.data.data.Bowling);
      setBio(res.data.data.Bio);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayerStats(playerId);
  }, [playerId]);

  const image = `https://static.cricbuzz.com/a/img/v1/75x75/i1/c${imageId}/i1.jpg`;

  // Function to truncate the bio to 200 words
  const truncatedBio = (bio.bio || '')
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .split(' ')
    .slice(0, 200)
    .join(' ');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto p-8 mt-12">
        <div className="bg-white rounded-lg shadow-lg pb-8">
          <div className="w-full h-[250px] bg-gradient-to-r from-indigo-600 to-indigo-500"></div>
          <div className="flex flex-col items-center -mt-16">
            <img src={image} className="w-28 border-4 border-white rounded-full shadow-lg" alt="Profile" />
            <h1 className="text-2xl font-bold text-gray-800 mt-2">{bio.name}</h1>
            <p className="text-gray-700 font-medium">{bio.role}</p>
            <p className="text-sm text-gray-500">{bio.intlTeam}</p>
          </div>
        </div>

        <div className="my-6 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full">
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl text-indigo-600 font-bold ml-2">About</h4>
              <p className="mt-2 text-gray-700 ml-2">
                {showFullBio ? (
                  <span dangerouslySetInnerHTML={{ __html: bio.bio }} style={{ whiteSpace: 'pre-wrap' }} />
                ) : (
                  <span>
                    {truncatedBio}...
                    <button
                      className="text-indigo-500 ml-2 underline hover:text-indigo-700"
                      onClick={() => setShowFullBio(true)}
                    >
                      Read More
                    </button>
                  </span>
                )}
              </p>
              {showFullBio && (
                <button
                  className="text-indigo-500 underline hover:text-indigo-700 mt-2"
                  onClick={() => setShowFullBio(false)}
                >
                  Show Less
                </button>
              )}
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-lg mt-4 p-8">
              <h4 className="text-xl ml-3 text-indigo-600 font-bold">Batting Statistics</h4>
              <BattingStats data={battingData} />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-lg mt-4 p-8">
              <h4 className="text-xl ml-3 text-indigo-600 font-bold">Bowling Statistics</h4>
              <BowlingStats data={bowlingData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;
