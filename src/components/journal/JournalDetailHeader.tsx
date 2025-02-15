
import React from 'react';

interface JournalDetailHeaderProps {
  onBack: () => void;
  onShare: () => void;
}

const JournalDetailHeader = ({ onBack, onShare }: JournalDetailHeaderProps) => {
  return (
    <header className="z-10 flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <button 
          onClick={onBack} 
          className="text-2xl mr-4 text-white p-2 hover:opacity-75 transition-opacity"
        >
          ←
        </button>
        <h1 className="text-lg font-medium text-white">JOURNAL</h1>
      </div>
      <button className="p-2" onClick={onShare}>
        <img src="/lovable-uploads/86242de2-5c97-465b-8736-9e7f545d6a7e.png" alt="Share" className="w-5 h-5 brightness-0 invert" />
      </button>
    </header>
  );
};

export default JournalDetailHeader;
