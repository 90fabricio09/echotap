import React, { useState, useRef, useEffect } from 'react';
import '../css/ChatModal.css';

// Função para renderizar Markdown simples
const renderMarkdown = (text) => {
    if (!text) return '';
    
    return text
        // Código inline
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Código em bloco
        .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
        // Negrito
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        // Itálico
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Quebras de linha
        .replace(/\n/g, '<br>');
};

const ChatModal = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Olá! Sou o Echo Bot, o assistente virtual do EchoTap. Como posso ajudá-lo hoje?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const prompt = `Você é o Echo Bot, assistente virtual especializado em cartões de visita digitais EchoTap, não precisa cumprimentar o usuário toda vez que for falar com ele. Seu papel é:

1. AJUDAR clientes interessados em criar cartões digitais profissionais
2. EXPLICAR as funcionalidades do EchoTap (tecnologia NFC, site personalizado, etc.)
3. ORIENTAR sobre preços e planos (R$ 69,90)
4. RESPONDER dúvidas técnicas sobre o produto
5. SER amigável, profissional e prestativo
6. FOCAR em como o EchoTap pode melhorar o networking do cliente

Contato: Para o cliente entrar em contato pode ser via WhatsApp pelo link https://wa.me/5511931501833 ou pelo instagram https://instagram.com/echotapoficial

Configuração: Para o cliente configurar o cartão EchoTap ele precisa estar com o código do cartão dele em mãos que está no folder onde veio o cartão e colocar esse código no site com o link https://config.echotap.com.br e fazer a configuração do cartão

Contexto: EchoTap é um cartão de visita digital com tecnologia NFC que permite compartilhar informações de contato de forma moderna e profissional.

Pergunta do cliente: ${inputMessage}`;

            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 64,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            };

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyD0SadsGa63It4biij4_c52s-B4IsYnoKo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error('API não disponível');
            }

            const data = await response.json();
            
            let aiResponse;
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                aiResponse = data.candidates[0].content.parts[0].text;
            } else if (data.error) {
                aiResponse = "Desculpe, nosso assistente virtual não está disponível no momento. Por favor, entre em contato conosco através dos canais oficiais para mais informações sobre o EchoTap.";
            } else {
                aiResponse = "Desculpe, nosso assistente virtual não está disponível no momento. Por favor, entre em contato conosco através dos canais oficiais para mais informações sobre o EchoTap.";
            }

            const aiMessage = {
                id: Date.now() + 1,
                text: aiResponse,
                sender: 'ai',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage = {
                id: Date.now() + 1,
                text: "Desculpe, nosso assistente virtual não está disponível no momento. Por favor, entre em contato conosco através dos canais oficiais para mais informações sobre a EchoTap.",
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
        // Shift+Enter permite quebra de linha
    };

    if (!isOpen) return null;

    return (
        <div className={`chat-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div className={`chat-modal ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-avatar">
                            <img src="/EchoTap.png" alt="EchoTap" className="chat-avatar-img" />
                        </div>
                        <div className="chat-header-text">
                            <h3>Echo Bot</h3>
                            <span className="chat-status">Online</span>
                        </div>
                    </div>
                    <button className="chat-close" onClick={handleClose}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender}`}>
                            <div className="message-content">
                                {message.sender === 'ai' ? (
                                    <div 
                                        dangerouslySetInnerHTML={{ 
                                            __html: renderMarkdown(message.text) 
                                        }}
                                    />
                                ) : (
                                    <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                                )}
                                <span className="message-time">
                                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                                        hour: '2-digit', 
                                        minute: '2-digit' 
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message ai">
                            <div className="message-content">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-container">
                    <div className="chat-input-wrapper">
                        <textarea
                            ref={inputRef}
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Digite sua mensagem..."
                            className="chat-input"
                            rows={1}
                            style={{
                                resize: 'none',
                                minHeight: '40px',
                                maxHeight: '120px',
                                overflow: 'auto'
                            }}
                        />
                        <button 
                            onClick={sendMessage}
                            disabled={!inputMessage.trim() || isLoading}
                            className="chat-send-button"
                        >
                            <i className="bi bi-send"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatModal;
