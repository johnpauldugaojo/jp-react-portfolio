import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! 👋 I'm JP's portfolio assistant powered by Claude AI. Ask me about his skills, experience, projects, or how to get in touch!",
};

const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            data.content ||
            "Sorry, I couldn't get a response. Please try again or reach out at johnpauldugaojo@gmail.com",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please reach out directly at johnpauldugaojo@gmail.com or on LinkedIn!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className='w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden shadow-2xl'
            style={{
              height: '480px',
              background: 'rgba(15, 8, 30, 0.95)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
            }}
          >
            {/* Header */}
            <div
              className='flex items-center justify-between px-4 py-3 shrink-0'
              style={{
                background: 'rgba(35, 21, 60, 0.98)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-full flex items-center justify-center shrink-0' style={{ background: 'linear-gradient(135deg, #ff3f81, #22d3ee)' }}>
                  <Bot size={17} className='text-white' />
                </div>
                <div>
                  <p className='text-white text-sm font-semibold leading-tight'>JP's Assistant</p>
                  <p className='text-cyan-400 text-xs'>Powered by Claude AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='text-purple-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10'
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto px-4 py-4 space-y-3' style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.3) transparent' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className='max-w-[82%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed'
                    style={
                      msg.role === 'user'
                        ? {
                            background: 'linear-gradient(135deg, #ff3f81, #c026d3)',
                            color: '#fff',
                            borderRadius: '18px 18px 4px 18px',
                          }
                        : {
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(139,92,246,0.3)',
                            color: '#ede9fe',
                            borderRadius: '18px 18px 18px 4px',
                          }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className='flex justify-start'>
                  <div
                    className='px-4 py-3 rounded-2xl'
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(139,92,246,0.3)',
                      borderRadius: '18px 18px 18px 4px',
                    }}
                  >
                    <div className='flex gap-1.5 items-center'>
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className='w-2 h-2 rounded-full bg-cyan-400'
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className='px-3 py-3 shrink-0'
              style={{
                background: 'rgba(35, 21, 60, 0.98)',
                borderTop: '1px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              <div
                className='flex items-center gap-2 px-3 py-2 rounded-xl'
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(139,92,246,0.3)',
                }}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder='Ask me anything...'
                  disabled={isLoading}
                  className='flex-1 bg-transparent text-white text-sm outline-none disabled:opacity-50'
                  style={{ caretColor: '#22d3ee' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className='transition-colors disabled:cursor-not-allowed shrink-0'
                  style={{ color: input.trim() && !isLoading ? '#22d3ee' : 'rgba(139,92,246,0.4)' }}
                >
                  <Send size={16} />
                </button>
              </div>
              <p className='text-center text-purple-500 text-[10px] mt-2'>Press Enter to send</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className='w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center'
        style={{ background: 'linear-gradient(135deg, #ff3f81, #7c3aed)' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key='close'
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key='open'
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default PortfolioChatbot;
