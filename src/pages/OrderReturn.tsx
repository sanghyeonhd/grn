
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SelectStep from "@/components/order-return/SelectStep";
import ReasonStep from "@/components/order-return/ReasonStep";
import DeliveryStep from "@/components/order-return/DeliveryStep";
import CompleteStep from "@/components/order-return/CompleteStep";
import { Product } from "@/types/order";

const OrderReturn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"select" | "reason" | "delivery" | "complete">("select");
  const [reason, setReason] = useState("");
  const [reasonDetail, setReasonDetail] = useState("");

  const products: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 55000,
      option: "롤랑 멀티퍼퓸 200ml / 1개",
      shoppingBag: "구매 안함",
      stampingType: "N",
      stampingLabel: "",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  ];

  if (step === "complete") {
    return <CompleteStep />;
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

      {step === "select" && <SelectStep products={products} />}
      {step === "reason" && (
        <ReasonStep 
          reason={reason}
          setReason={setReason}
          reasonDetail={reasonDetail}
          setReasonDetail={setReasonDetail}
        />
      )}
      {step === "delivery" && <DeliveryStep />}

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
