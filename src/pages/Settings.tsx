
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
        <div className="space-y-4">
          <h2 className="font-medium">서비스 알림</h2>
          <p className="text-sm text-gray-500">푸시 설정된 기기와 설정 &gt; 그랜드 &gt; 알림에서 설정 가능합니다.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">혜택 정보 알림</h2>
          <p className="text-sm text-gray-500">
            그랜드는 혜택을 위한 홍보성-서, 우울을 통해 회원을 업데이트합니다.<br/>
            알림에 동의 하신 회원 안내성내용은 설정 여부와 무관하게 발송됩니다.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>앱 푸시</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>SMS</span>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
