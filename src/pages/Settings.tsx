
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="p-4 flex items-center gap-4 border-b bg-[#FDFBF4]">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">설정</h1>
      </div>
      
      <div className="p-4">
        <button 
          onClick={() => navigate('/settings/notification')}
          className="w-full py-4 flex items-center justify-between border-b"
        >
          <span>알림 설정</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button 
          onClick={() => navigate('/settings/language')}
          className="w-full py-4 flex items-center justify-between border-b"
        >
          <span>언어 설정</span>
          <div className="flex items-center text-gray-400">
            <span className="mr-2">한국어</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </button>

        <div className="w-full py-4 flex items-center justify-between border-b">
          <span>버전 정보</span>
          <div className="flex items-center">
            <span className="mr-2 text-gray-400">1.00.0</span>
            <span className="text-xs text-gray-400">최신 버전 사용중</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
