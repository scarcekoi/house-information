import React, { useState, useEffect } from 'react';
import './App.css';

// Remove LeaderboardEntry if not used
// interface LeaderboardEntry {
//   name: string;
//   score: number;
// }

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

  // Update counters when the page loads
  useEffect(() => {
    updateCounters(counters);
    updateLeaderboard(counters);
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [counters]);

  const updateCounters = (counters: Counters) => {
    setCounters(counters); // Set the counters state to reflect changes
  };

  // Function to update leaderboard with points difference
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

  return (
    <div className="App">
      <div className="title">House Information</div>

      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

      {/* Baldwin Counter Widget */}
      <div className="widget counter-widget" id="baldwin-widget">
        <div className="counter-label">Baldwin</div>
        <div className="counter baldwin">
          <div className="digit" id="baldwin-0">{Math.floor(counters.Baldwin / 1000)}</div>
          <div className="digit" id="baldwin-1">{Math.floor((counters.Baldwin % 1000) / 100)}</div>
          <div className="digit" id="baldwin-2">{Math.floor((counters.Baldwin % 100) / 10)}</div>
          <div className="digit" id="baldwin-3">{counters.Baldwin % 10}</div>
        </div>
      </div>

      {/* Sotomayor Counter Widget */}
      <div className="widget counter-widget" id="sotomayor-widget">
        <div className="counter-label">Sotomayor</div>
        <div className="counter sotomayor">
          <div className="digit" id="sotomayor-0">{Math.floor(counters.Sotomayor / 1000)}</div>
          <div className="digit" id="sotomayor-1">{Math.floor((counters.Sotomayor % 1000) / 100)}</div>
          <div className="digit" id="sotomayor-2">{Math.floor((counters.Sotomayor % 100) / 10)}</div>
          <div className="digit" id="sotomayor-3">{counters.Sotomayor % 10}</div>
        </div>
      </div>

      {/* Mandela Counter Widget */}
      <div className="widget counter-widget" id="mandela-widget">
        <div className="counter-label">Mandela</div>
        <div className="counter mandela">
          <div className="digit" id="mandela-0">{Math.floor(counters.Mandela / 1000)}</div>
          <div className="digit" id="mandela-1">{Math.floor((counters.Mandela % 1000) / 100)}</div>
          <div className="digit" id="mandela-2">{Math.floor((counters.Mandela % 100) / 10)}</div>
          <div className="digit" id="mandela-3">{counters.Mandela % 10}</div>
        </div>
      </div>

      {/* Truth Counter Widget */}
      <div className="widget counter-widget" id="truth-widget">
        <div className="counter-label">Truth</div>
        <div className="counter truth">
          <div className="digit" id="truth-0">{Math.floor(counters.Truth / 1000)}</div>
          <div className="digit" id="truth-1">{Math.floor((counters.Truth % 1000) / 100)}</div>
          <div className="digit" id="truth-2">{Math.floor((counters.Truth % 100) / 10)}</div>
          <div className="digit" id="truth-3">{counters.Truth % 10}</div>
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