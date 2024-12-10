import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure this CSS file is imported

const App: React.FC = () => {
  const [counters, setCounters] = useState({
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  });

  const getDigits = (num: number) => num.toString().padStart(4, '0').split('').map(Number);

  return (
    <div className="App">
      <div className="title">House Information</div>

      <div className="widget leaderboard">
        <div className="place">1st Place: Baldwin</div>
        <div className="place">2nd Place: Sotomayor</div>
        <div className="place">3rd Place: Mandela</div>
        <div className="place">4th Place: Truth</div>
      </div>

      {/* Baldwin Counter Widget */}
      <div className="widget counter-widget">
        <div className="counter-label">Baldwin</div>
        <div className="counter">
          {getDigits(counters.Baldwin).map((digit, index) => (
            <div className="digit" key={`baldwin-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Sotomayor Counter Widget */}
      <div className="widget counter-widget">
        <div className="counter-label">Sotomayor</div>
        <div className="counter">
          {getDigits(counters.Sotomayor).map((digit, index) => (
            <div className="digit" key={`sotomayor-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Mandela Counter Widget */}
      <div className="widget counter-widget">
        <div className="counter-label">Mandela</div>
        <div className="counter">
          {getDigits(counters.Mandela).map((digit, index) => (
            <div className="digit" key={`mandela-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Truth Counter Widget */}
      <div className="widget counter-widget">
        <div className="counter-label">Truth</div>
        <div className="counter">
          {getDigits(counters.Truth).map((digit, index) => (
            <div className="digit" key={`truth-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Countdown Widget */}
      <div className="countdown">Countdown Widget here</div>
    </div>
  );
};

export default App;
