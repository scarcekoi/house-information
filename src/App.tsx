import React, { useState, useEffect } from 'react';

// Define the interface for the counters
interface Counters {
  Baldwin: number;
  Sotomayor: number;
  Mandela: number;
  Truth: number;
}

// A helper function to split the score into its digits (thousands, hundreds, tens, and ones)
const getScoreDigits = (score: number) => {
  return [
    Math.floor(score / 1000),
    Math.floor((score % 1000) / 100),
    Math.floor((score % 100) / 10),
    score % 10
  ];
};

const App: React.FC = () => {
  const [counters, setCounters] = useState<Counters>({
    Baldwin: 0,
    Sotomayor: 0,
    Mandela: 0,
    Truth: 0
  });

  // Update the leaderboard based on the current scores
  const updateLeaderboard = (counters: Counters) => {
    const houseScores = [
      { name: 'Baldwin', score: counters.Baldwin },
      { name: 'Sotomayor', score: counters.Sotomayor },
      { name: 'Mandela', score: counters.Mandela },
      { name: 'Truth', score: counters.Truth }
    ];

    // Sort the houseScores by score in descending order
    houseScores.sort((a, b) => b.score - a.score);

    const diff1 = houseScores[0].score - houseScores[1].score;
    const diff2 = houseScores[1].score - houseScores[2].score;
    const diff3 = houseScores[2].score - houseScores[3].score;

    return {
      first: `1st Place: ${houseScores[0].name} (+${diff1})`,
      second: `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`,
      third: `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`,
      fourth: `4th Place: ${houseScores[3].name} (-${diff3})`
    };
  };

  // Example of how counters might be updated in a real app
  useEffect(() => {
    setCounters({
      Baldwin: 2345,
      Sotomayor: 1789,
      Mandela: 1923,
      Truth: 2078
    });
  }, []);

  const leaderboard = updateLeaderboard(counters);

  return (
    <div>
      <h1>Leaderboard</h1>
      <div>{leaderboard.first}</div>
      <div>{leaderboard.second}</div>
      <div>{leaderboard.third}</div>
      <div>{leaderboard.fourth}</div>

      <h2>Score Counters</h2>

      {/* Baldwin Counter */}
      <div className="counter baldwin">
        {getScoreDigits(counters.Baldwin).map((digit, index) => (
          <div key={`baldwin-${index}`} className="digit">{digit}</div>
        ))}
      </div>

      {/* Sotomayor Counter */}
      <div className="counter sotomayor">
        {getScoreDigits(counters.Sotomayor).map((digit, index) => (
          <div key={`sotomayor-${index}`} className="digit">{digit}</div>
        ))}
      </div>

      {/* Mandela Counter */}
      <div className="counter mandela">
        {getScoreDigits(counters.Mandela).map((digit, index) => (
          <div key={`mandela-${index}`} className="digit">{digit}</div>
        ))}
      </div>

      {/* Truth Counter */}
      <div className="counter truth">
        {getScoreDigits(counters.Truth).map((digit, index) => (
          <div key={`truth-${index}`} className="digit">{digit}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
