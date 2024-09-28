import React, { useState } from 'react';
import Card from "./Card"
const Accordion = (props) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpenNested1, setIsOpenNested1] = useState(false);
  const [isOpenNested2, setIsOpenNested2] = useState(false);
  const [isOpenNested3, setIsOpenNested3] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const data=props.data.matchDetailsMap;
  return (
    <div id="accordion-nested-parent" data-accordion="collapse">
     
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => setIsOpen2(!isOpen2)}
          aria-expanded={isOpen2}
          aria-controls="accordion-collapse-body-2"
        >

          {/* {console.log("sovdbno",data.key)} */}
          
          {data?.key && <span>{data.key}</span>}

          <svg
            className={`w-3 h-3 ${isOpen2 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen2 && (
        <div  id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2">
          <div className="p-4 sm:ml-64 flex flex-wrap gap-5" >
          {
           data?.match && data.match.map((event)=>(
              <Card data={event}/>
            ))
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
