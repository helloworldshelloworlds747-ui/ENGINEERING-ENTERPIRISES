import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface ChatbotWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Assalam-o-Alaikum! Welcome to Engineering Enterprises & Veloair. I am your AI Technical Consultant. How can I assist you today regarding industrial cooling, fire fighting (NFPA), or electrical panels?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownPrompt, setHasShownPrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    "How does Veloair save 90% electricity?",
    "PEC C4 License & Certifications",
    "Fire Hydrant & NFPA Fire Fighting",
    "Request Turnkey Site Survey",
    "Poultry & Textile Cooling CFM",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: query,
          userMessage: query,
          messages: [...messages, userMsg].map((m) => ({
            role: m.sender === 'bot' ? 'assistant' : 'user',
            content: m.text,
          })),
        }),
      });

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || "Thank you for contacting Engineering Enterprises. For instant technical proposals, you can also reach us directly at WhatsApp +92 300 8425772.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: "Engineering Enterprises & Veloair provides turnkey HVAC, Evaporative Cooling, Fire Protection, and Electrical Panels since 1992 under PEC Category C4. For direct engineer consultation, please message our CEO & engineering team directly on WhatsApp at +92 300 8425772.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Floating Prompt Bubble matching screenshot */}
      {!isOpen && hasShownPrompt && (
        <div className="hidden sm:block mb-3 bg-white text-slate-900 border border-slate-200 shadow-2xl rounded-2xl p-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={() => setHasShownPrompt(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div 
            onClick={onToggle}
            className="cursor-pointer flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Hi, care for a quick chat?</div>
              <div className="text-[11px] text-slate-500">Ask about Veloair, Fire Fighting & Quotes</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Trigger Button (Desktop & Tablet) */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="hidden md:flex w-14 h-14 rounded-full bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white shadow-2xl items-center justify-center transition-all hover:scale-105 group border-2 border-white cursor-pointer shadow-blue-500/30"
          aria-label="Open AI Engineering Consultant"
        >
          <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-1.5rem)] sm:w-96 h-[500px] sm:h-[540px] max-h-[82vh] bg-white border border-[#E2E6EA] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Chat Header */}
          <div className="bg-[#0B1B2B] p-4 border-b border-[#1a2f45] flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1677FF] text-white flex items-center justify-center font-bold shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm flex items-center gap-1.5 font-display">
                  <span>Veloair AI Consultant</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Online • Engineering Enterprises</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl text-slate-300 hover:text-emerald-400 hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all"
                title="Switch to WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onToggle}
                className="w-9 h-9 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F5F6F3] text-xs">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#1677FF] border border-[#1677FF]/20 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                      isBot
                        ? 'bg-white text-[#0B1B2B] border border-[#E2E6EA]'
                        : 'bg-[#1677FF] text-white font-medium'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <div
                      className={`text-[9px] mt-1 text-right ${
                        isBot ? 'text-[#6B747C]' : 'text-blue-100'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-[#6B747C]">
                <div className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center font-bold">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white px-3 py-2 rounded-2xl border border-[#E2E6EA] flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#1677FF] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#1677FF] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#1677FF] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-2.5 bg-white border-t border-[#E2E6EA] flex gap-2 overflow-x-auto no-scrollbar">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="whitespace-nowrap min-h-[38px] px-3.5 py-1.5 rounded-full bg-[#F5F6F3] hover:bg-[#EBF3FF] active:bg-[#dbe9fe] hover:text-[#1677FF] hover:border-[#1677FF]/40 text-xs text-[#0B1B2B] border border-[#E2E6EA] shrink-0 transition-colors font-medium cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Message Input Box */}
          <div className="p-3 bg-white border-t border-[#E2E6EA]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask technical question (Eng/Urdu)..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 min-h-[44px] bg-[#F5F6F3] border border-[#E2E6EA] focus:border-[#1677FF] focus:bg-white rounded-xl px-3.5 py-2 text-base sm:text-xs text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="w-11 h-11 rounded-xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 text-white transition-all shrink-0 cursor-pointer shadow-sm flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between mt-2 text-[10px] text-[#6B747C] px-1 font-medium">
              <span>Engineering Enterprises AI</span>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[28px] text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1 font-bold"
              >
                <span>WhatsApp Human Tech</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
