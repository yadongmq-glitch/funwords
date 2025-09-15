import { useState } from 'react'
import { HomePage } from '@/components/HomePage'
import { GamePage } from '@/components/GamePage'
import { ResultPage } from '@/components/ResultPage'
import type { GameResult } from '@/types'

type AppState = 'home' | 'game' | 'result'

function App() {
  const [appState, setAppState] = useState<AppState>('home')
  const [gameResult, setGameResult] = useState<GameResult | null>(null)

  const startGame = () => {
    setAppState('game')
  }

  const handleGameEnd = (result: GameResult) => {
    setGameResult(result)
    setAppState('result')
  }

  const playAgain = () => {
    setAppState('game')
  }

  const backToHome = () => {
    setAppState('home')
    setGameResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {appState === 'home' && (
        <HomePage onStartGame={startGame} />
      )}

      {appState === 'game' && (
        <GamePage onGameEnd={handleGameEnd} />
      )}

      {appState === 'result' && gameResult && (
        <ResultPage
          result={gameResult}
          onPlayAgain={playAgain}
          onBackToHome={backToHome}
        />
      )}
    </div>
  )
}

export default App
