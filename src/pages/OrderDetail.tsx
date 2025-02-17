
import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // id를 사용하여 해당 주문의 상세 정보를 조회하는 로직을 추가할 수 있습니다
  console.log("Order ID:", id);

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="flex items-center gap-4 p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 상세 내역</h1>
      </header>

      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <div className="text-sm">No. 1293812300921</div>
          <div className="text-sm text-gray-500">2023.10.23 09:29</div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium mb-4">선물 보내신 분 정보</h2>
          <div className="bg-gray-50 p-4 rounded">
            <img 
              src="/lovable-uploads/c4405cbc-95f4-4898-9d74-1d34e74d9e08.png" 
              alt="Gift"
              className="w-full h-48 object-cover mb-4"
            />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div className="text-gray-500">부치신 분</div>
                <div>홍*동</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-gray-500">선물 상태</div>
                <div>선물 수락</div>
              </div>
            </div>
            <button className="w-full py-3 border mt-4 text-sm">
              메시지 다시 보내기
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">주문 상품 정보</h2>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">배송 완료</div>
            <div className="p-4 bg-gray-50 rounded">
              <div className="font-medium mb-2">GRANHAND❤️</div>
              <div className="flex gap-4">
                <img 
                  src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
                  alt="Roland Multi Perfume"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <div className="font-medium">Roland Multi Perfume</div>
                  <div className="text-lg font-medium mt-1">35,500원</div>
                  <div className="text-sm text-gray-500">롤랑 멀티퍼퓸 100ml / 1개</div>
                  <div className="text-sm text-gray-500 mt-1">추가 구매 (+500원)</div>
                  <div className="text-sm text-gray-500">Y</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="py-3 border text-sm">배송 조회</button>
                <button className="py-3 border text-sm">교환/반품 신청</button>
              </div>
            </div>
            <button className="w-full py-3 border text-sm">
              구매 확정
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">결제 정보</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <div className="text-gray-500">상품금액</div>
              <div>35,500원</div>
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
              <div>-3,900</div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="font-medium">결제 금액</div>
              <div className="font-medium">26,600원</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">신용카드</div>
              <div>26,600원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
