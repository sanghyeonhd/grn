
import { ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DeliveryStep = () => {
  return (
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
};

export default DeliveryStep;
