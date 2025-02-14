
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

const NotificationSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-lg">알림 설정</h1>
        <button onClick={() => navigate(-1)}>
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">서비스 알림</h2>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
          <p className="text-[10px] text-gray-600">기기의 '설정 &gt; 그랑핸드 &gt; 알림'에서 설정</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">혜택 정보 알림</h2>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
          <p className="text-[10px] text-gray-600">그랜핸드 회원을 위한 할인소식, 쿠폰 등 혜택 정보를 알려드립니다.<br/>영리성 목적 외의 정보성 내용은 설정 여부와 무관하게 발송됩니다.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">앱 푸시</span>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">SMS</span>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
