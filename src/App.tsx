import { useState, useEffect } from 'react';
import './App.css';

type CounterKey = 'Baldwin' | 'Sotomayor' | 'Mandela' | 'Truth';

const initialCounters = {
  Baldwin: 1515,
  Sotomayor: 1349,
  Mandela: 1274,
  Truth: 1201
};

function App() {
  const [counters, setCounters] = useState(initialCounters);

  // Function to update the counters displayed on the page
  function updateCounters() {
    Object.keys(counters).forEach((key) => {
      const counter = counters[key as CounterKey];
      const counterElement = document.getElementById(`${key.toLowerCase()}-0`);
      if (counterElement) {
        counterElement.innerText = Math.floor(counter / 1000).toString();
      }
      // Continue for other digits (1, 2, 3)
    });
  }

  // Function to update leaderboard with points difference
  function updateLeaderboard() {
    const houseScores = [
      { name: 'Baldwin', score: counters.Baldwin },
      { name: 'Sotomayor', score: counters.Sotomayor },
      { name: 'Mandela', score: counters.Mandela },
      { name: 'Truth', score: counters.Truth }
    ];

    houseScores.sort((a, b) => b.score - a.score);

    const diff1 = houseScores[0].score - houseScores[1].score;
    const diff2 = houseScores[1].score - houseScores[2].score;
    const diff3 = houseScores[2].score - houseScores[3].score;

    document.getElementById("first-place")!.innerText = `1st Place: ${houseScores[0].name} (+${diff1})`;
    document.getElementById("second-place")!.innerText = `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`;
    document.getElementById("third-place")!.innerText = `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`;
    document.getElementById("fourth-place")!.innerText = `4th Place: ${houseScores[3].name} (-${diff3})`;
  }

  // Countdown logic
  const targetDate = new Date('2024-12-20T14:41:00');

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown-timer");
    if (timeDifference > 0 && countdownElement) {
      countdownElement.innerText = `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes ${secondsRemaining} Seconds until next house village meeting`;
    } else if (countdownElement) {
      countdownElement.innerText = "Village meeting has already occurred!";
    }
  }

  useEffect(() => {
    updateCounters();
    updateLeaderboard();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second
  }, [counters]);

  return (
    <>
      <div className="title">House Information</div>

      {/* Leaderboard */}
      <div className="widget leaderboard">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

      {/* Counter Widgets */}
      {['Baldwin', 'Sotomayor', 'Mandela', 'Truth'].map((house) => (
        <div key={house} className="widget counter-widget">
          <div className="counter-label">{house}</div>
          <div className={`counter ${house.toLowerCase()}`}>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="digit"
                id={`${house.toLowerCase()}-${i}`}
              >
                {Math.floor(counters[house as CounterKey] / Math.pow(10, 3 - i)) % 10}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Countdown */}
      <div id="countdown-widget" className="countdown">
        <span id="countdown-timer">loading...</span>
      </div>
    </>
  );
}

export default App;