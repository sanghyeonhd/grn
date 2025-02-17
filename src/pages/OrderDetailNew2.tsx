
import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailNew2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-4 p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 상세 내역</h1>
      </header>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">No. {id}</div>
          <div className="text-sm text-gray-500">2023.10.23 09:29</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-lg font-medium mb-4">주문 상품 정보</div>
          <div className="flex gap-4">
            <img 
              src="/lovable-uploads/88e6b05d-060d-427f-bb38-dd36f8145516.png" 
              alt="Roland Multi Perfume"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-medium mb-1">GRANHAND</div>
              <div className="text-lg font-medium">Roland Multi Perfume</div>
              <div className="text-lg font-medium mb-2">55,000원</div>
              <div className="text-sm text-gray-500">롤랑 멀티퍼퓸 200ml / 1개</div>
              <div className="text-sm text-gray-500">구매 안함</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="py-3 border rounded text-sm">배송 조회</button>
            <button className="py-3 border rounded text-sm">교환/반품 신청</button>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-lg font-medium mb-4">배송지 정보</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">받는 분</div>
              <div>홍*동</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">연락처</div>
              <div>010-****-5678</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">주소</div>
              <div className="text-right">[47291]부산 부산진구 서전로<br />******************************</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">요청사항</div>
              <div>벨 누르지 말고 노크 톡톡 2번만 해주세요.</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium mb-4">결제 정보</div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">상품금액</div>
              <div>55,000원</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">배송비</div>
              <div>0원</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">쿠폰 사용</div>
              <div>-5,000원</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">포인트 사용</div>
              <div>-5,000</div>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t">
              <div className="font-medium">결제 금액</div>
              <div className="font-medium">45,000원</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">신용카드 (현대카드)</div>
              <div>45,000원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailNew2;
