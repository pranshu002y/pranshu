import React, { useState, useRef, useEffect } from "react";


export default function EtherealChat() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Welcome back! How can I help you today? scroll down to start typing✨"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://soalbackend.onrender.com/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: input })
      });

      const data = await res.json();
      const text = data.response || "No response";

      let i = 0;
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);

      const interval = setInterval(() => {
        i++;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = text.slice(0, i);
          return updated;
        });

        if (i >= text.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 15);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Server error" }
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">


        {/* Messages */}
        <div ref={chatRef} className="chat-body">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-row ${
                m.role === "user" ? "user" : "bot"
              }`}
            >
              {m.role === "bot" && (
                <div className="bot-message">
                  <div className="bot-avatar small">✨</div>
                  <div className="bubble bot-bubble">{m.text}</div>
                </div>
              )}

              {m.role === "user" && (
                <div className="bubble user-bubble">{m.text}</div>
              )}
            </div>
          ))}

          {loading && <div className="typing">Typing...</div>}
        </div>

        {/* Input */}
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything by typing hello!"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}



