import React, { useState, useEffect } from 'react';
import './App.css';

// Define the Counters type for TypeScript
interface Counters {
  Baldwin: number;
  Sotomayor: number;
  Mandela: number;
  Truth: number;
}

const App: React.FC = () => {
  // Define the state for the counters
  const [counters, setCounters] = useState<Counters>({
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  });

  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    // Set interval to update countdown
    updateCounters(counters);
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [counters]);

  // Update the counters state
  const updateCounters = (counters: Counters) => {
    setCounters(counters); // This will trigger re-render and update the counters displayed
  };

  // Countdown logic
  const targetDate = new Date('2024-12-20T14:41:00');

  const updateCountdown = () => {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference > 0) {
      setCountdownText(
        `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes ${secondsRemaining} Seconds until next house village meeting`
      );
    } else {
      setCountdownText('Village meeting has already occurred!');
    }
  };

  // Helper function to extract digits from a number
  const getDigits = (num: number) => {
    return num.toString().padStart(4, '0').split('').map(Number);
  };

  return (
    <div className="App">
      <div className="title">House Information</div>

      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        {/* Leaderboard Positions */}
        <div id="first-place" className="place">
          <span className="place-digit">1st</span>
          {getDigits(counters.Baldwin).map((digit, index) => (
            <div className="digit baldwin" key={`first-${index}`}>
              {digit}
            </div>
          ))}
        </div>
        <div id="second-place" className="place">
          <span className="place-digit">2nd</span>
          {getDigits(counters.Sotomayor).map((digit, index) => (
            <div className="digit sotomayor" key={`second-${index}`}>
              {digit}
            </div>
          ))}
        </div>
        <div id="third-place" className="place">
          <span className="place-digit">3rd</span>
          {getDigits(counters.Mandela).map((digit, index) => (
            <div className="digit mandela" key={`third-${index}`}>
              {digit}
            </div>
          ))}
        </div>
        <div id="fourth-place" className="place">
          <span className="place-digit">4th</span>
          {getDigits(counters.Truth).map((digit, index) => (
            <div className="digit truth" key={`fourth-${index}`}>
              {digit}
            </div>
          ))}
        </div>
      </div>

      {/* Counter Widgets */}
      <div className="widget counter-widget" id="baldwin-widget">
        <div className="counter-label">Baldwin</div>
        <div className="counter baldwin">
          {getDigits(counters.Baldwin).map((digit, index) => (
            <div className="digit" key={`baldwin-${index}`}>
              {digit}
            </div>
          ))}
        </div>
      </div>
      <div className="widget counter-widget" id="sotomayor-widget">
        <div className="counter-label">Sotomayor</div>
        <div className="counter sotomayor">
          {getDigits(counters.Sotomayor).map((digit, index) => (
            <div className="digit" key={`sotomayor-${index}`}>
              {digit}
            </div>
          ))}
        </div>
      </div>
      <div className="widget counter-widget" id="mandela-widget">
        <div className="counter-label">Mandela</div>
        <div className="counter mandela">
          {getDigits(counters.Mandela).map((digit, index) => (
            <div className="digit" key={`mandela-${index}`}>
              {digit}
            </div>
          ))}
        </div>
      </div>
      <div className="widget counter-widget" id="truth-widget">
        <div className="counter-label">Truth</div>
        <div className="counter truth">
          {getDigits(counters.Truth).map((digit, index) => (
            <div className="digit" key={`truth-${index}`}>
              {digit}
            </div>
          ))}
        </div>
      </div>

      {/* Countdown Widget */}
      <div id="countdown-widget" className="countdown">
        <span id="countdown-timer">{countdownText}</span>
      </div>
    </div>
  );
};

export default App;