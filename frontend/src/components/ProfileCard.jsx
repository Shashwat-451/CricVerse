import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
  const imageId = props.player.imageId;
  const image = `https://static.cricbuzz.com/a/img/v1/75x75/i1/c${imageId}/i1.jpg`;

  const handleClick = (id) => {
    const newPath = `/player/${id}/${imageId}`;
    return newPath;
  };

  return (
    <div className="w-[20%]  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-1 rounded-lg shadow-xl">
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-5">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          src={image}
          alt={props.player.name}
        />
        <h5 className="mb-1 text-xl font-semibold text-indigo-600">{props.player.name}</h5>
        <span className="text-sm text-gray-500">{props.team}</span>
        <div className="flex mt-4">
          <Link
            to={handleClick(props.player.id)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-transform transform hover:scale-105"
          >
            Stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
