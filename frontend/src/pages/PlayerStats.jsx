import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BattingStats from '../components/BattingStats';
import BowlingStats from '../components/BowlingStats';
import { players } from '../services/apis';
import axios from 'axios';
import Navbar from '../components/Navbar';

function PlayerStats(props) {
  const [bowlingData, setBowlingData] = useState([]);
  const [battingData, setBattingData] = useState([]);
  const [bio, setBio] = useState({});
  const [showFullBio, setShowFullBio] = useState(false);

  const { playerId } = useParams();

  const fetchBattingStats = async (playerId) => {
    try {
      const res = await axios.get(`${players.GET_PLAYER_STATS}${playerId}/batting`, {
        headers: {
          'x-rapidapi-key': '9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f',
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      });
      setBattingData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBio = async (playerId) => {
    try {
      const res = await axios.get(`${players.GET_PLAYER_STATS}${playerId}`, {
        headers: {
          'x-rapidapi-key': '9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f',
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      });
      setBio(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBowlingStats = async (playerId) => {
    try {
      const res = await axios.get(`${players.GET_PLAYER_STATS}${playerId}/bowling`, {
        headers: {
          'x-rapidapi-key': '9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f',
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      });
      setBowlingData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBio(playerId);
    fetchBattingStats(playerId);
    fetchBowlingStats(playerId);
  }, [playerId]);

  const image = `http://i.cricketcb.com/stats/img/faceImages/${playerId}.jpg`;

  // Function to truncate the bio to 200 words
  const truncatedBio = (bio.bio || '')
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .split(' ')
    .slice(0, 200)
    .join(' ');

  return (
    <div>
      <Navbar />

      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px] bg-black"></div>
          <div className="flex flex-col items-center -mt-20">
            <img src={image} className="w-40 border-4 border-white rounded-full" alt="Profile" />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{bio.name}</p>
            </div>
            <p className="text-gray-700">{bio.role}</p>
            <p className="text-sm text-gray-500">{bio.intlTeam}</p>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full 2xl:w-3/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">About</h4>
              <p className="mt-2 text-gray-700">
                {showFullBio ? (
                  <p dangerouslySetInnerHTML={{ __html: bio.bio }} style={{ whiteSpace: 'pre-wrap' }} />
                ) : (
                  <span>
                    {truncatedBio}...
                    <button
                      className="text-blue-500 ml-2 underline hover:text-blue-700"
                      onClick={() => setShowFullBio(true)}
                    >
                      Read More
                    </button>
                  </span>
                )}
              </p>
              {showFullBio && (
                <button
                  className="text-blue-500 underline hover:text-blue-700 mt-2"
                  onClick={() => setShowFullBio(false)}
                >
                  Show Less
                </button>
              )}
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Batting Statistics</h4>
              <BattingStats data={battingData} />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Bowling Statistics</h4>
              <BowlingStats data={bowlingData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;
