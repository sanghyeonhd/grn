
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6 flex flex-col">
      <header className="text-2xl font-bold">
        GRANHAND.
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center -mt-12">
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
          <span className="text-xl">!</span>
        </div>
        
        <h2 className="text-lg font-medium text-center mt-4">
          오류가 발생했어요.
        </h2>
        
        <p className="text-center text-gray-600 text-sm mt-2">
          삭제되었거나 주소가 잘못되어 페이지를 찾을 수 없어요.
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

export default ErrorPage;
