import React, { useState } from 'react';
import ChatModal from './ChatModal';
import '../css/ChatButton.css';

const ChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <>
            <button 
                className="chat-button"
                onClick={toggleChat}
                aria-label="Abrir chat com assistente"
            >
                <div className="chat-button-icon">
                    <i className="bi bi-chat-fill"></i>
                </div>
                <div className="chat-button-pulse"></div>
            </button>

            <ChatModal 
                isOpen={isChatOpen} 
                onClose={() => setIsChatOpen(false)} 
            />
        </>
    );
};

export default ChatButton;
