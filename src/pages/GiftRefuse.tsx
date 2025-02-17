import { useState } from "react";
import { X } from "lucide-react";
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
  stampingLabel: string;
  image: string;
}

const GiftRefuse = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"select" | "reason" | "confirm" | "complete">("select");
  const [reason, setReason] = useState("");
  const [reasonDetail, setReasonDetail] = useState("");

  const products: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35500,
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      shoppingBag: "추가 구매 (+500원)",
      stampingType: "Y",
      stampingLabel: "GRANHAND❤️",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    },
    {
      id: "2",
      brand: "GRANHAND",
      name: "Cask Signature Perfume",
      price: 110000,
      option: "캐스크 시그니처퍼퓸 100ml / 1개",
      shoppingBag: "추가 구매 (+500원)",
      stampingType: "Y",
      stampingLabel: "GRANHAND❤️",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  ];

  const product = {
    brand: "GRANHAND",
    name: "Roland Multi Perfume", 
    price: 35500,
    option: "롤랑 멀티퍼퓸 100ml / 1개",
    shoppingBag: "추가 구매 (+500원)",
    stampingType: "Y",
    stampingLabel: "GRANHAND❤️",
    image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
  };

  const renderReasonStep = () => (
    <div className="p-4">
      <div className="mb-4">취소 사유를 선택해 주세요.</div>
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
          <label htmlFor="reason2" className="text-sm">다른 상품 추가 후 재주문 예정이에요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason3" id="reason3" />
          <label htmlFor="reason3" className="text-sm">쿠폰 등 혜택 미사용으로 재주문 예정이에요.</label>
        </div>
      </RadioGroup>

      <div className="mt-6">
        <div className="text-sm mb-2">상세 설명</div>
        <Input
          placeholder="상세 사유를 입력해 주세요. (선택사항)"
          value={reasonDetail}
          onChange={(e) => setReasonDetail(e.target.value)}
          className="h-24 resize-none"
        />
        <div className="text-right text-sm text-gray-400 mt-1">0/100</div>
      </div>
    </div>
  );

  const renderConfirmStep = () => (
    <div className="p-4">
      <div className="mb-4">취소 상품 정보</div>
      <div className="bg-white rounded-lg p-4">
        <div className="text-sm text-gray-500">{product.brand}</div>
        <div className="flex gap-4 mt-2">
          <img src={product.image} alt="" className="w-20 h-20 object-cover" />
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="font-medium">{product.price.toLocaleString()}원</div>
            <div className="mt-4 space-y-1">
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">옵션</div>
                <div className="text-sm">{product.option}</div>
              </div>
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">쇼핑백</div>
                <div className="text-sm">{product.shoppingBag}</div>
              </div>
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">스탬핑 여부</div>
                <div className="text-sm">{product.stampingType}</div>
              </div>
              <div className="flex">
                <div className="w-20 text-sm text-gray-500">스탬핑 문구</div>
                <div className="text-sm">{product.stampingLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-medium mb-2">환불 정보</div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>결제 금액</span>
            <span>25,500원</span>
          </div>
          <div className="flex justify-between">
            <span>상품금액</span>
            <span>35,500원</span>
          </div>
          <div className="flex justify-between">
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div className="flex justify-between">
            <span>쿠폰 사용</span>
            <span>-5,000원</span>
          </div>
          <div className="flex justify-between">
            <span>포인트 사용</span>
            <span>-5,000</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-medium">환불 금액</span>
            <span className="font-medium">25,500원</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">신용카드 (현대카드)</span>
            <span></span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span>포인트 환불</span>
          <span>5,000</span>
        </div>

        <div className="mt-6 bg-gray-50 p-4">
          <div className="text-sm font-medium mb-2">결제수단별 환불 안내</div>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>• 신용카드/체크카드</li>
            <li className="ml-2">취소 완료일로부터 5 영업일 이내 승인 취소됩니다.</li>
            <li>• 무통장 환불</li>
            <li className="ml-2">취소 완료일로부터 5 영업일 이내 환불 신청하신 계좌로 입금됩니다.</li>
            <li>• 네이버페이 환불</li>
            <li className="ml-2">
              간편 신용/체크카드 : 취소 완료 후 3-5일 영업일 이후 환불됩니다.
              간편 계좌이체 환불 : 취소 완료 즉시 환불 (은행 정산 시간 제외) 됩니다.
              포인트 : 취소 완료 즉시 환불됩니다.
            </li>
            <li>• 포인트 환불</li>
            <li className="ml-2">취소 완료 즉시 환불</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="min-h-screen bg-white">
      <header className="h-12 border-b flex items-center">
        <h1 className="flex-1 text-center">주문 취소</h1>
      </header>
      <div className="flex flex-col items-center justify-center pt-8 pb-12">
        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4">
          <div className="w-2 h-4 border-r-2 border-b-2 border-black transform rotate-45 translate-y-[-2px]" />
        </div>
        <div className="text-center">
          취소 신청이 완료되었습니다.
        </div>
      </div>
      <div className="px-4">
        <div className="text-sm text-gray-500 space-y-1">
          <div>• 환불 일시마다 환불 완료 처리 5일(영업일 기준) 이후 소요될 수 있습니다.</div>
          <div>• 상품이 출하되어 배송 예정이라면 취소 수락 진행이 어려울 수 있습니다.</div>
        </div>
        <div className="flex gap-2 mt-8">
          <button
            className="flex-1 py-3 px-4 border border-gray-300"
            onClick={() => navigate('/order-history')}
          >
            주문 내역으로 이동
          </button>
          <button
            className="flex-1 py-3 px-4 bg-[#2C2C2C] text-white"
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
          <button 
            onClick={() => navigate(-1)}
            className="px-4"
          >
            <X className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">주문 취소</h1>
        </div>
        <div className="flex">
          <div className={`flex-1 py-3 text-center ${step === "select" ? "border-b-2 border-black" : "text-gray-400"}`}>
            상품 선택
          </div>
          <div className={`flex-1 py-3 text-center ${step === "reason" ? "border-b-2 border-black" : "text-gray-400"}`}>
            사유 작성
          </div>
          <div className={`flex-1 py-3 text-center ${step === "confirm" ? "border-b-2 border-black" : "text-gray-400"}`}>
            취소 정보 확인
          </div>
        </div>
      </header>

      {step === "select" && (
        <div className="p-4">
          <div className="mb-4">취소 상품을 선택해 주세요.</div>

          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex gap-3">
                <div className="pt-[30px]">
                  <Checkbox id={`product-${product.id}`} />
                </div>
                <div className="flex-1">
                  <div className="flex gap-4">
                    <div className="relative w-20">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-20 h-20 object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{product.brand}</div>
                      <div className="font-medium mt-1">{product.name}</div>
                      <div className="font-medium">{product.price.toLocaleString()}원</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-gray-600 ml-[80px]">
                    <div className="flex">
                      <div className="w-[72px]">옵션</div>
                      <div className="flex-1">{product.option}</div>
                    </div>
                    <div className="flex">
                      <div className="w-[72px]">쇼핑백</div>
                      <div className="flex-1">{product.shoppingBag}</div>
                    </div>
                    <div className="flex">
                      <div className="w-[72px]">스탬핑 여부</div>
                      <div className="flex-1">{product.stampingType}</div>
                    </div>
                    <div className="flex">
                      <div className="w-[72px]">스탬핑 문구</div>
                      <div className="flex-1">{product.stampingLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-sm font-medium mb-2">취소 정책 안내사항</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 상품이 준비되어 배송 예정일 정도 취소가 가능할 거예요.</li>
              <li>• 주문 제작 상품은 취소가 불가능해요.</li>
            </ul>
          </div>
        </div>
      )}
      {step === "reason" && renderReasonStep()}
      {step === "confirm" && renderConfirmStep()}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button 
          className="w-full py-3 text-white bg-[#2C2C2C]"
          onClick={() => {
            if (step === "select") setStep("reason");
            else if (step === "reason") setStep("confirm");
            else if (step === "confirm") {
              setStep("complete");
            }
          }}
        >
          {step === "confirm" ? "신청하기" : "다음"}
        </button>
      </div>
    </div>
  );
};

export default GiftRefuse;
