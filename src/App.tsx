import type React from "react"
import { useState, useEffect } from "react"
import "./App.css"
import "./index.css"
import TotalHousePoints from "./charts/totalhousepoints.tsx"

interface Counters {
  Baldwin: number
  Sotomayor: number
  Mandela: number
  Truth: number
}

const App: React.FC = () => {
  const [counters] = useState<Counters>({
    Baldwin: 188,
    Sotomayor: 166,
    Mandela: 151,
    Truth: 125,
  })

  const [countdownText, setCountdownText] = useState("")

  useEffect(() => {
    updateLeaderboard(counters)
    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [counters])

  const updateLeaderboard = (counters: Counters) => {
    const houseScores = [
      { name: "Baldwin", score: counters.Baldwin },
      { name: "Sotomayor", score: counters.Sotomayor },
      { name: "Mandela", score: counters.Mandela },
      { name: "Truth", score: counters.Truth },
    ]

    houseScores.sort((a, b) => b.score - a.score)

    const diff1 = houseScores[0].score - houseScores[1].score
    const diff2 = houseScores[1].score - houseScores[2].score
    const diff3 = houseScores[2].score - houseScores[3].score

    document.getElementById("first-place")!.innerText = `1st: ${houseScores[0].name} (+${diff1})`
    document.getElementById("second-place")!.innerText = `2nd: ${houseScores[1].name} (+${diff2} | -${diff1})`
    document.getElementById("third-place")!.innerText = `3rd: ${houseScores[2].name} (+${diff3} | -${diff2})`
    document.getElementById("fourth-place")!.innerText = `4th: ${houseScores[3].name} (-${diff3})`
  }

  const targetDate = new Date("2024-12-20T14:41:00")

  const updateCountdown = () => {
    const currentDate = new Date()
    const timeDifference = targetDate.getTime() - currentDate.getTime()

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000)

    if (timeDifference > 0) {
      setCountdownText(
        `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s until next village meeting`,
      )
    } else {
      setCountdownText("Village meeting has already occurred!")
    }
  }

  const getDigits = (num: number) => {
    return num.toString().padStart(4, "0").split("").map(Number)
  }

  return (
    <div className="App">
      <h1 className="title">House Information</h1>
      <div className="widget-container">
        <div className="leaderboard">
          <div id="first-place" className="place"></div>
          <div id="second-place" className="place"></div>
          <div id="third-place" className="place"></div>
          <div id="fourth-place" className="place"></div>
        </div>

        <div className="baldwin-box">
          <div className="counter-label">Baldwin</div>
          <div className="counter">
            {getDigits(counters.Baldwin).map((digit, index) => (
              <div className="digit baldwin-background" key={index}>
                {digit}
              </div>
            ))}
          </div>
        </div>

        <div className="sotomayor-box">
          <div className="counter-label">Sotomayor</div>
          <div className="counter">
            {getDigits(counters.Sotomayor).map((digit, index) => (
              <div className="digit sotomayor-background" key={index}>
                {digit}
              </div>
            ))}
          </div>
        </div>

        <div className="mandela-box">
          <div className="counter-label">Mandela</div>
          <div className="counter">
            {getDigits(counters.Mandela).map((digit, index) => (
              <div className="digit mandela-background" key={index}>
                {digit}
              </div>
            ))}
          </div>
        </div>

        <div className="truth-box">
          <div className="counter-label">Truth</div>
          <div className="counter">
            {getDigits(counters.Truth).map((digit, index) => (
              <div className="digit truth-background" key={index}>
                {digit}
              </div>
            ))}
          </div>
        </div>

        <div className="countdown">
          <div>{countdownText}</div>
        </div>

        <TotalHousePoints counters={counters} />
      </div>
    </div>
  )
}

export default App