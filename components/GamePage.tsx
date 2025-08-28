
import React from 'react';
import { GamePage as GamePageType, GameState, Choice, PageType } from '../types';
import ChoiceButton from './ChoiceButton';

interface GamePageProps {
  page: GamePageType;
  gameState: GameState;
  onChoice: (choice: Choice) => void;
}

const GamePage: React.FC<GamePageProps> = ({ page, gameState, onChoice }) => {

  const renderChoices = () => {
    switch (page.type) {
      case PageType.Intermezzo:
        return (
          <ChoiceButton
            choice={{ text: page.choice.text, nextPageId: page.choice.nextPageId }}
            onClick={onChoice}
            className="bg-green-700 hover:bg-green-600"
          />
        );
      case PageType.Bivio:
        return page.choices
          .filter(choice => !choice.sideQuestId || !gameState.playedSideQuests.has(choice.sideQuestId))
          .map((choice, index) => (
            <ChoiceButton
              key={index}
              choice={choice}
              onClick={onChoice}
            />
          ));
      case PageType.Quest:
        return page.choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            choice={choice}
            onClick={onChoice}
            className="bg-blue-700 hover:bg-blue-600"
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#4a3c31] rounded-xl shadow-2xl overflow-hidden border-2 border-[#c99a75]/50 animate-fade-in">
      <img src={page.imageUrl} alt={page.imageAlt} className="w-full h-64 object-cover" />
      
      <div className="p-6 md:p-8">
        {gameState.esito && (
          <div className={`mb-4 p-3 rounded-lg text-center font-bold ${gameState.esito.isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
            {gameState.esito.message}
          </div>
        )}

        <h2 className="text-3xl font-bold text-[#f3e9dc] mb-4">{page.title}</h2>
        <p className="text-lg text-[#dcd0c2] leading-relaxed whitespace-pre-line">{page.text}</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderChoices()}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
