
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stores = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('그랜핸드');
  const [selectedTab, setSelectedTab] = useState('도산');

  const brandTabs = ['그랜핸드', '콤포터블'];
  const locationTabs = {
    '그랜핸드': ['도산', '남산', '망포', '서초', '소옥', '북촌', '시고'],
    '콤포터블': ['시청', '연구소', '한남']
  };

  const storeImages = {
    '도산': [
      "/lovable-uploads/b1cc3b7b-845f-48e4-9eea-ddc074ef85a5.png",
      "/lovable-uploads/f840d0b4-5178-4b14-9014-8889798756d3.png"
    ],
    '시청': [
      "/lovable-uploads/8281c082-a0c5-4f00-be7b-d23871ccf7b0.png"
    ]
  };

  const storeAddresses = {
    '도산': '강남구 압구정로164길 17 3층',
    '시청': '중구 서소문로 115 1층'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <div className="flex items-center px-4 h-[44px] border-b border-[#EAEAEA]">
        <button onClick={() => navigate(-1)} className="mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-[18px] font-bold leading-[28px] text-[#1A1A1A]">STORES</h1>
      </div>

      {/* 브랜드 선택 */}
      <div className="px-6 py-4">
        <div className="flex space-x-4">
          {brandTabs.map(brand => (
            <button
              key={brand}
              onClick={() => {
                setSelectedBrand(brand);
                setSelectedTab(locationTabs[brand][0]);
              }}
              className={`text-base ${selectedBrand === brand ? 'text-black font-bold' : 'text-gray-400'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* 지역 탭 */}
      <div className="px-6 overflow-x-auto">
        <div className="flex space-x-4 whitespace-nowrap">
          {locationTabs[selectedBrand].map(location => (
            <button
              key={location}
              onClick={() => setSelectedTab(location)}
              className={`text-sm ${selectedTab === location ? 'text-black font-bold' : 'text-gray-400'}`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      {/* 매장 정보 */}
      <div className="mt-6">
        <div className="px-6">
          <p className="text-sm text-gray-600 mb-2">{selectedBrand} {selectedTab}</p>
          <p className="text-sm text-gray-800 mb-4">{storeAddresses[selectedTab]}</p>
        </div>
        
        {/* 매장 이미지 */}
        <div className="space-y-4">
          {storeImages[selectedTab]?.map((image, index) => (
            <div key={index} className="w-full aspect-[3/2]">
              <img src={image} alt={`Store ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
