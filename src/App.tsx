import { useEffect } from 'react';
import './App.css';

function App() {
  // Explicitly define the type for the counters to avoid inference issues
  const counters: { [key: string]: number } = {
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  };

  useEffect(() => {
    updateCounters(counters);
    updateLeaderboard(counters);
  }, [counters]);

  // Function to update the counters (digits)
  function updateCounters(counters: { [key: string]: number }) {
    document.getElementById("baldwin-0")!.innerText = Math.floor(counters.Baldwin / 1000).toString();
    document.getElementById("baldwin-1")!.innerText = Math.floor((counters.Baldwin % 1000) / 100).toString();
    document.getElementById("baldwin-2")!.innerText = Math.floor((counters.Baldwin % 100) / 10).toString();
    document.getElementById("baldwin-3")!.innerText = (counters.Baldwin % 10).toString();

    document.getElementById("sotomayor-0")!.innerText = Math.floor(counters.Sotomayor / 1000).toString();
    document.getElementById("sotomayor-1")!.innerText = Math.floor((counters.Sotomayor % 1000) / 100).toString();
    document.getElementById("sotomayor-2")!.innerText = Math.floor((counters.Sotomayor % 100) / 10).toString();
    document.getElementById("sotomayor-3")!.innerText = (counters.Sotomayor % 10).toString();

    document.getElementById("mandela-0")!.innerText = Math.floor(counters.Mandela / 1000).toString();
    document.getElementById("mandela-1")!.innerText = Math.floor((counters.Mandela % 1000) / 100).toString();
    document.getElementById("mandela-2")!.innerText = Math.floor((counters.Mandela % 100) / 10).toString();
    document.getElementById("mandela-3")!.innerText = (counters.Mandela % 10).toString();

    document.getElementById("truth-0")!.innerText = Math.floor(counters.Truth / 1000).toString();
    document.getElementById("truth-1")!.innerText = Math.floor((counters.Truth % 1000) / 100).toString();
    document.getElementById("truth-2")!.innerText = Math.floor((counters.Truth % 100) / 10).toString();
    document.getElementById("truth-3")!.innerText = (counters.Truth % 10).toString();
  }

  // Function to update leaderboard (including the difference in scores)
  function updateLeaderboard(counters: { [key: string]: number }) {
    // Explicitly type houseScores as an array of objects with name (string) and score (number)
    const houseScores: { name: string; score: number }[] = [
      { name: 'Baldwin', score: counters.Baldwin },
      { name: 'Sotomayor', score: counters.Sotomayor },
      { name: 'Mandela', score: counters.Mandela },
      { name: 'Truth', score: counters.Truth }
    ];

    // Sort the houseScores array by score in descending order (explicit typing as numbers)
    houseScores.sort((a, b) => b.score - a.score);

    // Explicitly ensure diff values are numbers
    const diff1 = Number(houseScores[0].score) - Number(houseScores[1].score);
    const diff2 = Number(houseScores[1].score) - Number(houseScores[2].score);
    const diff3 = Number(houseScores[2].score) - Number(houseScores[3].score);

    // Check that diff values are numbers
    if (isNaN(diff1) || isNaN(diff2) || isNaN(diff3)) {
      console.error("Invalid difference values:", diff1, diff2, diff3);
    }

    // Updating leaderboard with differences
    document.getElementById("first-place")!.innerText = `1st Place: ${houseScores[0].name} (+${diff1})`;
    document.getElementById("second-place")!.innerText = `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`;
    document.getElementById("third-place")!.innerText = `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`;
    document.getElementById("fourth-place")!.innerText = `4th Place: ${houseScores[3].name} (-${diff3})`;
  }

  // Countdown timer to track remaining time
  const targetDate = new Date('2024-12-20T14:41:00');
  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference > 0) {
      document.getElementById("countdown-timer")!.innerText =
        `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes ${secondsRemaining} Seconds until next house village meeting`;
    } else {
      document.getElementById("countdown-timer")!.innerText = "Village meeting has already occurred!";
    }
  }

  useEffect(() => {
    setInterval(updateCountdown, 1000); // Update every second
  }, []);

  return (
    <div className="app">
      <div className="title">House Information</div>

      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

      {/* Counter Widgets for each house */}
      <div className="widget counter-widget" id="baldwin-widget">
        <div className="counter-label">Baldwin</div>
        <div className="counter baldwin">
          <div className="digit" id="baldwin-0">0</div>
          <div className="digit" id="baldwin-1">0</div>
          <div className="digit" id="baldwin-2">0</div>
          <div className="digit" id="baldwin-3">0</div>
        </div>
      </div>
      {/* Repeat for other houses... */}
      
      {/* Countdown Widget */}
      <div id="countdown-widget" className="countdown">
        <span id="countdown-timer"></span>
      </div>
    </div>
  );
}

export default App;