
import React from 'react';
import { Choice, QuestType } from '../types';

interface ChoiceButtonProps {
  choice: Choice;
  onClick: (choice: Choice) => void;
  className?: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onClick, className }) => {
  let buttonClass = 'w-full text-left p-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1';

  if (className) {
    buttonClass += ` ${className}`;
  } else if (choice.questType) {
    if (choice.questType === QuestType.Main) {
      buttonClass += ' bg-[#9c4a2a] text-white hover:bg-[#b85731] border-2 border-yellow-300';
    } else {
      buttonClass += ' bg-gray-600 text-gray-200 hover:bg-gray-500 border-2 border-gray-400';
    }
  } else {
    buttonClass += ' bg-yellow-700 hover:bg-yellow-600 text-white';
  }


  return (
    <button onClick={() => onClick(choice)} className={buttonClass}>
      {choice.text}
    </button>
  );
};

export default ChoiceButton;
