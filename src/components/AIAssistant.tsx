import React from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Shrink, Expand, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: "Hello! I'm your Chronos Ergonomic Assistant. How can I help you optimize your mobility today?" }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const ai = React.useMemo(() => new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' }), []);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are the Chronos Wheels AI Ergonomic Assistant. Your goal is to help users understand the benefits of ultra-lightweight carbon fiber wheelchairs, AI-posture monitoring, and the VR customization tool. You are empathetic, professional, and encouraging. Focus on empowering autonomy.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', content: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Connection error. Please ensure your configuration is correct." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-black rounded-sm shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center text-black">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-display font-black text-[10px] uppercase tracking-widest text-accent">Ergonomic Assistant</h3>
                  <p className="text-[8px] text-white/40 uppercase tracking-[0.2em]">Matrix v6.4 Status: Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto" : "mr-auto"
                  )}
                >
                  <div 
                    className={cn(
                      "px-4 py-3 text-xs leading-relaxed",
                      msg.role === 'user' 
                        ? "bg-accent text-black font-bold rounded-sm rounded-tr-none" 
                        : "bg-surface-dark border border-white/10 text-white rounded-sm rounded-tl-none shadow-sm"
                    )}
                  >
                    {msg.content}
                  </div>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-widest mt-1 px-1",
                    msg.role === 'user' ? "text-accent text-right" : "text-white/30"
                  )}>
                    {msg.role === 'user' ? "User ID: ALPHA" : "AI Node: CHRONOS"}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex space-x-1 p-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:-0.3s]" />
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:-0.6s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-primary border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center gap-2"
              >
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query system biometrics..."
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-xs text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-3 bg-accent text-black rounded-sm hover:brightness-110 disabled:opacity-50 transition-all font-bold flex items-center justify-center shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-sm flex items-center justify-center shadow-2xl transition-all duration-300 transform border border-white/10",
          isOpen ? "bg-accent text-black" : "bg-black text-accent hover:border-accent"
        )}
        aria-label="Toggle AI Assistant"
      >
        <Bot className={cn("transition-transform duration-500", isOpen && "rotate-[360deg]")} />
      </button>
    </div>
  );
};
