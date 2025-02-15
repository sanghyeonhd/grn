
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share } from 'lucide-react';

const EventDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
          <h1 className="text-lg font-medium">EVNET</h1>
        </div>
        <button className="p-2">
          <Share className="w-5 h-5" />
        </button>
      </header>

      <div className="space-y-6 p-4">
        <div className="space-y-3">
          <img 
            src="/lovable-uploads/183e831a-0ce5-4fe8-a07d-3a1388afd6c3.png"
            alt="2024 Calendar Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">2024 Calender | 10월 뉴스레터에서 신청하세요</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>
        </div>

        <div className="space-y-3">
          <img 
            src="/lovable-uploads/89f6fe96-ab03-417c-9ef2-17932ea6fa25.png"
            alt="Online Store Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">그랜핸드 온라인 스토어 혜택 안내</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>
        </div>

        <div className="space-y-3">
          <img 
            src="/lovable-uploads/183e831a-0ce5-4fe8-a07d-3a1388afd6c3.png"
            alt="Another Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">2024 Calender | 10월 뉴스레터에서 신청하세요</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
