
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const GradeGuide = () => {
  const navigate = useNavigate();

  const criteriaGuide = [
    "• 매일 1회 회원 등급이 갱신됩니다.",
    "• 회원 등급은 최근 6개월간 구매금액을 반영하여 결정됩니다.",
    "• '구매금액'은 '구매완료'된 상품 금액에만 합산으로 계산됩니다. (배송완, 포장완, 구분 검품 완료)",
    "• '매장 영업/재고 변화 기준으로 다음 달 1일 영업 재정이 등급이 됩니다.",
    "• 향후 회원 등급별 혜택 및 선정 기준은 사전 통보 후 변경될 수 있습니다."
  ];

  const benefitsGuide = [
    "• 매월 1일 업데이트된 등급에 따라 소멸되므로 빠짐이 지급됩니다.",
    "• 등급별 혜택 중 '포인트'는 아이디마다 > 포인트마다 적립할 수 있습니다.",
    "• '등급별 혜택 중 포인트를 쿠폰 교환값으로 생성 후에 저장, 지급 혜택 삭제가 되어 저장이 > 주문해서 삭제될 수 있습니다.",
    "• VIP 등급은 화장품과 기타는 10,000 쿠폰/룸 시간 선택 가능 시 선택 휴장 여행 자료는 무효하게 되는 배송입니다.",
    "• 각 개인의 포인트는 장시간 후자간 시 내 사용 가능하고, 만화 시 저장 소멸 및 사용이 필기됩니다.",
    "• 너 자신도 좋게 사용이 필기되어야, 삶의 성공에 판세 부문 자료이 작동되지 않을 수 있습니다."
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">등급 안내</h1>
      </div>

      <div className="p-4">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl text-[#222222]">B</span>
            </div>
            <h2 className="text-lg font-medium mb-2">홍길동님</h2>
            <p className="text-gray-600 mb-6">현재 등급은 Basic 입니다.</p>
            <div className="w-full space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">구매 금액</span>
                <span>32,000원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">기간</span>
                <span>2023.08.01 - 2024.01.31</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium">등급 혜택 안내</h2>
          {[
            { 
              name: 'Basic', 
              benefits: '기준: 최근 6개월 구매금액 10만 원 미만 및 미구매\n혜택: 신규 가입 10,000원 쿠폰\n콤보타임 음료 교환권 1장 (유효기간 매달 1일 ~ 말일)', 
              icon: 'B',
              pointRate: '포인트 적립 1%',
              iconColor: '#222222'
            },
            { 
              name: 'Bronze', 
              benefits: '기준: 최근 6개월 구매금액 10만 원 이상, 20만 원 미만\n혜택: 월 5,000원 등급 혜택 쿠폰 1장 지급\n[APP 전용] 생일 10,000원 쿠폰\n(유효기간 매달 1일 ~ 말일)', 
              icon: 'B',
              pointRate: '포인트 적립 2%',
              iconColor: '#222222'
            },
            { 
              name: 'Silver', 
              benefits: '기준: 최근 6개월 구매금액 20만 원 이상, 50만 원 미만\n혜택: 월 10,000원 등급 혜택 쿠폰 1장 지급\n[APP 전용] 생일 10,000원 쿠폰\n(유효기간 매달 1일 ~ 말일)', 
              icon: 'S',
              pointRate: '포인트 적립 3%',
              iconColor: '#9F9EA1'
            },
            { 
              name: 'Gold', 
              benefits: '기준: 최근 6개월 구매금액 50만 원 이상, 100만 원 미만\n혜택: 월 15,000원 등급 혜택 쿠폰 1장 지급\n[APP 전용] 생일 10,000원 쿠폰\n(유효기간 매달 1일 ~ 말일)\n콤보타임 음료 교환권 2장 (유효기간 매달 1일 ~ 말일)', 
              icon: 'G',
              pointRate: '포인트 적립 4%',
              iconColor: '#F97316'
            },
            { 
              name: 'VIP', 
              benefits: '기준: 최근 6개월 구매금액 100만 원 이상\n혜택: 월 20,000원 등급 혜택 쿠폰 1장 지급\n[APP 전용] 생일 10,000원 쿠폰\n(유효기간 매달 1일 ~ 말일)\n콤보타임 음료 교환권 4장 (유효기간 매달 1일 ~ 말일)', 
              icon: 'V',
              pointRate: '포인트 적립 5%',
              iconColor: '#000000'
            }
          ].map((grade) => (
            <div key={grade.name} className="py-6 border-b">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm" style={{ color: grade.iconColor }}>{grade.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{grade.name}</h3>
                    <span className="text-sm text-gray-500">{grade.pointRate}</span>
                  </div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{grade.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">회원등급기준안내</h3>
          <div className="space-y-2">
            {criteriaGuide.map((text, index) => (
              <p key={index} className="text-sm text-gray-600">{text}</p>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">회원등급혜택안내</h3>
          <div className="space-y-2">
            {benefitsGuide.map((text, index) => (
              <p key={index} className="text-sm text-gray-600">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeGuide;
