import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState<string>("Hello World!");
    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, [])

    return <h1>{message}</h1>
}

export default App
