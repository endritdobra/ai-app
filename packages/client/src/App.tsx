import './App.css';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import Chatbot from '@/components/Chatbot.tsx';

function App() {
   const [message, setMessage] = useState<string>('Hello World!');
   useEffect(() => {
      fetch('/api/hello')
         .then((response) => response.text())
         .then((data) => setMessage(data));
   }, []);

   return (
      <div className="p-4 h-screen w-2xl">
         <Chatbot />
      </div>
   );
}

export default App;
