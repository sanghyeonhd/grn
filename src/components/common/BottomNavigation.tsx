
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { openCamera } from './CameraScanner';
import { useToast } from "@/components/ui/use-toast";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleScanClick = async () => {
    try {
      await openCamera();
    } catch (error) {
      toast({
        description: "카메라를 실행할 수 없습니다. 카메라 권한을 확인해주세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#FDFBF4] border-t">
      <div className="flex justify-around items-center h-[60px]">
        <button 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center gap-1"
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
          className="flex flex-col items-center justify-center gap-1"
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
          className="flex flex-col items-center justify-center gap-1"
        >
          <img 
            src="/lovable-uploads/112f148b-91f0-4624-bafd-8f3104bdaf7f.png" 
            alt="스캔"
            className="w-5 h-5"
          />
          <span className={`text-xs ${isActive('/granshop') ? 'font-bold text-black' : 'text-gray-400'}`}>스캔</span>
        </button>
        
        <button 
          onClick={() => navigate('/wishlist')}
          className="flex flex-col items-center justify-center gap-1"
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
          className="flex flex-col items-center justify-center gap-1"
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
  );
};

export default BottomNavigation;
