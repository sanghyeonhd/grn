
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { startScan, stopScan } from '@/components/common/CameraScanner';
import { useToast } from "@/components/ui/use-toast";

interface Stamp {
  location: string;
  date: string;
  image: string;
}

interface PassportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STAMP_LOCATIONS = [
  { name: '광화문', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '도산', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '남산', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '서교', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '마포', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '서촌', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '소격', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  { name: '북촌', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
];

const PassportModal = ({ isOpen, onClose }: PassportModalProps) => {
  const { toast } = useToast();
  const [stamps, setStamps] = useState<Stamp[]>([
    { location: '마포', date: '2023.12.07', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
    { location: '서촌', date: '2023.12.07', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
    { location: '소격', date: '2023.08.11', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
    { location: '북촌', date: '2024.01.01', image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png' },
  ]);
  const [showCouponDialog, setShowCouponDialog] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showStampSuccess, setShowStampSuccess] = useState(false);

  const handleScanQR = () => {
    setShowQRScanner(true);
  };

  const handleQRClick = () => {
    const newStamp = {
      location: '남산',
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\. /g, '.').replace('.', ''),
      image: '/lovable-uploads/eeeb6c16-beaa-4b49-ab3b-bf248ad9cc17.png'
    };
    setStamps(prev => [...prev, newStamp]);
    setShowQRScanner(false);
    setShowStampSuccess(true);
  };

  const handleSaveCoupon = () => {
    setShowCouponDialog(true);
  };

  const handleCloseCouponDialog = () => {
    setShowCouponDialog(false);
  };

  const handleCloseStampSuccess = () => {
    setShowStampSuccess(false);
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
              <h1 className="text-lg font-medium">그랑핸드 패스포트</h1>
            </div>

            <div>
              <h2 className="text-center text-xl font-bold mb-2">그랑핸드 패스포트</h2>
              <p className="text-center text-gray-600 text-sm">
                그랑핸드 전 매장에서 스탬프를 모아보세요!<br />
                전 지점 스탬프를 모으시면<br />
                패스포트 챌린지 달성 쿠폰을 선물해 드려요.
              </p>
            </div>

            <div className="flex justify-between items-center px-2">
              <button onClick={onClose} className="text-sm text-gray-600">
                뒤로가기
              </button>
              <span className="text-sm text-gray-600">{stamps.length} / {STAMP_LOCATIONS.length}</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {STAMP_LOCATIONS.map((location, index) => {
                const stamp = stamps.find(s => s.location === location.name);
                return (
                  <div key={index} className="text-center">
                    <div className={`aspect-square rounded-full border ${
                      stamp ? 'bg-gray-100' : 'border-dashed'
                    } flex items-center justify-center mb-1 w-[60px] h-[60px] mx-auto`}>
                      {stamp && (
                        <img src={stamp.image} alt={location.name} className="w-[26px] h-[32px]" />
                      )}
                    </div>
                    <div className="text-xs mb-1">{location.name}</div>
                    {stamp && (
                      <div className="text-[10px] text-gray-400">{stamp.date}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <button 
              onClick={handleSaveCoupon}
              className="w-full py-3 bg-[#2C2C2C] text-white rounded-none"
            >
              쿠폰 저장
            </button>

            <button 
              onClick={handleScanQR}
              className="w-full py-3 bg-[#2C2C2C] text-white rounded-none"
            >
              QR 스캔으로 스탬프 찍기
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR 스캐너 모달 */}
      <Dialog open={showQRScanner} onOpenChange={() => setShowQRScanner(false)}>
        <DialogContent className="sm:max-w-[425px] p-0 bg-black h-screen">
          <div className="relative h-full" onClick={handleQRClick}>
            <button 
              onClick={() => setShowQRScanner(false)} 
              className="absolute top-4 left-4 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-white/50 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 text-white">+</div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 스탬프 획득 성공 모달 */}
      <Dialog open={showStampSuccess} onOpenChange={handleCloseStampSuccess}>
        <DialogContent className="sm:max-w-[425px] p-6 bg-white">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-6">남산점 스탬프를 받았어요!</h2>
            </div>
            <button 
              onClick={handleCloseStampSuccess}
              className="w-full py-3 bg-[#2C2C2C] text-white"
            >
              확인
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 쿠폰 저장 완료 모달 */}
      <Dialog open={showCouponDialog} onOpenChange={handleCloseCouponDialog}>
        <DialogContent className="sm:max-w-[425px] p-6 bg-white">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">쿠폰 저장 완료!</h2>
              <p className="text-gray-600">
                그랑핸드 다이어리 교환 쿠폰을 쿠폰함에 쏙 넣어드렸어요.
              </p>
            </div>

            <button 
              onClick={handleCloseCouponDialog}
              className="w-full py-3 bg-[#2C2C2C] text-white mt-4"
            >
              확인
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PassportModal;
