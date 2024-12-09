import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [counters, setCounters] = useState({
    Baldwin: 0,
    Sotomayor: 0,
    Mandela: 0,
    Truth: 0
  });

  const updateCounters = (counters: { [key: string]: number }) => {
    const getElement = (id: string): HTMLElement | null => document.getElementById(id);

    // Ensure the counters are numbers (parse to avoid any potential string issues)
    getElement("baldwin-0")!.innerText = Math.floor(Number(counters.Baldwin) / 1000).toString();
    getElement("baldwin-1")!.innerText = Math.floor((Number(counters.Baldwin) % 1000) / 100).toString();
    getElement("baldwin-2")!.innerText = Math.floor((Number(counters.Baldwin) % 100) / 10).toString();
    getElement("baldwin-3")!.innerText = (Number(counters.Baldwin) % 10).toString();

    getElement("sotomayor-0")!.innerText = Math.floor(Number(counters.Sotomayor) / 1000).toString();
    getElement("sotomayor-1")!.innerText = Math.floor((Number(counters.Sotomayor) % 1000) / 100).toString();
    getElement("sotomayor-2")!.innerText = Math.floor((Number(counters.Sotomayor) % 100) / 10).toString();
    getElement("sotomayor-3")!.innerText = (Number(counters.Sotomayor) % 10).toString();

    getElement("mandela-0")!.innerText = Math.floor(Number(counters.Mandela) / 1000).toString();
    getElement("mandela-1")!.innerText = Math.floor((Number(counters.Mandela) % 1000) / 100).toString();
    getElement("mandela-2")!.innerText = Math.floor((Number(counters.Mandela) % 100) / 10).toString();
    getElement("mandela-3")!.innerText = (Number(counters.Mandela) % 10).toString();

    getElement("truth-0")!.innerText = Math.floor(Number(counters.Truth) / 1000).toString();
    getElement("truth-1")!.innerText = Math.floor((Number(counters.Truth) % 1000) / 100).toString();
    getElement("truth-2")!.innerText = Math.floor((Number(counters.Truth) % 100) / 10).toString();
    getElement("truth-3")!.innerText = (Number(counters.Truth) % 10).toString();
  };

  const updateLeaderboard = (counters: { [key: string]: number }) => {
    // Make sure counters are numbers
    const houseScores: { name: string; score: number }[] = [
      { name: 'Baldwin', score: Number(counters.Baldwin) },
      { name: 'Sotomayor', score: Number(counters.Sotomayor) },
      { name: 'Mandela', score: Number(counters.Mandela) },
      { name: 'Truth', score: Number(counters.Truth) }
    ];

    // Sort the houseScores array by score in descending order
    houseScores.sort((a, b) => b.score - a.score);

    const diff1 = houseScores[0].score - houseScores[1].score;
    const diff2 = houseScores[1].score - houseScores[2].score;
    const diff3 = houseScores[2].score - houseScores[3].score;

    // Ensure the diff values are numbers before using them
    if (isNaN(diff1) || isNaN(diff2) || isNaN(diff3)) {
      console.error("Invalid difference values:", diff1, diff2, diff3);
    }

    document.getElementById("first-place")!.innerText = `1st Place: ${houseScores[0].name} (+${diff1})`;
    document.getElementById("second-place")!.innerText = `2nd Place: ${houseScores[1].name} (+${diff2} | -${diff1})`;
    document.getElementById("third-place")!.innerText = `3rd Place: ${houseScores[2].name} (+${diff3} | -${diff2})`;
    document.getElementById("fourth-place")!.innerText = `4th Place: ${houseScores[3].name} (-${diff3})`;
  };

  useEffect(() => {
    // Example of how counters might be updated in a real app
    setCounters({
      Baldwin: 2345,
      Sotomayor: 1789,
      Mandela: 1923,
      Truth: 2078
    });
  }, []);

  useEffect(() => {
    updateCounters(counters);
    updateLeaderboard(counters);
  }, [counters]);

  return (
    <div>
      <h1>Leaderboard</h1>
      <div id="first-place">1st Place: Loading...</div>
      <div id="second-place">2nd Place: Loading...</div>
      <div id="third-place">3rd Place: Loading...</div>
      <div id="fourth-place">4th Place: Loading...</div>

      <h2>Score Counters</h2>
      <div id="baldwin-0">0</div>
      <div id="baldwin-1">0</div>
      <div id="baldwin-2">0</div>
      <div id="baldwin-3">0</div>

      <div id="sotomayor-0">0</div>
      <div id="sotomayor-1">0</div>
      <div id="sotomayor-2">0</div>
      <div id="sotomayor-3">0</div>

      <div id="mandela-0">0</div>
      <div id="mandela-1">0</div>
      <div id="mandela-2">0</div>
      <div id="mandela-3">0</div>

      <div id="truth-0">0</div>
      <div id="truth-1">0</div>
      <div id="truth-2">0</div>
      <div id="truth-3">0</div>
    </div>
  );
};

export default App;