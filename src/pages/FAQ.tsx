
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("product");

  const faqData = {
    product: [
      { q: "그랑앤드는 수제 향수 브랜드가 맞나요?", a: "그랑앤드 제품은 수제 향수가 아닙니다. 제품 생산 시 일부 공정에는 수작업이 들어가지만 모든 것을 손으로 만드는 핸드크래프트 브랜드는 아닙니다." },
      { q: "그랑앤드는 제품은 품질 실험을 하나요?", a: "" },
      { q: "SWEEPING PEONY는 왜 단종 되었나요?", a: "" },
      { q: "반려동물이 있는데 그랑앤드 제품을 사용해도 될까요?", a: "" },
      { q: "임신 중에 그랑앤드 제품을 사용해도 괜찮나요?", a: "" },
      { q: "내추럴 오일을 꾸준히 사용하면 안 되나요?", a: "" },
      { q: "부향률이 정확히 무엇인가요?", a: "" },
      { q: "향수에 에탄올이 함유되어 있나요?", a: "" },
    ],
    delivery: [
      { q: "왜 백화점이나 쇼핑몰에는 매장이 없나요?", a: "" },
      { q: "매장에 주차를 할 수 있나요?", a: "" },
      { q: "매장마다 모두 분위기가 다른데 특별한 이유가 있나요?", a: "" },
      { q: "마포점의 캠숲 아이디이는 어떻게 생각하시나요?", a: "" },
      { q: "향수를 제가 직접 만들 수 없을까요?", a: "" },
      { q: "매장별로 판매되는 제품이 다른가요?", a: "" },
    ],
    orderCancel: [
      { q: "이니셜 각인을 변경하고 싶어요", a: "" },
      { q: "주문을 취소/수정하고 싶어요", a: "" },
      { q: "교환 및 환불 규정은 어떻게 되나요?", a: "" },
    ],
    orderDelivery: [
      { q: "선물포장이 가능한가요?", a: "" },
      { q: "배송조회는 어떻게 할 수 있나요?", a: "" },
      { q: "온라인으로 주문 후 매장 픽업이 가능한가요?", a: "" },
      { q: "배송기간은 얼마나 걸리나요?", a: "" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white">
        <div className="border-b">
          <div className="p-4 flex items-center">
            <button onClick={() => navigate(-1)} className="mr-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg">자주 묻는 질문</h1>
          </div>
        </div>

        <Tabs defaultValue="product" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 p-0 bg-white border-b space-x-4">
            <TabsTrigger 
              value="product" 
              className={`flex-1 h-full rounded-none border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:shadow-none text-sm text-left justify-start px-2 ${
                activeTab === "product" ? "text-black" : "text-gray-400 border-transparent"
              }`}
            >
              제품 문의
            </TabsTrigger>
            <TabsTrigger 
              value="delivery" 
              className={`flex-1 h-full rounded-none border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:shadow-none text-sm text-left justify-start px-2 ${
                activeTab === "delivery" ? "text-black" : "text-gray-400 border-transparent"
              }`}
            >
              매장 문의
            </TabsTrigger>
            <TabsTrigger 
              value="orderCancel" 
              className={`flex-1 h-full rounded-none border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:shadow-none text-sm text-left justify-start px-2 ${
                activeTab === "orderCancel" ? "text-black" : "text-gray-400 border-transparent"
              }`}
            >
              주문 변경
            </TabsTrigger>
            <TabsTrigger 
              value="orderDelivery" 
              className={`flex-1 h-full rounded-none border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:shadow-none text-sm text-left justify-start px-2 ${
                activeTab === "orderDelivery" ? "text-black" : "text-gray-400 border-transparent"
              }`}
            >
              주문/배송
            </TabsTrigger>
          </TabsList>

          {Object.entries(faqData).map(([key, questions]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Accordion type="single" collapsible className="px-4">
                {questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="py-4 hover:no-underline">
                      <span className="text-left">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.a || "답변 내용이 준비 중입니다."}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FAQ;
