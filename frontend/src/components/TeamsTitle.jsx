import React, { useState } from 'react';

const TeamsTitle = (props) => {

  const title=props.title;
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group"
      >
       
        <span className="ms-3">{title}</span>
      </a>
    </li>
  );
};

export default TeamsTitle;
