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
  const [counters, setCounters] = useState<Counters>({
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  });

  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    updateCounters(counters);
    updateLeaderboard(counters);
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [counters]);

  const updateCounters = (counters: Counters) => {
    setCounters(counters);
  };

  const updateLeaderboard = (counters: Counters) => {
    const houseScores = [
      { name: 'Baldwin', score: counters.Baldwin },
      { name: 'Sotomayor', score: counters.Sotomayor },
      { name: 'Mandela', score: counters.Mandela },
      { name: 'Truth', score: counters.Truth },
    ];

    houseScores.sort((a, b) => b.score - a.score);

    const diff1 = houseScores[0].score - houseScores[1].score;
    const diff2 = houseScores[1].score - houseScores[2].score;
    const diff3 = houseScores[2].score - houseScores[3].score;

    document.getElementById("first-place")!.innerText = `1st Place: ${houseScores[0].name} (+${diff1})`;
    document.getElementById("second-place")!.innerText = `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`;
    document.getElementById("third-place")!.innerText = `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`;
    document.getElementById("fourth-place")!.innerText = `4th Place: ${houseScores[3].name} (-${diff3})`;
  };

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

  const getDigits = (num: number) => {
    return num.toString().padStart(4, '0').split('').map(Number);
  };

  const handleLoginClick = () => {
    alert("Login clicked! Add your login functionality here.");
  };

  return (
    <div className="App">
      <button className="login-btn" onClick={handleLoginClick}>Login</button>

      <div className="title">House Information</div>

      <div className="widget-container">
        {/* Leaderboard Widget */}
        <div className="widget leaderboard border-gradient border-gradient-purple" id="leaderboard-widget">
          <div id="first-place" className="place">
            <span className="place-digit">1st</span>
            {getDigits(counters.Baldwin).map((digit, index) => (
              <div className="digit" key={`first-${index}`}>{digit}</div>
            ))}
          </div>
          <div id="second-place" className="place">
            <span className="place-digit">2nd</span>
            {getDigits(counters.Sotomayor).map((digit, index) => (
              <div className="digit" key={`second-${index}`}>{digit}</div>
            ))}
          </div>
          <div id="third-place" className="place">
            <span className="place-digit">3rd</span>
            {getDigits(counters.Mandela).map((digit, index) => (
              <div className="digit" key={`third-${index}`}>{digit}</div>
            ))}
          </div>
          <div id="fourth-place" className="place">
            <span className="place-digit">4th</span>
            {getDigits(counters.Truth).map((digit, index) => (
              <div className="digit" key={`fourth-${index}`}>{digit}</div>
            ))}
          </div>
        </div>

        {/* Counter Widgets */}
        <div className="counter-widget">
          <div className="counter-label">Baldwin House</div>
          <div className="counter">
            {getDigits(counters.Baldwin).map((digit, index) => (
              <div className="digit baldwin" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="counter-widget">
          <div className="counter-label">Sotomayor House</div>
          <div className="counter">
            {getDigits(counters.Sotomayor).map((digit, index) => (
              <div className="digit sotomayor" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="counter-widget">
          <div className="counter-label">Mandela House</div>
          <div className="counter">
            {getDigits(counters.Mandela).map((digit, index) => (
              <div className="digit mandela" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="counter-widget">
          <div className="counter-label">Truth House</div>
          <div className="counter">
            {getDigits(counters.Truth).map((digit, index) => (
              <div className="digit truth" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        {/* Countdown Widget */}
        <div className="widget countdown border-gradient border-gradient-green">
          <div className="countdown-text">{countdownText}</div>
        </div>
      </div>
    </div>
  );
};

export default App;