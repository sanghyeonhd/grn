import React from 'react';
import { Button } from "@/components/ui/button";

const InternetError = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6">
      <header className="text-2xl font-bold mb-12">
        GRANHAND.
      </header>
      
      <div className="flex flex-col items-center justify-center space-y-4 mt-20">
        <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
          <span className="text-2xl">!</span>
        </div>
        
        <h2 className="text-lg font-medium text-center">
          인터넷 연결 상태를 다시 확인해주세요.
        </h2>
        
        <p className="text-center text-gray-600 text-sm">
          인터넷이 연결되어 있지 않거나, 연결 상태가 불안정합니다.<br />
          잠시 후 다시 시도해 주세요.
        </p>

        <Button 
          variant="outline"
          className="w-full border-gray-300 rounded-none h-12 mt-8"
        >
          새로고침
        </Button>
      </div>
    </div>
  );
};

export default InternetError;
