import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

function App() {
  const [message, setMessage] = useState<string>("Hello World!");
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className={"font-bold text-3xl"}>{message}</h1>
      <Button>Hello</Button>
    </div>
  );
}

export default App;
