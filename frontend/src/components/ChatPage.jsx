import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io("http://localhost:5000");

const ChatPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (data) => setChat((prevChat) => [...prevChat, data]));
    socket.on("updateParticipants", (users) => setParticipants(users));

    return () => {
      socket.off("receiveMessage");
      socket.off("updateParticipants");
    };
  }, []);

  const joinChat = () => {
    if (name.trim()) {
      socket.emit("userJoined", name);
      setIsJoined(true); // Mark user as joined
    }
  };

  const sendMessage = () => {
    if (message.trim() && isJoined) {
      socket.emit("sendMessage", { name, message });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-800 p-6 mt-16">
      <div className="w-1/4 p-5 bg-white shadow-xl rounded-lg mr-4">
        <h3 className="text-2xl font-serif font-bold text-indigo-700 mb-4">Participants</h3>
        <ul className="space-y-3">
          {participants.map((user) => (
            <li key={user.id} className="flex items-center text-gray-700">
              <div className="w-8 h-8 bg-indigo-300 rounded-full flex items-center justify-center text-white font-semibold mr-2">
                {user.name[0].toUpperCase()}
              </div>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-grow flex flex-col bg-white shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600"></h2>

        {!isJoined && (
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name to join..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={joinChat}
              className="mt-3 w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
            >
              Join Chat
            </button>
          </div>
        )}

        <div className="flex-grow overflow-y-scroll mb-4 border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 shadow-inner">
          {chat.map((data) => (
            <div key={uuidv4()} className={`flex ${data.name === name ? "justify-end" : "justify-start"}`}>
              <div className={`p-4 rounded-lg shadow-lg ${data.name === name ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                <span className="block text-xs  mb-1">{data.name}</span>
                <p className="text-sm">{data.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={sendMessage}
            className="ml-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
