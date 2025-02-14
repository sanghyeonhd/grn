
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">약관 및 정책</h1>
        </div>
      </div>

      <Tabs defaultValue="usage" className="w-full">
        <TabsList className="w-full h-12 bg-white border-b">
          <TabsTrigger value="usage" className="flex-1 data-[state=active]:text-[#8B6544] data-[state=active]:border-b-2 data-[state=active]:border-[#8B6544]">
            이용약관
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex-1 data-[state=active]:text-[#8B6544] data-[state=active]:border-b-2 data-[state=active]:border-[#8B6544]">
            개인정보처리방침
          </TabsTrigger>
        </TabsList>
        <TabsContent value="usage" className="p-4">
          <div className="space-y-4 text-sm">
            <h2 className="font-medium text-base">제1장 총 칙</h2>
            <div className="space-y-2">
              <h3 className="font-medium">제1조 (목적)</h3>
              <p className="text-gray-600 leading-relaxed">
                본 이용약관은 유한회사 그랜핸드(이하 "회사")에서 제공하는 모든 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">제2조 (정의)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li className="leading-relaxed pl-1">
                  "이용자"라 함은 회사가 제공 또는 용역(이하 "재화 등")을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                </li>
                <li className="leading-relaxed pl-1">
                  '이용자'라 함은 "그랜핸드"에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                </li>
              </ol>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="privacy" className="p-4">
          <div className="space-y-4 text-sm">
            <h2 className="font-medium mb-4">개인정보처리방침</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              그랜핸드 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
            </p>
            <div className="space-y-4">
              <h3 className="font-medium">수집하는 개인정보 항목 및 수집방법</h3>
              <div className="border rounded-md">
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-gray-50 font-medium">구분</div>
                  <div className="p-3 bg-gray-50 font-medium">수집 목적</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3">회원가입시<br />(필수서비스 운영)</div>
                  <div className="p-3">회원 가입시사 확인, 회원제 서비스 이용에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 서비스 부정이용 방지</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3">서비스 이용시</div>
                  <div className="p-3">주문, 구매 및 요금 결제 처리, 물품배송 또는 청구지 등 발송, 금융거래 병원 인증 및 금융서비스</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Terms;
