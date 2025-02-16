
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { openCamera, startScan, stopScan } from './CameraScanner';
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [showScanOptions, setShowScanOptions] = useState(false);

  const isActive = (path: string) => {
    if (path === '/granshop' && location.pathname.startsWith('/granshop')) {
      return false;
    }
    return location.pathname === path;
  };

  const handleScanClick = () => {
    setShowScanOptions(true);
  };

  const handleCameraOpen = async () => {
    setShowScanOptions(false);
    try {
      await openCamera();
    } catch (error) {
      toast({
        description: "카메라를 실행할 수 없습니다. 카메라 권한을 확인해주세요.",
        variant: "destructive",
      });
    }
  };

  const handleQRScan = async () => {
    setShowScanOptions(false);
    try {
      const result = await startScan();
      if (result) {
        toast({
          description: "QR 코드가 성공적으로 스캔되었습니다.",
        });
        // 여기서 스캔된 QR 코드 데이터를 처리할 수 있습니다
        console.log('스캔된 QR 코드:', result);
      }
    } catch (error) {
      toast({
        description: "QR 스캔을 실행할 수 없습니다. 카메라 권한을 확인해주세요.",
        variant: "destructive",
      });
    } finally {
      await stopScan();
    }
  };

  return (
    <>
      <Dialog open={showScanOptions} onOpenChange={setShowScanOptions}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">
            <button
              onClick={handleCameraOpen}
              className="flex items-center justify-center gap-2 p-4 border rounded-lg"
            >
              <span>카메라</span>
            </button>
            <button
              onClick={handleQRScan}
              className="flex items-center justify-center gap-2 p-4 border rounded-lg"
            >
              <span>QR 스캔</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#FDFBF4] border-t">
        <div className="flex justify-around items-center h-[60px] px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <img 
              src="/lovable-uploads/e178991f-6cc6-4587-9caa-4c0cd4eeeca6.png" 
              alt="홈"
              className="w-5 h-5"
            />
            <span className={`text-xs ${isActive('/') ? 'font-bold text-black' : 'text-gray-400'}`}>홈</span>
          </button>
          
          <button 
            onClick={() => navigate('/guide')}
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <img 
              src="/lovable-uploads/f45e1a71-c707-4c33-a554-758b0cd6d941.png" 
              alt="향 가이드"
              className="w-5 h-5"
            />
            <span className={`text-xs ${isActive('/guide') ? 'font-bold text-black' : 'text-gray-400'}`}>향 가이드</span>
          </button>
          
          <button 
            onClick={handleScanClick}
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <img 
              src="/lovable-uploads/112f148b-91f0-4624-bafd-8f3104bdaf7f.png" 
              alt="스캔"
              className="w-5 h-5"
            />
            <span className="text-xs text-gray-400">스캔</span>
          </button>
          
          <button 
            onClick={() => navigate('/wishlist')}
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <img 
              src="/lovable-uploads/67b9ce1b-3980-4a7d-b4e3-ab972160348b.png" 
              alt="관심상품"
              className="w-5 h-5"
            />
            <span className={`text-xs ${isActive('/wishlist') ? 'font-bold text-black' : 'text-gray-400'}`}>관심상품</span>
          </button>
          
          <button 
            onClick={() => navigate('/mypage')}
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <img 
              src="/lovable-uploads/cbf25e6c-3fbf-4916-b528-9ef04eaa17a0.png" 
              alt="MY"
              className="w-5 h-5"
            />
            <span className={`text-xs ${isActive('/mypage') ? 'font-bold text-black' : 'text-gray-400'}`}>MY</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
