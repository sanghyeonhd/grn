
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

const Withdraw = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [detailReason, setDetailReason] = useState("");
  const [agreed, setAgreed] = useState(false);

  const reasons = [
    "원하는 상품이 없어요.",
    "쿠폰/포인트 등의 혜택이 너무 적어요.",
    "구매/포인트 등의 혜택이 너무 적어요.",
    "다른 계정으로 가입하고 싶어요."
  ];

  const handleNext = () => {
    if (step === 1 && !reason) {
      toast({
        title: "탈퇴 사유를 선택해주세요",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 3 && !agreed) {
      toast({
        title: "유의사항에 동의해주세요",
        variant: "destructive",
      });
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    }
  };

  const renderStep1 = () => (
    <div className="p-4">
      <p className="mb-4">그랑앤블를 떠나시려는 이유를 알려주세요.</p>
      <RadioGroup value={reason} onValueChange={setReason} className="space-y-3">
        {reasons.map((text) => (
          <div key={text} className="flex items-center space-x-2">
            <RadioGroupItem value={text} id={text} />
            <Label htmlFor={text}>{text}</Label>
          </div>
        ))}
      </RadioGroup>
      {reason && (
        <div className="mt-6">
          <p className="text-sm mb-2">직접 입력</p>
          <Textarea
            value={detailReason}
            onChange={(e) => setDetailReason(e.target.value)}
            placeholder="그랑앤드"
            className="resize-none"
            maxLength={200}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {detailReason.length}/200
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="p-4">
      <p className="mb-6">지금 탈퇴하시면, 아래 혜택이 모두 사라져요!</p>
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className="bg-[#F7E4D0] p-2 rounded">🎁</div>
          <div>
            <p className="text-gray-600 text-sm">즉시 사용 가능한</p>
            <p className="font-medium">쿠폰 4개</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-[#F7E4D0] p-2 rounded">💰</div>
          <div>
            <p className="text-gray-600 text-sm">구매 시 사용 가능한</p>
            <p className="font-medium">2,500 포인트</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-[#F7E4D0] p-2 rounded">💝</div>
          <div>
            <p className="text-gray-600 text-sm">소중하게 담아놓으신</p>
            <p className="font-medium">장바구니,관심상품 5개</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-[#F7E4D0] p-2 rounded">⭐</div>
          <div>
            <p className="text-gray-600 text-sm">소중 멤버십 주어지는</p>
            <p className="font-medium">고객님의 회원등급 SILVER</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="p-4">
      <p className="mb-4">유의사항을 확인해 주세요.</p>
      <div className="bg-gray-50 p-4 rounded text-sm space-y-6">
        <div>
          <h3 className="font-medium mb-1">회원탈퇴 후 재가입</h3>
          <p className="text-gray-600">동일한 본인 확인 휴대폰으로는 30일 이후에 재가입 가능합니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">탈퇴 후 재가입 시 기회 박탈</h3>
          <p className="text-gray-600">탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">회원정보/서비스 이용 기록 삭제</h3>
          <p className="text-gray-600">회원 정보, 포인트, 쿠폰, 구매내역는 물론 대아디감 전부가 삭제되며 복구가 불가능합니다. 단만, 일부 주문 정보는 단순 탈퇴 불가능니다. 홈택 배달 당자 목적 으로 더 긴은 1년간 보관 후 파기됩니다.</p>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input 
          type="checkbox" 
          id="agree" 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="rounded"
        />
        <label htmlFor="agree" className="text-sm">
          유의사항을 모두 확인하였으며, 이에 동의합니다.
        </label>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="p-4">
      <Alert className="mb-4">
        <AlertDescription>
          회원탈퇴가 정상적으로 완료되었습니다.
        </AlertDescription>
      </Alert>
      <div className="text-center text-sm text-gray-500">
        다음에도 더 좋은 10년 보내 줄 파가겠니다.
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">회원탈퇴</h1>
        </div>
      </div>

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}

      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)} 
          className="flex-1"
        >
          취소
        </Button>
        {step < 4 && (
          <Button 
            onClick={handleNext} 
            className="flex-1 bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]"
          >
            {step === 3 ? '본인인증하고 탈퇴하기' : '탈퇴하기'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Withdraw;
