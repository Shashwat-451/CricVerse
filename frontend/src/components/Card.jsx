import React from 'react';

const Card = (props) => {
    const data=props.data;
  return (
    <div style={{width:"300px"}} className="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
      <div className="p-4 md:p-5">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {data.matchInfo.team1.teamName} Vs {data.matchInfo.team2.teamName}
        </h2>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {data.matchInfo.matchDesc}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          {data.matchInfo.status}
        </p>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          {data.matchInfo.venueInfo.ground},{data.matchInfo.venueInfo.city}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
