import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Chatbot.css"; 

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post("http://localhost:5000/chat", { query });
        setResponse(data.response);
    } catch (error) {
        console.error("Error fetching response:", error);
        setResponse("Error fetching response from AI.");
    }
};

    return (
        <div className="chatbot-container">
            <div className="chatbot-box">
                <h2 className="chatbot-title">CDP Support Chatbot</h2>
                <form onSubmit={handleSubmit} className="chatbot-form">
                    <input type="text" className="form-control chatbot-input" placeholder="Ask a question..."
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                
                    <button className="btn btn-primary chatbot-btn">Ask</button>
                </form>
            
                <div className="chatbot-response">
                    <strong>Response:</strong>
                    <p>{response}</p>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
