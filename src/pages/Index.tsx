
import React from "react";
import MainBanner from "@/components/home/MainBanner";
import Navigation from "@/components/home/Navigation";
import BrandShop from "@/components/home/BrandShop";
import JournalList from "@/components/home/JournalList";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <MainBanner />
      <Navigation />
      <BrandShop />
      <JournalList />
    </div>
  );
};

export default Index;
