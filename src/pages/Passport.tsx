
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import { startScan, stopScan } from '@/components/common/CameraScanner';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface Stamp {
  location: string;
  date: string;
}

const STAMP_LOCATIONS = [
  '광화문', '도산', '남산', '서교',
  '마포', '서촌', '소격', '북촌'
];

const Passport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stamps, setStamps] = useState<Stamp[]>([
    { location: '광화문', date: '2023.11.06' },
    { location: '도산', date: '2023.11.06' },
    { location: '남산', date: '2023.11.06' },
    { location: '서교', date: '2023.11.06' },
    { location: '마포', date: '2023.12.07' },
    { location: '서촌', date: '2023.12.07' },
    { location: '소격', date: '2023.08.11' },
    { location: '북촌', date: '2024.01.01' },
  ]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

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
          }).replace(/\. /g, '.').replace('.', '')
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

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)} className="mr-2">
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
          <button onClick={() => navigate(-1)} className="text-sm text-gray-600">
            뒤로가기
          </button>
          <span className="text-sm text-gray-600">{stamps.length} / {STAMP_LOCATIONS.length}</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {STAMP_LOCATIONS.map((location, index) => {
            const stamp = stamps.find(s => s.location === location);
            return (
              <div key={index} className="text-center">
                <div className={`aspect-square rounded-full border ${
                  stamp ? 'bg-gray-100' : 'border-dashed'
                } flex items-center justify-center mb-2`}>
                  {stamp && (
                    <div className="text-[8px] text-center">
                      <div>GRANHAND</div>
                      <div className="text-[6px] mt-1 text-gray-400">{stamp.date}</div>
                    </div>
                  )}
                </div>
                <div className="text-xs">{location}</div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleScanQR}
          className="w-full py-3 bg-gray-900 text-white rounded-lg mt-4"
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
                <h3 className="text-lg font-medium">쿠폰 저장 완료!</h3>
                <p className="text-sm text-gray-600">
                  그랑핸드 다이어리 교환 쿠폰을 쿠폰함에 꼭 넣어드렸어요.
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
      </div>
    </div>
  );
};

export default Passport;
