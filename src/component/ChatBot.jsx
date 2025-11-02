import React, { useState } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 This chat feature is under update!" },
  ]);

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: "🚧 Under Update — Coming Soon!" },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src="./chaticon.png" alt="i" className="chatphoto"/>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>NextStep AI Chat</h4>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
