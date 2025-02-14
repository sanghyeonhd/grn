
import React from 'react';
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="text-2xl font-bold mb-12">
        GRANHAND.
      </header>
      
      <div className="flex flex-col items-center justify-center space-y-4 mt-20">
        <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
          <span className="text-2xl">!</span>
        </div>
        
        <h2 className="text-lg font-medium text-center">
          오류가 발생했어요.
        </h2>
        
        <p className="text-center text-gray-600 text-sm">
          삭제되었거나 주소가 잘못되어 페이지를 찾을 수 없어요.
        </p>

        <Button 
          variant="outline"
          className="w-full border-gray-300 rounded-none h-12 mt-8"
        >
          홈으로
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
