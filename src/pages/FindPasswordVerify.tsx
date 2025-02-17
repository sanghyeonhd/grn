
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const FindPasswordVerify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [timer, setTimer] = useState(180); // 3분
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handlePhoneSubmit = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "오류",
        description: "올바른 휴대폰 번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }
    setIsTimerRunning(true);
    setTimer(180);
  };

  const handleVerificationSubmit = () => {
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: "오류",
        description: "올바른 인증번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }
    navigate('/find-password/reset');
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col">
      <header className="flex items-center">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
      </header>

      <div className="flex-1 flex flex-col">
        <h1 className="text-[18px] font-medium mt-12 mb-8">휴대폰 인증을 해주세요.</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm">휴대폰 번호</label>
            <div className="flex space-x-2">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 12 234 5678"
                className="flex-1 border-[#C0BCB6] rounded bg-[#FFFFFF]"
              />
              <Button
                onClick={handlePhoneSubmit}
                className="bg-[#2C2C2C] px-4 text-white rounded hover:bg-[#2C2C2C]"
              >
                인증 요청
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm">인증번호</label>
            <div className="relative">
              <Input
                type="number"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="인증번호 6자리 입력"
                className="w-full pr-16 border-[#C0BCB6] rounded bg-[#FFFFFF]"
              />
              {isTimerRunning && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  {formatTime(timer)}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Button
            onClick={handleVerificationSubmit}
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white h-[52px] rounded-none"
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindPasswordVerify;
