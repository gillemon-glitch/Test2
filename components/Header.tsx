
import React from 'react';

interface HeaderProps {
  score: number;
  onRestart: () => void;
}

const Header: React.FC<HeaderProps> = ({ score, onRestart }) => {
  return (
    <header className="bg-[#3a2e25] rounded-xl shadow-lg p-4 flex justify-between items-center border-2 border-[#c99a75]/50">
      <h1 className="text-2xl md:text-3xl font-bold text-[#f3e9dc]">
        Il Mistero del Legno Perduto
      </h1>
      <div className="flex items-center space-x-4">
        <div className="text-lg font-bold bg-[#c99a75] text-[#3a2e25] px-4 py-2 rounded-lg">
          Punteggio: {score}
        </div>
        <button 
          onClick={onRestart}
          className="bg-[#9c4a2a] hover:bg-[#b85731] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Ricomincia
        </button>
      </div>
    </header>
  );
};

export default Header;
