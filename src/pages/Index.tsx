
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/common/BottomNavigation";
import MainBanner from "@/components/home/MainBanner";
import Navigation from "@/components/home/Navigation";
import BrandShop from "@/components/home/BrandShop";
import JournalList from "@/components/home/JournalList";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-[72px]">
      <Navigation />
      <MainBanner />
      <BrandShop />
      <JournalList />
      
      {/* 테스트용 버튼 추가 */}
      <div className="p-4">
        <button 
          onClick={() => navigate('/order-cancel-detail')}
          className="w-full py-3 bg-gray-100 rounded"
        >
          주문 취소 상세 보기 (테스트)
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
