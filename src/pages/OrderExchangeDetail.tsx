
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderExchangeDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="flex items-center h-12 border-b">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center pr-10">교환 상세</h1>
      </header>

      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">교환 상품 정보</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
                alt="Roland Multi Perfume"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-1">GRANHAND</div>
                <div className="font-medium mb-1">Roland Multi Perfume</div>
                <div className="font-medium">55,000원</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>옵션</span>
                <span>롤링 멀티퍼퓸 200ml / 1개</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>쇼핑백</span>
                <span>구매 안함</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>스탬핑 여부</span>
                <span>N</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed">
              <div className="text-red-500 font-medium">교환 완료</div>
              <div className="mt-4 space-y-1 text-sm text-gray-500">
                <div>└ 교환 사유 : 옵션 변경</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">배송비 정보</h3>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span>왕복 배송비</span>
              <span>6,000원</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">회수/배송 정보 확인</h3>
          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <div className="font-medium">회수지 정보</div>
              <div className="text-sm">홍길동</div>
              <div className="text-sm">010-1234-9378</div>
              <div className="text-sm">부산광역시 부전동 서면로 8번길 컨테이너</div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <div className="font-medium">배송지 정보</div>
              <div className="text-sm">홍길동</div>
              <div className="text-sm">010-1234-5678</div>
              <div className="text-sm">부산광역시 부전동 서면로 8번길 컨테이너</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="py-3 border rounded-lg">회수 조회</button>
          <button className="py-3 border rounded-lg">배송 조회</button>
        </div>

        <div className="text-sm text-gray-500 space-y-1">
          <div>교환 접수 안내</div>
          <div>• 지난 결제에 반영한 할우 회돌 쿠폰 수령 수단(카드, 카카오쇼핑머니 페이, 쿠팡) {">"} 쿠폰 포인트 순)에서 차감 후 환불됩니다.</div>
          <div>• 환불 상품 추가 반품 물품 금액이 확정됩니다.</div>
        </div>
      </div>
    </div>
  );
};

export default OrderExchangeDetail;
