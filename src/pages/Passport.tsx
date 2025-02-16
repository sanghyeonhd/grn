
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import { startScan, stopScan } from '@/components/common/CameraScanner';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface Stamp {
  location: string;
  date: string;
  image: string;
}

const STAMP_LOCATIONS = [
  { name: '광화문', image: '/icons/granhand-gwanghwamun.png' },
  { name: '도산', image: '/icons/granhand-dosan.png' },
  { name: '남산', image: '/icons/granhand-namsan.png' },
  { name: '서교', image: '/icons/granhand-seogyo.png' },
  { name: '마포', image: '/icons/granhand-mapo.png' },
  { name: '서촌', image: '/icons/granhand-seochon.png' },
  { name: '소격', image: '/icons/granhand-sogyeok.png' },
  { name: '북촌', image: '/icons/granhand-bukchon.png' },
];

const Passport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stamps, setStamps] = useState<Stamp[]>([
    { location: '광화문', date: '2023.11.06', image: '/icons/granhand-gwanghwamun.png' },
    { location: '도산', date: '2023.11.06', image: '/icons/granhand-dosan.png' },
    { location: '남산', date: '2023.11.06', image: '/icons/granhand-namsan.png' },
    { location: '서교', date: '2023.11.06', image: '/icons/granhand-seogyo.png' },
    { location: '마포', date: '2023.12.07', image: '/icons/granhand-mapo.png' },
    { location: '서촌', date: '2023.12.07', image: '/icons/granhand-seochon.png' },
    { location: '소격', date: '2023.08.11', image: '/icons/granhand-sogyeok.png' },
    { location: '북촌', date: '2024.01.01', image: '/icons/granhand-bukchon.png' },
  ]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showCouponDialog, setShowCouponDialog] = useState(false);

  const handleScanQR = async () => {
    try {
      const result = await startScan();
      if (result) {
        const newStamp = {
          location: '신규 방문',
          date: new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\. /g, '.').replace('.', ''),
          image: '/icons/granhand-new.png'
        };
        setStamps(prev => [...prev, newStamp]);
        setShowSuccessDialog(true);
      }
    } catch (error) {
      console.error('QR 스캔 에러:', error);
      toast({
        variant: "destructive",
        title: "QR 스캔 실패",
        description: "QR 코드를 다시 스캔해주세요."
      });
    } finally {
      await stopScan();
    }
  };

  const handleSaveCoupon = () => {
    setShowCouponDialog(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button onClick={() => navigate('/my-qr')} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">그랑핸드 패스포트</h1>
      </header>

      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-center text-xl font-bold mb-2">그랑핸드 패스포트</h2>
          <p className="text-center text-gray-600 text-sm">
            그랑핸드 전 매장에서 스탬프를 모아보세요!<br />
            전 지점 스탬프를 모으시면<br />
            패스포트 챌린지 달성 쿠폰을 선물해 드려요.
          </p>
        </div>

        <div className="flex justify-between items-center px-2">
          <button onClick={() => navigate('/my-qr')} className="text-sm text-gray-600">
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
                } flex items-center justify-center mb-2`}>
                  {stamp && (
                    <div className="text-center">
                      <img src={stamp.image} alt={stamp.location} className="w-8 h-8 mx-auto mb-1" />
                      <div className="text-[6px] text-gray-400">{stamp.date}</div>
                    </div>
                  )}
                </div>
                <div className="text-xs">{location.name}</div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleSaveCoupon}
          className="w-full py-3 bg-gray-900 text-white rounded-lg"
        >
          쿠폰 저장하기
        </button>

        <button 
          onClick={handleScanQR}
          className="w-full py-3 bg-gray-900 text-white rounded-lg"
        >
          QR 스캔으로 스탬프 찍기
        </button>

        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="relative p-6">
              <button 
                onClick={() => setShowSuccessDialog(false)}
                className="absolute right-4 top-4"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium">스탬프 적립 완료!</h3>
                <p className="text-sm text-gray-600">
                  새로운 스탬프가 적립되었습니다.
                </p>
                <button
                  onClick={() => setShowSuccessDialog(false)}
                  className="w-full py-2 bg-gray-900 text-white rounded-lg"
                >
                  확인
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showCouponDialog} onOpenChange={setShowCouponDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="relative p-6">
              <button 
                onClick={() => setShowCouponDialog(false)}
                className="absolute right-4 top-4"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium">
                  {stamps.length >= 8 ? "패스포트 챌린지 쿠폰 1개" : "아직 쿠폰을 다 모으지 못했습니다"}
                </h3>
                <button
                  onClick={() => setShowCouponDialog(false)}
                  className="w-full py-2 bg-gray-900 text-white rounded-lg"
                >
                  확인
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Passport;
