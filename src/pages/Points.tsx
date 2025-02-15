import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Points = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const pointHistory = [
    {
      id: 1,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '구매확정 적립',
      points: '+700',
      expireDate: '2029.01.09까지 사용 가능',
      category: 'earn'
    },
    {
      id: 2,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '출석 체크',
      points: '+100',
      expireDate: '2029.01.09까지 사용 가능',
      category: 'earn'
    },
    {
      id: 3,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '행운 뽑기',
      points: '+5,000',
      expireDate: '2029.01.09까지 사용 가능',
      category: 'earn'
    },
    {
      id: 4,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '골프타올',
      title: '주문 취소',
      points: '+6,000',
      expireDate: '',
      category: 'earn'
    },
    {
      id: 5,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '골프타올',
      title: '주문 사용',
      points: '-6,000',
      expireDate: '',
      category: 'use'
    }
  ];

  const pointGuide = {
    basic: [
      "• 구매 및 이벤트 참여를 통해 포인트를 적립받을 수 있습니다.",
      "• 적립 기준은 물건 이벤트마다 다릅니다.",
      "• 그랑핸드&골프타올 몰/오프라인 공통에 공통으로 적용됩니다.",
      "• 고객을 위한 저희의 소식마저 구매함으로 보녀 배달 완료가 가능 기간 이전에 지동 취임합니다."
    ],
    usage: [
      "• 최소 1,000 포인트부터 사용할 수 있으며, 포인트는 유효기간 안에 순으로 사용됩니다.",
      "• 포인트는 타인에게 선물 및 양도가 불가합니다.",
      "• 주문 취소로 인한 주문될 환급 시, 무료기간에 긴 은으로 환급 지원됩니다.",
      "• 구입한 상품 환불/취소 시 사용 포인트는 지동 소멸되며, 만족 배송비 혹은 다른 결제 용으로 사용이 불가합니다.",
      "• 모든 포인트는 취급 시 유효기간 공지하며, 당사나이 없는 적립 지되점들로부터 1년 내 사용을 기준으로 합니다."
    ],
    expiry: [
      "• 포인트로 사용하지 않으면 유효기간 전에 시 지동 소멸됩니다.",
      "• 회원 탈퇴 시, 해당 멤버의 보유한 포인트는 모두 소멸되며, 서비스에서 재가입하더라도 소멸된 포인트는 복구되지 않습니다."
    ]
  };

  const filteredHistory = pointHistory.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'earn') return item.points.startsWith('+');
    if (activeTab === 'use') return item.points.startsWith('-');
    if (activeTab === 'expire') return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">포인트</h1>
        </div>
        <Sheet>
          <SheetTrigger>
            <Info className="w-5 h-5 text-gray-500" />
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] sheet-custom">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-bold mb-6">포인트 사용 안내</SheetTitle>
            </SheetHeader>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-3">1. 포인트 적립</h3>
                <div className="space-y-2">
                  {pointGuide.basic.map((text, index) => (
                    <p key={index} className="text-sm text-gray-600">{text}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">2. 사용/유효기간</h3>
                <div className="space-y-2">
                  {pointGuide.usage.map((text, index) => (
                    <p key={index} className="text-sm text-gray-600">{text}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">3. 소멸</h3>
                <div className="space-y-2">
                  {pointGuide.expiry.map((text, index) => (
                    <p key={index} className="text-sm text-gray-600">{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="p-5 bg-background">
        <div className="rounded-xl bg-white p-5 shadow-sm mb-6">
          <div className="mb-4">
            <h2 className="text-sm text-gray-900 mb-1">포인트</h2>
            <p className="text-[32px] font-bold">0</p>
          </div>
          <div className="text-sm text-gray-500">
            이번 달 소멸 예정 포인트 <span className="text-gray-900">0</span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-medium mb-4">포인트 상세 내역</h3>
          <div className="flex border-b bg-white">
            <button 
              className={`flex-1 py-3 text-sm ${activeTab === 'all' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`}
              onClick={() => setActiveTab('all')}
            >
              전체
            </button>
            <button 
              className={`flex-1 py-3 text-sm ${activeTab === 'earn' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`}
              onClick={() => setActiveTab('earn')}
            >
              적립
            </button>
            <button 
              className={`flex-1 py-3 text-sm ${activeTab === 'use' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`}
              onClick={() => setActiveTab('use')}
            >
              사용
            </button>
            <button 
              className={`flex-1 py-3 text-sm ${activeTab === 'expire' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`}
              onClick={() => setActiveTab('expire')}
            >
              소멸
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span>{item.date}</span>
                    <span>{item.time}</span>
                    <span>·</span>
                    <span>{item.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium mb-1">{item.title}</p>
                      {item.expireDate && <p className="text-xs text-gray-500">{item.expireDate}</p>}
                    </div>
                    <p className={`text-lg font-medium ${item.points.startsWith('+') ? 'text-black' : 'text-red-500'}`}>
                      {item.points}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                포인트 내역이 없어요.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
