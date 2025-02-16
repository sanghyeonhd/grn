
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const CoffeeStamp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const totalStamps = 20;
  const currentStamps = 2;
  const [showCouponDialog, setShowCouponDialog] = useState(false);

  const handleGetCoupon = () => {
    if (currentStamps >= 5) {
      toast({
        title: "쿠폰 발급 완료",
        description: "음료 무료 쿠폰이 발급되었습니다.",
      });
    }
    setShowCouponDialog(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button onClick={() => navigate('/my-qr')} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">콤포타블 스탬프</h1>
      </header>

      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-center text-xl font-bold mb-2">콤포타블 스탬프</h2>
          <p className="text-center text-gray-600 text-sm">
            콤포타블 커피에서 스탬프를 모아보세요!<br />
            5/10/15/20개를 모으면 쿠폰으로 사용할 수 있어요.
          </p>
        </div>
        
        <div className="flex justify-between items-center px-2">
          <button onClick={() => navigate('/my-qr')} className="text-sm text-gray-600">
            뒤로가기
          </button>
          <span className="text-sm text-gray-600">{currentStamps} / {totalStamps}</span>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {Array(totalStamps).fill(null).map((_, index) => {
            const isFree = (index + 1) % 5 === 0;
            const isStamped = index < currentStamps;
            
            return (
              <div 
                key={index}
                className={`relative aspect-square rounded-full border 
                  ${isStamped ? 'border-gray-400' : 'border-dashed border-gray-300'}
                  ${isFree ? 'bg-white' : ''} flex items-center justify-center`}
              >
                {isStamped && (
                  <div className="text-[8px] text-center">
                    <div>Komfortabel</div>
                    <div>COFFEE</div>
                    <div className="text-[6px] mt-1 text-gray-400">2025.01.01</div>
                  </div>
                )}
                {isFree && !isStamped && (
                  <span className="text-sm text-gray-400">FREE</span>
                )}
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleGetCoupon}
          className="w-full py-3 bg-gray-900 text-white rounded-lg mt-4"
        >
          쿠폰받기
        </button>

        <Dialog open={showCouponDialog} onOpenChange={setShowCouponDialog}>
          <DialogContent>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-lg font-medium">
                {currentStamps >= 5 ? "음료 무료 쿠폰 1개" : "아직 쿠폰을 다 모으지 못했습니다"}
              </h3>
              <button
                onClick={() => setShowCouponDialog(false)}
                className="w-full py-2 bg-gray-900 text-white rounded-lg"
              >
                확인
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <h3 className="font-medium mb-2">스탬프 적립 안내</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 5/10/15/20개 적립 시 쿠폰으로 교환 가능</li>
            <li>• 스탬프는 음료 구매 시 1개씩 적립됩니다</li>
            <li>• 유효기간: 2025.12.31까지</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStamp;
