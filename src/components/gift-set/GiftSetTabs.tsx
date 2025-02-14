
import React from 'react';

interface GiftSetTabsProps {
  selectedTab: string;
  onTabClick: (tab: string) => void;
}

const GiftSetTabs: React.FC<GiftSetTabsProps> = ({ selectedTab, onTabClick }) => {
  return (
    <div className="flex border-b border-gray-200 px-4">
      <button 
        onClick={() => onTabClick('전체')}
        className={`px-3 py-3 text-xs ${selectedTab === '전체' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
      >
        전체
      </button>
      <button 
        onClick={() => onTabClick('기프트 세트')}
        className={`px-3 py-3 text-xs ${selectedTab === '기프트 세트' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
      >
        기프트 세트
      </button>
      <button 
        onClick={() => onTabClick('퍼퓸')}
        className={`px-3 py-3 text-xs ${selectedTab === '퍼퓸' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
      >
        퍼퓸
      </button>
      <button 
        onClick={() => onTabClick('공간')}
        className={`px-3 py-3 text-xs ${selectedTab === '공간' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
      >
        공간
      </button>
      <button 
        onClick={() => onTabClick('바디')}
        className={`px-3 py-3 text-xs ${selectedTab === '바디' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
      >
        바디
      </button>
    </div>
  );
};

export default GiftSetTabs;
