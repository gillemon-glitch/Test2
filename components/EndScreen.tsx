
import React from 'react';
import { EndPage } from '../types';

interface EndScreenProps {
    page: EndPage;
    score: number;
    maxScore: number;
    onRestart: () => void;
}

const getScoreMessage = (score: number, maxScore: number): string => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) {
        return "Un vero maestro del legno! Conosci ogni segreto.";
    } else if (percentage >= 60) {
        return "Ottimo lavoro, apprendista! La tua conoscenza è solida come una quercia.";
    } else if (percentage >= 30) {
        return "Sei sulla strada giusta, ma ci sono ancora trucioli da piallare. Continua a imparare!";
    } else {
        return "Hai ancora molto da imparare, ma ogni grande albero parte da un piccolo seme. Non arrenderti!";
    }
}

const EndScreen: React.FC<EndScreenProps> = ({ page, score, maxScore, onRestart }) => {
    const scoreMessage = getScoreMessage(score, maxScore);

    return (
        <div className="bg-[#4a3c31] rounded-xl shadow-2xl overflow-hidden border-2 border-[#c99a75]/50 text-center animate-fade-in">
            <img src={page.imageUrl} alt={page.imageAlt} className="w-full h-64 object-cover" />
            <div className="p-6 md:p-8">
                <h2 className="text-4xl font-bold text-[#f3e9dc] mb-4">{page.title}</h2>
                <p className="text-lg text-[#dcd0c2] leading-relaxed mb-6">{page.text}</p>
                <div className="bg-[#3a2e25]/50 rounded-lg p-6">
                    <p className="text-2xl font-bold text-yellow-300">Punteggio Finale: {score} / {maxScore}</p>
                    <p className="text-xl text-yellow-100 mt-2 italic">"{scoreMessage}"</p>
                </div>
                <button
                    onClick={onRestart}
                    className="mt-8 w-full max-w-sm mx-auto p-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 bg-green-700 hover:bg-green-600 text-white"
                >
                    {page.choice.text}
                </button>
            </div>
        </div>
    );
};

export default EndScreen;
