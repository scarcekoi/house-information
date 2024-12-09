import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Initial leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'Baldwin', score: 267, previousScore: 0 },
    { name: 'Truth', score: 155, previousScore: 267 },
    { name: 'Mandela', score: 134, previousScore: 155 },
    { name: 'Sotomayor', score: -134, previousScore: 0 },
  ]);

  // Update the score for a player
  const updateScore = (playerName, newScore) => {
    setLeaderboardData(prevData =>
      prevData.map(player =>
        player.name === playerName
          ? { ...player, score: newScore, previousScore: player.score }
          : player
      )
    );
  };

  // Sort leaderboard by score in descending order
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.score - a.score);

  return (
    <div className="App">
      <div className="title">Leaderboard</div>
      <div className="leaderboard">
        {sortedLeaderboard.map((player, index) => {
          const rank = index + 1;
          const scoreChange = player.score - player.previousScore;
          return (
            <div key={index} className={`place ${player.name.toLowerCase()}`}>
              <span>{rank}{rank === 1 ? 'st' : rank === 2 ? 'nd' : rank === 3 ? 'rd' : 'th'} Place: {player.name}</span>
              <span>
                {scoreChange > 0 ? `(+${scoreChange})` : `(${scoreChange})`}
              </span>
            </div>
          );
        })}
      </div>

      {/* Example buttons to update the scores */}
      <div className="score-buttons">
        <button onClick={() => updateScore('Baldwin', 300)}>Increase Baldwin's Score</button>
        <button onClick={() => updateScore('Truth', 200)}>Increase Truth's Score</button>
        <button onClick={() => updateScore('Mandela', 150)}>Increase Mandela's Score</button>
        <button onClick={() => updateScore('Sotomayor', -100)}>Increase Sotomayor's Score</button>
      </div>

      <div className="counter-widget">
        <div className="counter-label">Score Counters</div>
        <div className="counter">
          <div className="digit">2</div>
          <div className="digit">3</div>
          <div className="digit">4</div>
          <div className="digit">5</div>
          <div className="digit">1</div>
          <div className="digit">7</div>
          <div className="digit">8</div>
          <div className="digit">9</div>
          <div className="digit">1</div>
          <div className="digit">9</div>
          <div className="digit">2</div>
          <div className="digit">3</div>
          <div className="digit">2</div>
          <div className="digit">0</div>
          <div className="digit">7</div>
          <div className="digit">8</div>
        </div>
      </div>
    </div>
  );
};

export default App;