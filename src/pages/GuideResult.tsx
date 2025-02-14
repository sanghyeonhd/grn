
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const GuideResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const sampleResult = {
    name: "SUSIE SALMON. 수지살몬",
    description: `빙글 사운 꽃다발의 포장을 뜯어내니 빈 정도 물이 담긴 투명한 병이 놓였다. 꽃 한 다발에서 내어지는 생기가 테이블 주변으로 서서히 퍼져나간다. 냉장고에서 사과를 꺼내 한 입 베어 물고 다시금 꽃다발에 코를 가까이 댄다. 멀게 걸린 꽃다발 위로 올라오는 상큼함을 나는 노래계 실거린다.`,
    notes: {
      top: "Lemon, Black Currant, Tangerine, Cut Grass",
      middle: "Lily of the Valley, Jasmine, Rose, Freesia, Peach, Apricot, Apple",
      base: "Sandal Wood, Cedar, Amber, White Musk"
    },
    hashtags: ["#은은한 #데일리", "#화이트 머스크"],
    review: `언어 조합은 아니고 전화 '터들리 본즈'의 서정스러운 연주하며 이룰이에요. 어려 꽃과 과일의 자연 청순한 향이 메이스에 화이트 머스크가 있어 그랜핸드 향들 중 가장 실내룸과 잘 어울리는 향이에요. 은은하고 자연스러워 어떤 향과 레이어링 해도 잘 어울리기가 때문에 사계절 내네 사용하기가 좋아요. 가볍지만 차분한 성격은 의외로 남서쪽의 내적 선호도가 높은 향입니다. 여자친구 선물용으로 가장 인기가 돋보며, 직장 사용하시는 목적으로 구매하시는 분들도 제법 많답니다. 선물 시도하기 조심스럽다면 결은 향의 핸드크림으로 시작해 보세요! 수지 살몬 헨드크림을 선이하시는 분은 .. 없었답니다(긋넹)`,
    recommendedProducts: [
      {
        name: "SUSIE SALMON Muti Perfume",
        description: "수지살몬 멀티 퍼퓸 100ml",
        price: "35,000 KRW",
        image: "/public/lovable-uploads/27f9f5a7-09d9-4903-a3d9-014614aaff1e.png"
      },
      {
        name: "SUSIE SALMON Hand Cream",
        description: "수지살몬 핸드크림 160ml",
        price: "25,000 KRW",
        image: "/public/lovable-uploads/27f9f5a7-09d9-4903-a3d9-014614aaff1e.png"
      },
      {
        name: "SUSIE SALMON Hand Cream",
        description: "수지살몬 핸드크림 160ml",
        price: "25,000 KRW",
        image: "/public/lovable-uploads/27f9f5a7-09d9-4903-a3d9-014614aaff1e.png"
      }
    ]
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
        <h1 className="text-[18px] font-bold">GUIDE</h1>
      </div>

      <div className="p-6">
        <p className="text-gray-400 text-sm mb-2">Your Choice.</p>
        <h2 className="text-2xl font-bold mb-6">{sampleResult.name}</h2>
        <p className="text-sm leading-6 mb-8">{sampleResult.description}</p>

        <div className="mb-8">
          <h3 className="text-gray-400 text-sm mb-4">향조 노트</h3>
          <div className="space-y-2 text-sm">
            <p>Top : {sampleResult.notes.top}</p>
            <p>Middle : {sampleResult.notes.middle}</p>
            <p>Base : {sampleResult.notes.base}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          {sampleResult.hashtags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-600">{tag}</span>
          ))}
        </div>

        <p className="text-sm leading-6 mb-8">{sampleResult.review}</p>

        <h3 className="text-lg font-bold mb-4">RECOMMENDED</h3>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ minWidth: 'min-content' }}>
            {sampleResult.recommendedProducts.map((product, index) => (
              <div key={index} className="flex-none">
                <div className="relative bg-gray-100" style={{ width: '163px', height: '200px' }}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button className="absolute top-2 right-2">
                    <Heart className="text-white" size={24} />
                  </button>
                </div>
                <div className="mt-2">
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideResult;
