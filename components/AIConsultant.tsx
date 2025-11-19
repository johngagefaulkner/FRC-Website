import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello. I'm Thomas, your virtual design consultant. How can I assist with your vision today?",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || chatState === ChatState.LOADING) return;

    const userText = input.trim();
    setInput('');
    setChatState(ChatState.LOADING);

    // Add user message
    const newMessages = [
      ...messages,
      { role: 'user', text: userText, timestamp: Date.now() } as ChatMessage
    ];
    setMessages(newMessages);

    // Prepare history for Gemini (excluding the very last user message which is sent as prompt)
    // Gemini SDK expects history in specific format
    const historyForApi = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // Call API
    const responseText = await sendChatMessage(historyForApi, userText);

    setMessages(prev => [
      ...prev,
      { role: 'model', text: responseText, timestamp: Date.now() }
    ]);
    setChatState(ChatState.IDLE);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto bg-white rounded-2xl shadow-2xl border border-wood-200 
          w-80 sm:w-96 max-h-[500px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0 mb-4' : 'opacity-0 scale-95 translate-y-10 mb-0 h-0'}
        `}
      >
        {/* Header */}
        <div className="bg-wood-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-wood-600 flex items-center justify-center border border-wood-400">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-sm">Thomas Faulkner</h3>
              <p className="text-xs text-wood-200">Design Consultant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-wood-200 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-wood-50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-wood-700 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-wood-100 rounded-bl-none'
                  }
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {chatState === ChatState.LOADING && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-500 p-3 rounded-2xl rounded-bl-none border border-wood-100 text-xs italic flex items-center space-x-1">
                <span>Thinking</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
                <span className="animate-bounce delay-300">.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-wood-100 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about wood, design, renovation..."
            className="flex-1 bg-wood-50 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-wood-300 outline-none text-slate-700 placeholder:text-slate-400"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || chatState === ChatState.LOADING}
            className="p-2 bg-wood-700 text-white rounded-full hover:bg-wood-800 disabled:opacity-50 disabled:hover:bg-wood-700 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto h-14 w-14 bg-wood-800 hover:bg-wood-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-wood-300 outline-none"
        aria-label="Open design consultant chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};