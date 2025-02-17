import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"

const Withdraw = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [detailReason, setDetailReason] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const reasons = [
    "원하는 상품이 없어요.",
    "쿠폰/포인트 등의 혜택이 너무 적어요.",
    "구매/포인트 등의 혜택이 너무 적어요.",
    "다른 계정으로 가입하고 싶어요.",
    "직접입력"
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

    if (step === 3) {
      setShowCompleteModal(true);
    } else {
      setStep(step + 1);
    }
  };

  const handleComplete = () => {
    setShowCompleteModal(false);
    navigate('/');
  };

  const handleTextareaFocus = () => {
    setReason("직접입력");
  };

  const renderStep1 = () => (
    <div className="p-4">
      <p className="mb-8">그랑핸드를 떠나시려는 이유를 알려주세요.</p>
      <RadioGroup value={reason} onValueChange={setReason} className="space-y-6">
        {reasons.map((text) => (
          <div key={text} className="flex items-center space-x-2">
            <RadioGroupItem value={text} id={text} />
            <Label htmlFor={text}>{text}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className="mt-6">
        <Textarea
          value={detailReason}
          onChange={(e) => setDetailReason(e.target.value)}
          onFocus={handleTextareaFocus}
          placeholder="탈퇴 사유를 입력해 주세요"
          className="resize-none"
          maxLength={200}
        />
        <div className="text-right text-sm text-gray-500 mt-1">
          {detailReason.length}/200
        </div>
      </div>
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
          <h3 className="font-medium mb-1">회원 탈퇴 후 재가입</h3>
          <p className="text-gray-600">동일한 본인 정보 휴대폰으로는 30일 이후에 재가입 가능합니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">탈퇴 후 재가입 시 가입 혜택 제한</h3>
          <p className="text-gray-600">탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">아이디 재사용 및 복구 불가</h3>
          <p className="text-gray-600">회원 정보는 탈퇴 가완 즉시로 모든 정보가 사제되며, 재가입 시에도 기존 아이디는 더 이상 사용할 수 없습니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">회원정보/서비스 이용 기록 삭제</h3>
          <p className="text-gray-600">회원 정보, 포인트, 쿠폰, 구매내역는 물론 대아디감 전부가 삭제되며 복구가 불가능합니다. 단만, 일부 주문 정보는 단순 탈퇴 불가능니다. 홈택 배달 당자 목적 으로 더 긴은 1년간 보관 후 파기됩니다.</p>
        </div>
        <div>
          <h3 className="font-medium mb-1">등록 게시물 유지</h3>
          <p className="text-gray-600">게시글, 문의 내역 등의 데이터는 사제되지 않으며, 반드시 탈퇴 전 직접 삭제해야 합니다.</p>
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

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={handleNext} 
          className="w-full bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]"
        >
          {step === 3 ? '본인인증하고 탈퇴하기' : '탈퇴하기'}
        </Button>
      </div>

      <AlertDialog open={showCompleteModal} onOpenChange={setShowCompleteModal}>
        <AlertDialogContent className="bg-white p-0 gap-0">
          <div className="p-6 text-center">
            <p>회원탈퇴가 정상적으로 완료되었습니다.</p>
          </div>
          <AlertDialogFooter className="p-0">
            <Button 
              onClick={handleComplete} 
              className="w-full rounded-none bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]"
            >
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Withdraw;
