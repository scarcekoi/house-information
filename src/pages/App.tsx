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
    updateCounters(counters);
    updateLeaderboard(counters);
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
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

  return (
    <div className="App">
      <Link to="/login" className="login-btn">Teacher/Prefect Login</Link>
      <h1 className="title">House Information</h1>
      <div className="widget-container">
        <div className="widget leaderboard gradient-border">
          <div className="content">
            <div id="first-place" className="place">
              <span className="place-digit">1st</span>
              {getDigits(counters.Baldwin).map((digit, index) => (
                <div className="digit baldwin-background" key={`first-${index}`}>{digit}</div>
              ))}
            </div>
            <div id="second-place" className="place">
              <span className="place-digit">2nd</span>
              {getDigits(counters.Sotomayor).map((digit, index) => (
                <div className="digit sotomayor-background" key={`second-${index}`}>{digit}</div>
              ))}
            </div>
            <div id="third-place" className="place">
              <span className="place-digit">3rd</span>
              {getDigits(counters.Mandela).map((digit, index) => (
                <div className="digit mandela-background" key={`third-${index}`}>{digit}</div>
              ))}
            </div>
            <div id="fourth-place" className="place">
              <span className="place-digit">4th</span>
              {getDigits(counters.Truth).map((digit, index) => (
                <div className="digit truth-background" key={`fourth-${index}`}>{digit}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="baldwin-box">
          <div className="counter-label">Baldwin</div>
          <div className="counter">
            {getDigits(counters.Baldwin).map((digit, index) => (
              <div className="digit baldwin-background" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="sotomayor-box">
          <div className="counter-label">Sotomayor</div>
          <div className="counter">
            {getDigits(counters.Sotomayor).map((digit, index) => (
              <div className="digit sotomayor-background" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="mandela-box">
          <div className="counter-label">Mandela</div>
          <div className="counter">
            {getDigits(counters.Mandela).map((digit, index) => (
              <div className="digit mandela-background" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="truth-box">
          <div className="counter-label">Truth</div>
          <div className="counter">
            {getDigits(counters.Truth).map((digit, index) => (
              <div className="digit truth-background" key={index}>{digit}</div>
            ))}
          </div>
        </div>

        <div className="widget countdown">
          <div>{countdownText}</div>
        </div>
      </div>

      <TotalHousePoints counters={counters} />
      <Footer />
    </div>
  );
}

export default App;