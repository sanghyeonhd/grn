
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">설정</h1>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          <button className="w-full py-3 text-left border-b">푸시 알림 설정</button>
          <button className="w-full py-3 text-left border-b">앱 버전</button>
          <button className="w-full py-3 text-left border-b">로그아웃</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
