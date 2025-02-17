
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface CoffeeStampModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CoffeeStampModal = ({ isOpen, onClose }: CoffeeStampModalProps) => {
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
    <div className="relative min-h-screen">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] p-0">
          <div className="p-4 space-y-6">
            <div className="flex items-center">
              <button onClick={onClose} className="mr-2">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h1 className="text-lg font-medium">콤포타블 스탬프</h1>
            </div>

            <div>
              <h2 className="text-center text-xl font-bold mb-2">콤포타블 스탬프</h2>
              <p className="text-center text-gray-600 text-sm">
                콤포타블 커피에서 스탬프를 모아보세요!<br />
                5/10/15/20개를 모으면 쿠폰으로 사용할 수 있어요.
              </p>
            </div>

            <div className="flex justify-between items-center px-2">
              <button onClick={onClose} className="text-sm text-gray-600">
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
              className="w-full py-3 bg-[#2C2C2C] text-white rounded-none"
            >
              쿠폰받기
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 쿠폰 발급 완료 모달 */}
      <Dialog open={showCouponDialog} onOpenChange={setShowCouponDialog}>
        <DialogContent className="sm:max-w-[425px] p-6 bg-white">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {currentStamps >= 5 ? "음료 무료 쿠폰 1개" : "아직 쿠폰을 다 모으지 못했습니다"}
              </h2>
            </div>
            <button
              onClick={() => setShowCouponDialog(false)}
              className="w-full py-3 bg-[#2C2C2C] text-white"
            >
              확인
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CoffeeStampModal;
