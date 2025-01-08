import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import TotalHousePoints from '../charts/totalhousepoints';
import Footer from '../Footer';

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
    const updateCountdown = () => {
      const targetDate = new Date('2024-12-20T14:41:00');
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

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getDigits = (num: number) => {
    return num.toString().padStart(4, '0').split('').map(Number);
  };

  const houses = ['Baldwin', 'Sotomayor', 'Mandela', 'Truth'] as const;
  const sortedHouses = [...houses].sort((a, b) => counters[b] - counters[a]);

  return (
    <div className="App">
      <Link to="/login" className="login-btn">Teacher/Prefect Login</Link>
      <h1 className="title">House Information</h1>
      <div className="widget-container">
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          {sortedHouses.map((house, index) => (
            <div key={house} className={`place ${house.toLowerCase()}-box`}>
              <span className="place-digit">{index + 1}st</span>
              {getDigits(counters[house]).map((digit, i) => (
                <span key={i} className={`digit ${house.toLowerCase()}-background`}>{digit}</span>
              ))}
            </div>
          ))}
        </div>
        {houses.map(house => (
          <div key={house} className={`counter-widget ${house.toLowerCase()}-box`}>
            <h2 className="counter-label">{house}</h2>
            <div className="counter">
              {getDigits(counters[house]).map((digit, index) => (
                <span key={index} className={`digit ${house.toLowerCase()}-background`}>{digit}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="countdown">
        <p>{countdownText}</p>
      </div>
      <TotalHousePoints counters={counters} />
      <Footer />
    </div>
  );
}

export default App;