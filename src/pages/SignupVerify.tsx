
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const SignupVerify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const handleSendVerification = () => {
    if (!phone) {
      toast({
        title: "입력 오류",
        description: "휴대폰 번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }
    setIsVerificationSent(true);
    toast({
      title: "인증번호 발송",
      description: "입력하신 번호로 인증번호가 발송되었습니다.",
    });
  };

  const handleVerify = () => {
    if (!verificationCode) {
      toast({
        title: "입력 오류",
        description: "인증번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }
    
    // 실제 인증 로직은 여기에 구현
    navigate('/signup/complete');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">본인인증</h1>
      </header>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm">휴대폰 번호</label>
          <div className="flex space-x-2">
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="휴대폰 번호 입력 (-없이 입력)"
              className="flex-1"
            />
            <Button
              onClick={handleSendVerification}
              className="bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-4"
            >
              인증번호 발송
            </Button>
          </div>
        </div>

        {isVerificationSent && (
          <div className="space-y-2">
            <label className="text-sm">인증번호</label>
            <div className="flex space-x-2">
              <Input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="인증번호 6자리 입력"
                className="flex-1"
              />
            </div>
          </div>
        )}

        {isVerificationSent && (
          <Button
            onClick={handleVerify}
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
          >
            인증완료
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignupVerify;
