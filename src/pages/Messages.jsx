import React, { useState, useRef, useEffect } from "react";
import "./Messages.css";
import { Send, Search, MoreVertical, Phone, Video, Info, ArrowLeft, Users } from "lucide-react";

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      lastMessage: "That sounds perfect! See you tomorrow.",
      time: "2m",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      lastMessage: "Can you send me the details?",
      time: "15m",
      unread: 2,
      online: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      lastMessage: "Thank you so much!",
      time: "1h",
      unread: 0,
      online: false,
    },
    {
      id: 4,
      name: "David Martinez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      lastMessage: "Looking forward to it",
      time: "3h",
      unread: 0,
      online: true,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100",
      lastMessage: "Let me know when you're ready",
      time: "5h",
      unread: 1,
      online: false,
    },
  ]);

  const [activeConversation, setActiveConversation] = useState(0);
  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: "other", text: "Hi! How are you?", time: "10:30 AM" },
      { id: 2, sender: "user", text: "Hey! I'm doing great, thanks for asking!", time: "10:32 AM" },
      { id: 3, sender: "other", text: "That's awesome! Want to grab coffee later?", time: "10:35 AM" },
      { id: 4, sender: "user", text: "Sure! How about 3 PM at the cafe?", time: "10:36 AM" },
      { id: 5, sender: "other", text: "That sounds perfect! See you tomorrow.", time: "10:38 AM" },
    ],
    2: [
      { id: 1, sender: "other", text: "Hi, do you have the files ready?", time: "11:20 AM" },
      { id: 2, sender: "user", text: "Almost done, sending shortly", time: "11:22 AM" },
      { id: 3, sender: "other", text: "Can you send me the details?", time: "11:25 AM" },
    ],
    3: [
      { id: 1, sender: "user", text: "Thanks for the recommendation!", time: "2:10 PM" },
      { id: 2, sender: "other", text: "You're welcome! Hope it works out", time: "2:12 PM" },
      { id: 3, sender: "other", text: "Thank you so much!", time: "2:15 PM" },
    ],
    4: [
      { id: 1, sender: "other", text: "The event is confirmed for Saturday", time: "4:45 PM" },
      { id: 2, sender: "user", text: "Excellent! I'll be there", time: "4:47 PM" },
      { id: 3, sender: "other", text: "Looking forward to it", time: "4:50 PM" },
    ],
    5: [
      { id: 1, sender: "other", text: "Are you available next week?", time: "6:30 PM" },
      { id: 2, sender: "user", text: "I'll check and get back to you", time: "6:32 PM" },
      { id: 3, sender: "other", text: "Let me know when you're ready", time: "6:35 PM" },
    ],
  });

  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages[activeConversation]]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages[activeConversation].length + 1,
        sender: "user",
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages({
        ...messages,
        [activeConversation]: [...messages[activeConversation], newMessage],
      });
      setMessageInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const activeChat = conversations.find((c) => c.id === activeConversation);
  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="messages-container">
      {/* LEFT SIDEBAR - CONVERSATIONS */}
      <div className="conversations-sidebar">
        {/* HEADER */}
        <div className="conversations-header">
          <h1>Messages</h1>
          {totalUnread > 0 && <span className="unread-badge">{totalUnread}</span>}
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* CONVERSATIONS LIST */}
        <div className="conversations-list">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation-item ${activeConversation === conv.id ? "active" : ""}`}
              onClick={() => setActiveConversation(conv.id)}
            >
              {/* AVATAR */}
              <div className="conversation-avatar">
                <img src={conv.avatar} alt={conv.name} />
                {conv.online && <span className="online-indicator"></span>}
              </div>

              {/* INFO */}
              <div className="conversation-info">
                <div className="conversation-header-row">
                  <span className="conversation-name">{conv.name}</span>
                  <span className="conversation-time">{conv.time}</span>
                </div>
                <div className="conversation-last-message">
                  {conv.lastMessage}
                </div>
              </div>

              {/* UNREAD */}
              {conv.unread > 0 && (
                <span className="conversation-unread">{conv.unread}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - CHAT WINDOW */}
      <div className="chat-window">
        {activeChat ? (
          <>
            {/* CHAT HEADER */}
            <div className="chat-header">
              <div className="header-left">
                <button 
                  className="back-btn"
                  title="Back to conversations"
                  onClick={() => setActiveConversation(null)}
                >
                  <ArrowLeft size={20} />
                </button>
                <img src={activeChat.avatar} alt={activeChat.name} className="header-avatar" />
                <div className="header-info">
                  <h2>{activeChat.name}</h2>
                  <span className={`status ${activeChat.online ? "online" : "offline"}`}>
                    {activeChat.online ? "Online" : "Offline"}
                  </span>
                </div>
              </div>

              <div className="header-actions">
                <button className="action-btn" title="View profile">
                  <Users size={20} />
                </button>
                <button className="action-btn" title="Start call">
                  <Phone size={20} />
                </button>
                <button className="action-btn" title="Start video call">
                  <Video size={20} />
                </button>
                <button className="action-btn" title="More options">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* MESSAGES AREA */}
            <div className="messages-area">
              {messages[activeConversation].map((msg) => (
                <div
                  key={msg.id}
                  className={`message-bubble ${msg.sender === "user" ? "user-message" : "other-message"}`}
                >
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* MESSAGE INPUT */}
            <div className="message-input-container">
              <textarea
                className="message-input"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="1"
              />
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
