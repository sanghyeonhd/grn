import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stores = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('그랑핸드');
  const [selectedTab, setSelectedTab] = useState('광화문');

  const brandTabs = ['그랑핸드', '콤포타블'];
  const locationTabs = {
    '그랑핸드': ['광화문', '도산', '남산', '마포', '서촌', '소격', '북촌', '서교'],
    '콤포타블': ['남산', '안국', '시청']
  };

  const storeImages = {
    '도산': [
      "/lovable-uploads/b1cc3b7b-845f-48e4-9eea-ddc074ef85a5.png",
      "/lovable-uploads/f840d0b4-5178-4b14-9014-8889798756d3.png"
    ],
    '시청': [
      "/lovable-uploads/5cc24d62-62a5-411c-b26f-3dfab302a6a5.png"
    ],
    '광화문': [
      "/lovable-uploads/31857c3b-f823-4593-a0df-3ae8d4f651ed.png"
    ],
    '남산': [
      "/lovable-uploads/e53247b2-77bb-4362-b81e-ccd80d3e52bc.png"
    ],
    '안국': [
      "/lovable-uploads/f51bcab9-344d-46cd-b33b-e892bf74ffcc.png"
    ]
  };

  const storeAddresses = {
    '도산': '강남구 압구정로164길 17 3층',
    '시청': '중구 서소문로 115 1층',
    '광화문': '강남구 언주로164길 17 3층',
    '남산': '용산구 두텁바위로60길 49 대원정사 별관 4층',
    '안국': '종로구 윤보서길 16-1 1층'
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4] pb-6">
      <div className="sticky top-0 z-10 bg-[#FDFBF4] border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-medium">STORES</h1>
        </div>
      </div>

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

      <div className="px-6 overflow-x-auto">
        <div className="flex space-x-4 whitespace-nowrap">
          {locationTabs[selectedBrand]?.map(location => (
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

      <div className="mt-6">
        <div className="px-6 mb-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">{selectedBrand} {selectedTab}</p>
            <p className="text-sm text-gray-400">{storeAddresses[selectedTab]}</p>
          </div>
        </div>
        
        <div className="px-6">
          {storeImages[selectedTab]?.map((image, index) => (
            <div key={index} className="w-full mb-4 last:mb-0">
              <img 
                src={image} 
                alt={`Store ${index + 1}`} 
                className="w-full rounded-lg"
                style={{ maxHeight: 'calc(100vh - 250px)', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
