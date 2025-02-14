
import React, { useState, useEffect } from 'react';
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
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsVerificationSent(false);
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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
    setTimeLeft(180);
    setIsTimerRunning(true);
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
    
    navigate('/signup/complete');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">휴대폰 인증을 해주세요.</h1>
      </header>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm">휴대폰 번호</label>
          <div className="flex space-x-2">
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 10 123 4567"
              className="flex-1"
            />
            <Button
              onClick={handleSendVerification}
              className="bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-4"
            >
              {isVerificationSent ? '다시요청' : '인증요청'}
            </Button>
          </div>
        </div>

        {isVerificationSent && (
          <div className="space-y-2">
            <label className="text-sm">인증번호</label>
            <div className="relative">
              <Input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="ex) 000000"
                className="w-full pr-16"
              />
              {isTimerRunning && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  {formatTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
        )}

        <Button
          onClick={handleVerify}
          disabled={!isVerificationSent || !verificationCode}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default SignupVerify;
