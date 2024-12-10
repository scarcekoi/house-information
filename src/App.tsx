import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure this CSS file is imported

const App: React.FC = () => {
  const [counters, setCounters] = useState({
    Baldwin: 1515,
    Sotomayor: 1349,
    Mandela: 1274,
    Truth: 1201,
  });

<<<<<<< HEAD
  const getDigits = (num: number) => num.toString().padStart(4, '0').split('').map(Number);
=======
  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    // Set interval to update countdown
    updateCounters(counters);
    updateLeaderboard(counters);
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [counters]);

  // Update the counters state
  const updateCounters = (counters: Counters) => {
    setCounters(counters); // This will trigger re-render and update the counters displayed
  };

  // Update leaderboard with the current scores
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

  // Helper function to extract digits from a number
  const getDigits = (num: number) => {
    return num.toString().padStart(4, '0').split('').map(Number);
  };
>>>>>>> parent of 7ab6f6b (Update App.tsx)

  return (
    <div className="App">
      <div className="title">House Information</div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

=======
      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

>>>>>>> parent of 7ab6f6b (Update App.tsx)
=======
      {/* Leaderboard Widget */}
      <div className="widget leaderboard" id="leaderboard-widget">
        <div id="first-place" className="place">1st Place: </div>
        <div id="second-place" className="place">2nd Place: </div>
        <div id="third-place" className="place">3rd Place: </div>
        <div id="fourth-place" className="place">4th Place: </div>
      </div>

>>>>>>> parent of 7ab6f6b (Update App.tsx)
      {/* Baldwin Counter Widget */}
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

      {/* Sotomayor Counter Widget */}
      <div className="widget counter-widget" id="sotomayor-widget">
>>>>>>> parent of 7ab6f6b (Update App.tsx)
        <div className="counter-label">Sotomayor</div>
        <div className="counter">
          {getDigits(counters.Sotomayor).map((digit, index) => (
            <div className="digit" key={`sotomayor-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Mandela Counter Widget */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="widget counter-widget">
=======
=======
>>>>>>> parent of 7ab6f6b (Update App.tsx)
=======
>>>>>>> parent of 7ab6f6b (Update App.tsx)
      <div className="widget counter-widget" id="mandela-widget">
>>>>>>> parent of 7ab6f6b (Update App.tsx)
        <div className="counter-label">Mandela</div>
        <div className="counter">
          {getDigits(counters.Mandela).map((digit, index) => (
            <div className="digit" key={`mandela-${index}`}>{digit}</div>
          ))}
        </div>
      </div>

      {/* Truth Counter Widget */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="widget counter-widget">
=======
=======
>>>>>>> parent of 7ab6f6b (Update App.tsx)
=======
>>>>>>> parent of 7ab6f6b (Update App.tsx)
      <div className="widget counter-widget" id="truth-widget">
>>>>>>> parent of 7ab6f6b (Update App.tsx)
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
