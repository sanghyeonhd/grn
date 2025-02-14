
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  option: string;
  shoppingBag: string;
  stampingType: string;
  image: string;
}

const OrderReturn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"select" | "reason" | "delivery" | "complete">("select");
  const [reason, setReason] = useState("");
  const [reasonDetail, setReasonDetail] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 55000,
      option: "롤랑 멀티퍼퓸 200ml / 1개",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  ];

  const renderSelectStep = () => (
    <div className="p-4">
      <div className="mb-4">교환/반품 상품을 선택해 주세요.</div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex gap-3">
            <Checkbox id={`product-${product.id}`} className="mt-1" />
            <div className="flex-1">
              <div className="text-sm text-gray-500">{product.brand}</div>
              <div className="mt-1 flex gap-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium">{product.name}</div>
                  <div className="font-medium">{product.price.toLocaleString()}원</div>
                  <div className="mt-4 space-y-1">
                    <div className="flex">
                      <div className="w-20 text-sm text-gray-500">옵션</div>
                      <div className="flex-1 text-sm">{product.option}</div>
                    </div>
                    <div className="flex">
                      <div className="w-20 text-sm text-gray-500">쇼핑백</div>
                      <div className="flex-1 text-sm">{product.shoppingBag}</div>
                    </div>
                    <div className="flex">
                      <div className="w-20 text-sm text-gray-500">스탬핑 여부</div>
                      <div className="flex-1 text-sm">{product.stampingType}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <div className="font-medium text-black mb-2">교환/반품 유의사항</div>
        <ul className="space-y-1">
          <li>• 상품은 판매 상태 그대로 재포장해 주세요.</li>
          <li>• 제품 수령일로부터 7일간의 기간 이내 접수한 경우 교환/반품이 가능합니다.</li>
          <li>• 개봉 봉투 및 오메송장 장수 제품 상태에 상관없이 교환/반품이 가능합니다.</li>
          <li>• 단순 변심으로 인한 교환/반품의 경우 반품 배송비는 고객님 부담입니다.</li>
          <li>• 제품 포장 및 박스에 스티커가 제품과 함께 돌려 볼로 떨어지기 쉽고, 핸드크림 식사,<br />사식 배달 등)</li>
          <li>• 스팸핑 서비스를 받은 제품의 경우(갤러리아몰, 더류자, 현동) 불가능합니다.</li>
          <li>• 교환 및 환불 가능 여부 확인을 위해 상품 촬영 필수입니다.</li>
        </ul>
      </div>
    </div>
  );

  const renderReasonStep = () => (
    <div className="p-4">
      <div className="mb-4">교환/반품 사유를 선택해 주세요.</div>
      <RadioGroup 
        value={reason} 
        onValueChange={setReason}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason1" id="reason1" />
          <label htmlFor="reason1" className="text-sm">상품이 마음에 들지 않아요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason2" id="reason2" />
          <label htmlFor="reason2" className="text-sm">옵션을 잘못 선택했어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason3" id="reason3" />
          <label htmlFor="reason3" className="text-sm">상품에 이상이 있거나 파손되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason4" id="reason4" />
          <label htmlFor="reason4" className="text-sm">일부 상품이 누락되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason5" id="reason5" />
          <label htmlFor="reason5" className="text-sm">다른 상품이 배송되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason6" id="reason6" />
          <label htmlFor="reason6" className="text-sm">배송된 장소에 상품이 없어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason7" id="reason7" />
          <label htmlFor="reason7" className="text-sm">다른 주소로 오배송되었어요.</label>
        </div>
      </RadioGroup>

      <div className="mt-6">
        <div className="text-sm mb-2">상세 설명 *</div>
        <Input
          placeholder="다른 주소로 오배송 되었어요 ㅠㅠ"
          value={reasonDetail}
          onChange={(e) => setReasonDetail(e.target.value)}
          className="h-24 resize-none"
        />
        <div className="text-right text-sm text-gray-400 mt-1">10/100</div>
      </div>

      <div className="mt-6">
        <div className="text-sm mb-2">사진(1/3)</div>
        <div className="flex gap-2">
          <button className="w-20 h-20 border flex items-center justify-center">
            <X className="w-6 h-6 text-gray-400" />
          </button>
          <button className="w-20 h-20 border flex items-center justify-center">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderDeliveryStep = () => (
    <div className="p-4">
      <div className="mb-6 text-lg font-medium">교환/반품 상품 정보</div>
      <div className="bg-gray-50 p-4 rounded">
        <div className="text-sm text-gray-500">GRANHAND</div>
        <div className="flex gap-4 mt-2">
          <img 
            src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png" 
            alt="Mutui Perfume" 
            className="w-20 h-20 object-cover" 
          />
          <div>
            <div className="font-medium">Mutui Perfume & Hand cream Set</div>
            <div className="font-medium">60,000원</div>
            <div className="mt-4 space-y-1">
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">옵션</div>
                <div className="text-sm">미러 오커드 / 1개</div>
              </div>
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">쇼핑백</div>
                <div className="text-sm">구매 안함</div>
              </div>
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">스탬핑 여부</div>
                <div className="text-sm">N</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">해결 방법 선택</div>
        <div>
          <RadioGroup defaultValue="exchange">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="exchange" id="exchange" />
              <label htmlFor="exchange">교환</label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-4">
          <div className="text-sm mb-2">방법 후 환불</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">교환 옵션 선택</div>
        <button className="w-full p-4 border flex justify-between items-center">
          <span className="text-gray-400">옵션을 선택해 주세요.</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">회수/배송 정보 확인</div>
        <div className="space-y-4">
          <div className="border p-4">
            <div className="flex justify-between mb-2">
              <div className="font-medium">회수지 정보</div>
              <button className="text-sm text-blue-500">변경하기</button>
            </div>
            <div className="text-sm space-y-1">
              <div>홍길동</div>
              <div>010-1234-5678</div>
              <div>부산광역시 부전동 서전로 8번길 럭키하트</div>
            </div>
          </div>
          <div className="border p-4">
            <div className="flex justify-between mb-2">
              <div className="font-medium">배송지 정보</div>
              <button className="text-sm text-blue-500">변경하기</button>
            </div>
            <div className="text-sm space-y-1">
              <div>홍길동</div>
              <div>010-1234-5678</div>
              <div>부산광역시 부전동 서전로 8번길 럭키하트</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">교환 배송비 안내</div>
        <div className="p-4 border">
          <div className="flex justify-between">
            <div>왕복 배송비</div>
            <div>6,000원</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">배송비 결제 수단</div>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-4 border">신용/체크카드</button>
          <button className="p-4 border">토스 및 계좌이체</button>
          <button className="p-4 border">네이버페이</button>
          <button className="p-4 border">무통장 입금</button>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <div className="space-y-1">
          <div>• 상품은 판매 상태 그대로 재포장해 주세요.</div>
          <div>• 원사 제작 과정상 사양 선택 후 구매자의 귀책으로 직품 회수된 경우 환불이 어려울 수 있습니다.</div>
          <div>• 개봉 스티커가 제품과 함께 있고, 스탬핑을 받은 경우, 개봉 및 사용 흔적이 있는 경우 교환이나 어려울 수 있습니다.</div>
        </div>
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="min-h-screen bg-white">
      <header className="h-12 border-b flex items-center">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center">교환/반품 신청</h1>
      </header>
      
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4">
          <div className="w-2 h-4 border-r-2 border-b-2 border-black transform rotate-45 translate-y-[-2px]" />
        </div>
        <div className="text-center mb-12">
          교환 신청이 완료되었습니다.
        </div>
        
        <div className="px-4 w-full text-sm text-gray-500">
          <div className="space-y-1">
            <div>• 교환 상품 회수 완료 이후 최대 7영업일 내 교환 후 교환 상품이 배송되며, 점수 내역 및 진행 상황은 '교환 상세 보기'에서 확인 가능합니다.</div>
            <div>• 상품이 이상이 있는 경우 교환 검토가 될 수 있으며, 교환이 거절될수도 있습니다.</div>
          </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 p-4 grid grid-cols-2 gap-2 bg-white border-t">
          <button
            className="py-3 px-4 border border-gray-300"
            onClick={() => navigate('/order-history')}
          >
            주문 내역으로 이동
          </button>
          <button
            className="py-3 px-4 bg-[#2C2C2C] text-white"
            onClick={() => navigate('/main')}
          >
            홈으로 가기
          </button>
        </div>
      </div>
    </div>
  );

  if (step === "complete") {
    return renderCompleteStep();
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="border-b">
        <div className="flex items-center h-12">
          <button onClick={() => navigate(-1)} className="px-4">
            <X className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">교환/반품 신청</h1>
        </div>
        <div className="flex">
          <div className={`flex-1 py-3 text-center ${step === "select" ? "border-b-2 border-black" : "text-gray-400"}`}>
            상품 선택
          </div>
          <div className={`flex-1 py-3 text-center ${step === "reason" ? "border-b-2 border-black" : "text-gray-400"}`}>
            사유 작성
          </div>
          <div className={`flex-1 py-3 text-center ${step === "delivery" ? "border-b-2 border-black" : "text-gray-400"}`}>
            해결 방법 선택
          </div>
        </div>
      </header>

      {step === "select" && renderSelectStep()}
      {step === "reason" && renderReasonStep()}
      {step === "delivery" && renderDeliveryStep()}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button 
          className="w-full py-3 text-white bg-[#2C2C2C]"
          onClick={() => {
            if (step === "select") setStep("reason");
            else if (step === "reason") setStep("delivery");
            else if (step === "delivery") setStep("complete");
          }}
        >
          {step === "delivery" ? "신청하기" : "다음"}
        </button>
      </div>
    </div>
  );
};

export default OrderReturn;
