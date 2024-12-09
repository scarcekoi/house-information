import React, { useState } from 'react';
import './App.css';

interface LeaderboardEntry {
  name: string;
  score: number;
  previousScore: number;
}

const App: React.FC = () => {
  // Initial leaderboard data with typing for each player
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([
    { name: 'Baldwin', score: 267, previousScore: 0 },
    { name: 'Truth', score: 155, previousScore: 267 },
    { name: 'Mandela', score: 134, previousScore: 155 },
    { name: 'Sotomayor', score: -134, previousScore: 0 },
  ]);

  // Update the score for a player
  const updateScore = (playerName: string, newScore: number): void => {
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

  // Calculate the score change
  const calculateScoreChange = (score: number, previousScore: number) => {
    const change = score - previousScore;
    return change >= 0 ? `(+${change})` : `(${change})`;
  };

  return (
    <div className="App">
      <div className="title">Leaderboard</div>
      <div className="leaderboard">
        {sortedLeaderboard.map((player, index) => {
          const rank = index + 1;
          return (
            <div key={index} className={`place ${player.name.toLowerCase()}`}>
              <span>{rank}{rank === 1 ? 'st' : rank === 2 ? 'nd' : rank === 3 ? 'rd' : 'th'} Place: {player.name}</span>
              <span>
                {calculateScoreChange(player.score, player.previousScore)}
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
        {/* Display each house's individual score counter */}
        <div className="counter">
          {leaderboardData.map((house, index) => (
            <div key={index} className="house-counter">
              <div className="house-name">{house.name}</div>
              <div className="digit">{house.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;