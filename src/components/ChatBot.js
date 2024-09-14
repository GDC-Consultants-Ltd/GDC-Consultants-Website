// components/ChatBot.js
"use client";

import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid"; // Import Heroicons

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { from: "user", text: inputValue }]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          from: "bot",
          text: "Thank you for your message! We will get back to you soon.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {/* Toggle Button - Remains in the same position */}
      <button
        onClick={toggleChat}
        className="bg-customBlue text-white p-3 rounded-full shadow-lg hover:bg-customYellow transition flex items-center justify-center absolute"
        style={{ bottom: "5px", right: "5px" }}
        aria-label={isOpen ? "Close ChatBot" : "Open ChatBot"}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col"
          style={{ marginBottom: "80px", borderRadius: "20px" }} // Ensure rounded corners
        >
          {/* Header */}
          <div
            className="flex justify-between items-center mb-2 px-2 rounded-t-lg"
            style={{
              backgroundColor: "#044E80",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }} // Custom blue background
          >
            <h3 className="text-lg font-semibold text-white py-2 px-3 rounded-t-lg">
              ChatBot
            </h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-2 px-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.from === "bot"
                    ? "bg-[#eaf0f6] text-[#8798aa]"
                    : "bg-customBlue text-white ml-auto"
                } max-w-[75%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center border-t p-1 px-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 p-2 rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-customBlue text-white p-2 rounded-full hover:bg-customYellow transition flex items-center justify-center"
              aria-label="Send Message"
            >
              <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
