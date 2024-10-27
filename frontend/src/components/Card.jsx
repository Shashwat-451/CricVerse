import React from 'react';
import { FaMapMarkerAlt, FaFlagCheckered } from 'react-icons/fa';

const Card = (props) => {
    const data = props.data;
    console.log("Data", data);

    return (
        <div 
            className="mb-6 w-[100%] mx-auto flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 shadow-xl rounded-lg border border-blue-600  hover:shadow-2xl"
        >
            <div className="p-6 bg-white text-black rounded-t-lg">
                <h2 className="font-serif text-2xl font-semibold mb-2">
                    {/* {data.matchInfo.team1.teamName} <span className="text-black">Vs</span> {data.matchInfo.team2.teamName} */}
                    {data.matchInfo.matchDesc}
                </h2>
                <h3 className="font-serif text-lg font-medium text-gray-700 mb-2">
                {data.matchInfo.team1.teamName} <span className="text-black">Vs</span> {data.matchInfo.team2.teamName}
                </h3>
                <div className="font-serif flex items-center mb-1 text-gray-700">
                    <FaFlagCheckered className="mr-1" />
                    <span className="font-semibold">Status:</span> {data.matchInfo.status}
                </div>
                <div className="font-serif flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    <span className="font-serif font-semibold">Venue:</span> {data.matchInfo.venueInfo.ground}, {data.matchInfo.venueInfo.city}
                </div>
            </div>
        </div>
    );
};

export default Card;
