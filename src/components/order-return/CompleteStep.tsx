
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CompleteStepProps {
  method: "exchange" | "refund";
}

const CompleteStep = ({ method }: CompleteStepProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="h-12 border-b flex items-center">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center pr-10">교환/반품 신청</h1>
      </header>
      
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4">
          <div className="w-2 h-4 border-r-2 border-b-2 border-black transform rotate-45 translate-y-[-2px]" />
        </div>
        <div className="text-center mb-12">
          {method === "exchange" ? "교환 신청이 완료되었습니다." : "반품 신청이 완료되었습니다."}
        </div>
        
        <div className="px-4 w-full text-sm text-gray-500">
          <div className="space-y-1">
            {method === "exchange" ? (
              <>
                <div>• 교환 상품 회수 완료 이후 최대 7영업일 내 교환 후 교환 상품이 배송되며, 점수 내역 및 진행 상황은 '교환 상세 보기'에서 확인 가능합니다.</div>
                <div>• 상품이 이상이 있는 경우 교환 검토가 될 수 있으며, 교환이 거절될수도 있습니다.</div>
              </>
            ) : (
              <>
                <div>• 반품 상품 회수 완료 이후 최대 7영업일 내 환불이 진행되며, 환불 내역 및 진행 상황은 '반품 상세 보기'에서 확인 가능합니다.</div>
                <div>• 상품이 이상이 있는 경우 환불 검토가 될 수 있으며, 환불이 거절될수도 있습니다.</div>
              </>
            )}
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
};

export default CompleteStep;
