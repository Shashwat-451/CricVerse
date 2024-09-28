import React from 'react';
import ChatPage from '../components/ChatPage';
const Chat = () => {
  return (
    // <div className="w-full">
    //   <div className="grid pb-11">
    //     <div className="flex gap-2.5 mb-4">
    //       <img
    //         src="https://pagedone.io/asset/uploads/1710412177.png"
    //         alt="Shanay image"
    //         className="w-10 h-11"
    //       />
    //       <div className="grid">
    //         <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
    //           Shanay Cruz
    //         </h5>
    //         <div className="w-max grid">
    //           <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
    //             <h5 className="text-gray-900 text-sm font-normal leading-snug">
    //               Guts, I need a review of work. Are you ready?
    //             </h5>
    //           </div>
    //           <div className="justify-end items-center inline-flex mb-2.5">
    //             <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
    //               05:14 PM
    //             </h6>
    //           </div>
    //         </div>
    //         <div className="w-max grid">
    //           <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
    //             <h5 className="text-gray-900 text-sm font-normal leading-snug">
    //               Let me know
    //             </h5>
    //           </div>
    //           <div className="justify-end items-center inline-flex mb-2.5">
    //             <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
    //               05:14 PM
    //             </h6>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex gap-2.5 justify-end pb-40">
    //     <div>
    //       <div className="grid mb-2">
    //         <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
    //           You
    //         </h5>
    //         <div className="px-3 py-2 bg-indigo-600 rounded">
    //           <h2 className="text-white text-sm font-normal leading-snug">
    //             Yes, let’s see, send your work here
    //           </h2>
    //         </div>
    //         <div className="justify-start items-center inline-flex">
    //           <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
    //             05:14 PM
    //           </h3>
    //         </div>
    //       </div>
    //       <div className="justify-center">
    //         <div className="grid w-fit ml-auto">
    //           <div className="px-3 py-2 bg-indigo-600 rounded">
    //             <h2 className="text-white text-sm font-normal leading-snug">
    //               Anyone on for lunch today
    //             </h2>
    //           </div>
    //           <div className="justify-start items-center inline-flex">
    //             <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
    //               You
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <img
    //       src="https://pagedone.io/asset/uploads/1704091591.png"
    //       alt="Hailey image"
    //       className="w-10 h-11"
    //     />
    //   </div>
    //   <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
    //     <div className="flex items-center gap-2">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="22"
    //         height="22"
    //         viewBox="0 0 22 22"
    //         fill="none"
    //       >
    //         <g id="User Circle">
    //           <path
    //             id="icon"
    //             d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z"
    //             stroke="#4F46E5"
    //             strokeWidth="1.6"
    //           />
    //         </g>
    //       </svg>
    //       <input
    //         className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none"
    //         placeholder="Type here..."
    //       />
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <svg
    //         className="cursor-pointer"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="22"
    //         height="22"
    //         viewBox="0 0 22 22"
    //         fill="none"
    //       >
    //         {/* SVG Paths */}
    //       </svg>
    //       <button className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           viewBox="0 0 16 16"
    //           fill="none"
    //         >
    //           {/* SVG Paths */}
    //         </svg>
    //         <h3 className="text-white text-xs font-semibold leading-4 px-2">
    //           Send
    //         </h3>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
     <div>
      <h1>Welcome to the Chat Application</h1>
      <ChatPage />
    </div>
    </>
  );
};

export default Chat;
