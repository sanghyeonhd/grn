import React from 'react';
import { Button } from "@/components/ui/button";

const AppPermission = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6">
      <header className="text-2xl font-bold mb-12">
        GRANHAND.
      </header>
      
      <div className="space-y-6">
        <h2 className="text-xl font-medium text-center">앱 접근 권한 안내</h2>
        <p className="text-center text-gray-600 text-sm">
          그랜핸드의 다양한 서비스 제공을 위해<br />
          아래와 같은 기능이 필요합니다.
        </p>

        <div className="space-y-4 mt-8">
          <h3 className="font-medium mb-4">선택적 접근 권한</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6">🔔</div>
              <div>
                <p className="font-medium">알림(선택)</p>
                <p className="text-sm text-gray-500">이벤트 및 공지, 주문 알림 시 사용</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6">📸</div>
              <div>
                <p className="font-medium">카메라(선택)</p>
                <p className="text-sm text-gray-500">QR코드 인식 및 이미지 첨부 시 사용</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6">🖼️</div>
              <div>
                <p className="font-medium">사진(선택)</p>
                <p className="text-sm text-gray-500">리뷰나 문의 및 이미지 저장 / 첨부 시 사용</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2 text-sm text-gray-500">
          <p>• 선택적 접근 권한은 해당 기능을 사용할 때만 허용이 필요합니다.</p>
          <p>• 비허용 시에도 해당 기능 외 서비스 이용이 가능합니다. 허용 설정은<br />휴대폰 설정 메뉴에서 변경하실 수 있습니다.</p>
        </div>

        <Button 
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-8"
        >
          확인
        </Button>
      </div>
    </div>
  );
};

export default AppPermission;
