
import React from "react";
import MainBanner from "@/components/home/MainBanner";
import Navigation from "@/components/home/Navigation";
import BrandShop from "@/components/home/BrandShop";
import JournalList from "@/components/home/JournalList";
import BottomNavigation from '@/components/common/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF4] pb-[60px]">
      <MainBanner />
      <Navigation />
      <BrandShop />
      <JournalList />
      <BottomNavigation />
    </div>
  );
};

export default Index;
