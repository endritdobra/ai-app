import axios from 'axios';
import { useState } from 'react';
import TypingIndicator from '@/components/chat/TypingIndicator.tsx';
import ChatMessages, { type Message } from '@/components/chat/ChatMessages.tsx';
import ChatInput, { type ChatFormData } from '@/components/chat/ChatInput.tsx';

type ChatResponse = {
   message: string;
};

const Chatbot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState('');

   const [conversationId] = useState(() => crypto.randomUUID());

   const onSubmit = async ({ prompt }: ChatFormData) => {
      try {
         setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
         setIsBotTyping(true);
         setError('');

         const { data } = await axios.post<ChatResponse>('/api/chat', {
            prompt,
            conversationId: conversationId,
         });
         setMessages((prev) => [
            ...prev,
            { content: data.message, role: 'bot' },
         ]);
      } catch {
         setError('An error occurred while processing your request.');
      } finally {
         setIsBotTyping(false);
      }
   };

   return (
      <div className={'flex flex-col h-full'}>
         <div className={'flex flex-col gap-2 mb-10 overflow-y-auto'}>
            <ChatMessages messages={messages} />
            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500">{error}</p>}
         </div>
         <ChatInput onSubmit={onSubmit} />
      </div>
   );
};

export default Chatbot;
