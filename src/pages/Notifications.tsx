import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Cog } from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">알림</h1>
        <div className="flex-1" />
        <button onClick={() => navigate('/settings')}>
          <Cog className="w-6 h-6" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="text-center text-gray-500 mt-8">
          새로운 알림이 없습니다.
        </div>
      </div>
    </div>
  );
};

export default Notifications;
