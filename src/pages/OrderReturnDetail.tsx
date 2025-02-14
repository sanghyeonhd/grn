
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderReturnDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center h-12 border-b">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center pr-10">반품 상세</h1>
      </header>

      <div className="p-4 space-y-4">
        <div className="space-y-4">
          <h2 className="text-lg">반품 상품 정보</h2>
          <div className="flex gap-4">
            <img 
              src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
              alt="Roland Multi Perfume"
              className="w-20 h-20 object-cover"
            />
            <div>
              <div className="text-gray-500">GRANHAND</div>
              <div className="font-medium">Roland Multi Perfume</div>
              <div className="text-lg">55,000원</div>
              <div className="text-sm text-gray-500">롤링 멀티퍼퓸 200ml / 1개</div>
              <div className="text-sm text-gray-500">구매 안함</div>
              <div className="text-sm text-gray-500">N</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-red-500">반품 접수</h3>
          <div className="text-sm text-gray-500">• 반품 사유 : 단순 변심</div>
        </div>

        <div className="p-4 border space-y-2">
          <h3>회수지 정보</h3>
          <div className="text-sm">홍길동</div>
          <div className="text-sm">010-1234-5678</div>
          <div className="text-sm">부산광역시 부전동 서면로 8번길 컨테이너</div>
        </div>

        <div className="space-y-2">
          <h3>환불 정보</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">결제 금액</span>
            <span>45,000원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">상품금액</span>
            <span>55,000원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">배송비</span>
            <span>0원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">쿠폰 사용</span>
            <span>-5,000원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">포인트 사용</span>
            <span>-5,000</span>
          </div>
          <div className="flex justify-between text-sm text-red-500">
            <span>차감 금액</span>
            <span>(-) 3,000원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">추가 배송비</span>
            <span>0원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">반품 배송비</span>
            <span>3,000원</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <span>환불 금액</span>
            <span className="font-medium">42,000원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">• 신용카드 (현대카드)</span>
            <span>5,000</span>
          </div>
        </div>

        <button className="w-full py-3 border">회수 조회</button>
      </div>
    </div>
  );
};

export default OrderReturnDetail;
