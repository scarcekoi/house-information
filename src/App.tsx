import React, { useState, useEffect } from 'react';
import './App.css';
import Lgn from './Lgn'; // Import the login component

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
  const [username, setUsername] = useState<string>(''); // To track logged-in username
  const [role, setRole] = useState<string>(''); // To track logged-in user's role
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // To check login status
  const [error, setError] = useState<string>(''); // Error message for invalid login attempts

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

    // Updating leaderboard display dynamically
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

  // Handle successful login
  const handleLogin = (username: string, role: string) => {
    setUsername(username);
    setRole(role);
    setIsLoggedIn(true);
    setError('');
  };

  // Handle error
  const handleError = (error: string) => {
    setError(error);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setRole('');
  };

  return (
    <div className="App">
      <h1 className="title">House Information</h1>

      {!isLoggedIn ? (
        // Show the login component if not logged in
        <Lgn onLogin={handleLogin} onError={handleError} />
      ) : (
        // Show the dashboard if logged in
        <div>
          <p>Welcome, {username}!</p>
          <p>You are logged in as a {role}.</p>
          <button className="login-btn" onClick={handleLogout}>Logout</button>

          {/* Leaderboard */}
          <div id="leaderboard-widget" className="widget leaderboard">
            {/* Render leaderboard positions */}
            <div id="first-place" className="place">
              <span className="place-digit">1st</span>
              {/* Display Baldwin count */}
            </div>
            {/* More leaderboard positions */}
          </div>

          {/* Other Widgets (Counters, Countdown) */}
        </div>
      )}

      {/* Display error message if login fails */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;