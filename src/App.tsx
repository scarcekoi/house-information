import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counters, setCounters] = useState({
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  });

  const [timeRemaining, setTimeRemaining] = useState<string>('loading...');

  const targetDate = new Date('2024-12-20T14:41:00');

  // Function to update the displayed counter values
  const updateCounters = () => {
    const updatedCounters = { ...counters };
    return updatedCounters;
  };

  // Function to update leaderboard with points difference
  const updateLeaderboard = () => {
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

    return [
      `1st Place: ${houseScores[0].name} (+${diff1})`,
      `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`,
      `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`,
      `4th Place: ${houseScores[3].name} (-${diff3})`,
    ];
  };

  // Countdown Timer Logic
  const updateCountdown = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference > 0) {
      setTimeRemaining(
        `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes ${secondsRemaining} Seconds until next house village meeting`
      );
    } else {
      setTimeRemaining('Village meeting has already occurred!');
    }
  };

  useEffect(() => {
    updateCounters();
    updateLeaderboard();
    updateCountdown();

    const interval = setInterval(() => {
      updateCountdown();
    }, 1000); // Update countdown every second

    return () => clearInterval(interval);
  }, [counters]);

  return (
    <div className="App">
      <div className="title">House Information</div>

      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        {updateLeaderboard().map((place, index) => (
          <div key={index} className="place">
            {place}
          </div>
        ))}
      </div>

      {/* Baldwin Counter Widget */}
      <div className="widget counter-widget" id="baldwin-widget">
        <div className="counter-label">Baldwin</div>
        <div className="counter baldwin">
          {Object.keys(counters).map((house, index) => (
            <div key={index} className="digit">
              {Math.floor(counters[house] / 1000)}
            </div>
          ))}
        </div>
      </div>

      {/* Countdown Widget */}
      <div id="countdown-widget" className="countdown">
        <span id="countdown-timer">{timeRemaining}</span>
      </div>
    </div>
  );
};

export default App;