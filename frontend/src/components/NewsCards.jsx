import React, { useState } from "react";

const NewsCards = (props) => {
  const [activeTab, setActiveTab] = useState("about");
  const cardData = props.data.story;
  console.log("cardData",cardData);
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 border-gray-700 text-gray-400 bg-gray-800"
        role="tablist"
      >
        <li className="me-2">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "about"}
            onClick={() => setActiveTab("about")}
            className={`inline-block p-4 ${
              activeTab === "about"
                ? "text-blue-600 rounded-ss-lg bg-gray-800 text-blue-500"
                : "hover:text-gray-600 hover:bg-gray-100 hover:bg-gray-700 hover:text-gray-300"
            }`}
          >
            {cardData.context}
          </button>
        </li>
      </ul>

      <div>
       
        
          <div
            className="p-4 bg-white rounded-lg md:p-8 bg-gray-800"
            id="about"
            role="tabpanel"
          >
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 text-white">
              {cardData.hline}
            </h2>
            <p className="mb-3 text-gray-500 text-gray-400">
             {cardData.intro}
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 text-blue-500 hover:text-blue-700"
            >
              Learn more
              <svg
                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
    
      </div>
    </div>
  );
};

export default NewsCards;
