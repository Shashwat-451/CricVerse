import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (name.trim() && message.trim()) {
      socket.emit("sendMessage", { name, message });
      setMessage(""); // Clear message after sending
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full  bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Real-Time Chat</h2>

        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Chat Display */}
        <div className="h-92 overflow-y-scroll mb-4 border border-gray-200 rounded p-2 bg-gray-50">
          {chat.map((data, index) => (
            <div
              key={index}
              className={`flex ${
                data.name === name ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  data.name === name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                <span className="block text-xs text-gray-700 mb-1">
                  {data.name}
                </span>
                {data.message}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
