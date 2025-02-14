
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-4 p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 상세 내역</h1>
      </header>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">No. 1293812300921</div>
        <div className="text-sm text-gray-500">2023.10.23 09:29</div>

        <div className="mt-6">
          <h2 className="text-lg font-medium mb-4">주문 상품 정보</h2>
          <div className="bg-[#FAFAFA] p-4">
            <div className="font-medium mb-4">GRANHAND</div>
            <div className="flex gap-4">
              <img 
                src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
                alt="Roland Multi Perfume"
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="font-medium">Roland Multi Perfume</div>
                <div className="text-sm text-gray-500 mt-1">55,000원</div>
                <div className="text-sm text-gray-500 mt-1">롤링 멀티퍼퓸 200ml / 1개</div>
                <div className="text-sm text-gray-500 mt-1">주문 인원</div>
                <div className="text-sm text-gray-500 mt-1">N</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="py-3 border text-sm bg-white">배송 조회</button>
              <button className="py-3 border text-sm bg-white">교환/반품 신청</button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">배송지 정보</h2>
          <div className="space-y-4 text-[10px]">
            <div className="flex">
              <div className="w-20 text-gray-500">받는 분</div>
              <div>홍*동</div>
            </div>
            <div className="flex">
              <div className="w-20 text-gray-500">연락처</div>
              <div>010-****-5678</div>
            </div>
            <div className="flex">
              <div className="w-20 text-gray-500">주소</div>
              <div>[47291]부산 부산진구 서전로<br />********** 선정로</div>
            </div>
            <div className="flex">
              <div className="w-20 text-gray-500">요청사항</div>
              <div>벨 눌르지 말고 노크 톡톡 2번만 해주세요.</div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">결제 정보</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="text-gray-500">상품금액</div>
              <div>55,000원</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">배송비</div>
              <div>0원</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">쿠폰 사용</div>
              <div>-5,000원</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">포인트 사용</div>
              <div>-5,000</div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="font-medium">결제 금액</div>
              <div className="font-medium">45,000원</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">신용카드 (현대카드)</div>
              <div>45,000원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
