
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DailyMeetingSheet from './DailyMeetingSheet';

interface Challenge {
  id: number;
  name: string;
  icon: string;
  count: number;
  date?: string;
}

interface ChallengeGridProps {
  challenges: Challenge[];
}

const ChallengeGrid = ({ challenges }: ChallengeGridProps) => {
  const navigate = useNavigate();

  const handleChallengeClick = (challenge: Challenge) => {
    if (challenge.name === "하루의 모임") {
      // Show bottom sheet
      const button = document.querySelector('.sr-only') as HTMLButtonElement;
      if (button) button.click();
    } else if (challenge.name === "사계의 흔적") {
      navigate('/challenge/seasons');
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {challenges.map((challenge) => (
        <button
          key={challenge.id}
          className="flex flex-col items-center space-y-2"
          onClick={() => handleChallengeClick(challenge)}
        >
          <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gray-100 ${challenge.count > 0 ? 'bg-white' : ''}`}>
            <span className="text-2xl">{challenge.icon}</span>
          </div>
          <span className="text-xs text-center">{challenge.name}</span>
          {challenge.date && (
            <span className="text-[10px] text-gray-500">{challenge.date}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ChallengeGrid;
