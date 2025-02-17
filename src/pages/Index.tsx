
import React from 'react';
import MainBanner from '@/components/home/MainBanner';
import BrandShop from '@/components/home/BrandShop';
import JournalList from '@/components/home/JournalList';
import Navigation from '@/components/home/Navigation';

const Index = () => {
  return (
    <div>
      <MainBanner />
      <Navigation />
      <BrandShop />
      <JournalList />
    </div>
  );
};

export default Index;
