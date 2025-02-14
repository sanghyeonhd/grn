
import React from 'react';

const GiftSetBanner = () => {
  return (
    <div className="relative h-[130px] bg-[#F5F5F5]">
      <img 
        src="/public/lovable-uploads/6636d39a-ad0a-41a2-9827-05059fd77488.png" 
        alt="Banner" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-end justify-start p-4">
        <p className="text-white text-left text-xs leading-5">
          그랑핸드는 쉽게 소비되고 잊혀질 무언가가 아닌,<br />
          보이지 않는 곳에서 무수한 존재들로 모든 사람들에게<br />
          우리의 메시지/가치를 전하고 싶습니다.
        </p>
      </div>
    </div>
  );
};

export default GiftSetBanner;
