import React, { useState } from 'react';
import Card from "./Card";

const Accordion = (props) => {
    const data = props.data.matchDetailsMap;

    return (
        <div className='bg-gray-800'>
            <h1 className="font-serif font-bold text-2xl mb-6 text-white shadow-lg p-4 bg-white rounded-lg border-l-4  bg-gradient-to-r from-indigo-500 to-indigo-600">
                {data?.key && <span>{data.key}</span>}
            </h1>

            {data?.match && data.match.map((event, index) => (
                <Card key={index} data={event} />
            ))}
        </div>
    );
};

export default Accordion;
