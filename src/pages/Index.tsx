
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
      <BottomNavigation />
    </div>
  );
};

export default Index;
