
import React, { useState, useCallback } from 'react';
import { GameState, Choice } from './types';
import { GAME_DATA, MAX_SCORE } from './constants';
import Header from './components/Header';
import GamePage from './components/GamePage';
import EndScreen from './components/EndScreen';

const INITIAL_STATE: GameState = {
  currentPageId: 'start',
  score: 0,
  playedSideQuests: new Set(),
  esito: undefined,
};

function App() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const handleChoice = useCallback((choice: Choice) => {
    setGameState(prevState => {
      let newScore = prevState.score;
      let newPlayedSideQuests = new Set(prevState.playedSideQuests);
      let esito;

      const currentPage = GAME_DATA[prevState.currentPageId];

      if (currentPage.type === 'QUEST') {
        if (choice.isCorrect) {
          newScore++;
          esito = { message: 'Risposta esatta! Ottimo lavoro.', isCorrect: true };
        } else {
          newScore--;
          esito = { message: 'Risposta sbagliata... ma non mollare!', isCorrect: false };
        }

        if (currentPage.questType === 'SIDE' && currentPage.sideQuestId) {
          newPlayedSideQuests.add(currentPage.sideQuestId);
        }
      }

      return {
        score: newScore,
        playedSideQuests: newPlayedSideQuests,
        currentPageId: choice.nextPageId,
        esito: esito,
      };
    });
  }, []);
  
  const restartGame = useCallback(() => {
    setGameState(INITIAL_STATE);
  }, []);

  const currentPageData = GAME_DATA[gameState.currentPageId];

  return (
    <div className="bg-[#5d4a3c] min-h-screen text-gray-100 flex flex-col items-center p-4 selection:bg-[#c99a75] selection:text-[#3a2e25]">
      <div className="w-full max-w-4xl mx-auto">
        <Header score={gameState.score} onRestart={restartGame} />
        <main className="mt-4">
          {currentPageData.type === 'END' ? (
            <EndScreen page={currentPageData} score={gameState.score} maxScore={MAX_SCORE} onRestart={restartGame} />
          ) : (
            <GamePage
              key={gameState.currentPageId}
              page={currentPageData}
              gameState={gameState}
              onChoice={handleChoice}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
