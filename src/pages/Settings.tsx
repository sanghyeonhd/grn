
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">알림 설정</h1>
      </div>
      
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">서비스 알림</h2>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
          <p className="text-sm text-gray-600">푸시 알림은 기기의 '설정 &gt; 그랑핸드 &gt; 알림'에서 설정 가능합니다.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">혜택 알림</h2>
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600" />
          </div>
          <p className="text-sm text-gray-600">
            그랜드의 혜택 및 홍보 알림입니다.<br/>
            필수 안내는 설정과 관계없이 발송됩니다.
          </p>
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

export default Settings;
