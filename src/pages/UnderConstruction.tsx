
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Construction } from "lucide-react";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6 flex flex-col">
      <header className="text-2xl font-bold">
        GRANHAND.
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center -mt-12">
        <div className="w-16 h-16 rounded-full bg-[#FEF7CD] flex items-center justify-center mb-6 animate-pulse">
          <Construction className="w-8 h-8 text-[#B3A98F]" />
        </div>
        
        <h2 className="text-lg font-medium text-center mt-4">
          페이지 준비중입니다.
        </h2>
        
        <p className="text-center text-gray-600 text-sm mt-2">
          더 나은 서비스 제공을 위해 페이지를 준비하고 있습니다.<br />
          조금만 기다려주세요.
        </p>
      </div>

      <Button 
        variant="outline"
        onClick={() => navigate('/')}
        className="w-full border-gray-300 rounded-none h-12 mt-auto"
      >
        홈으로
      </Button>
    </div>
  );
};

export default UnderConstruction;
