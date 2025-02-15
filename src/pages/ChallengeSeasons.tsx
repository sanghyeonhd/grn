import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ChallengeSeasons = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center h-12">
          <button onClick={() => navigate(-1)} className="px-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">사계의 흔적</h1>
        </div>
      </div>

      <div className="h-[calc(100vh-48px)] flex flex-col items-center justify-center px-4">
        <img
          src="/lovable-uploads/1c54ad66-eeb0-40ee-aed3-bddf3c223463.png"
          alt="Seasons"
          className="w-24 h-24 mb-4"
        />
        <h2>사계의 흔적</h2>
        <p className="text-sm text-gray-500 mt-2">출석 6개월</p>
      </div>
    </div>
  );
};

export default ChallengeSeasons;
