
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

const FindPasswordReset = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setShowError(true);
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        description: "동일한 비밀번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    // API 호출 후 성공 시
    toast({
      title: "비밀번호가 변경되었습니다.",
      description: "로그인 페이지로 이동합니다.",
      variant: "default",
    });

    // 토스트 메시지가 보여진 후 페이지 이동
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">비밀번호 재설정</h1>
      </header>

      {showError && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>
            비밀번호가 일치하지 않습니다. 동일한 비밀번호를 입력해주세요.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        <div>
          <p>비밀번호를 변경해 주세요.</p>
          <p className="text-sm text-gray-500">영문, 숫자, 특수문자 포함 8~20자 이내로 입력해 주세요</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">비밀번호</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="새 비밀번호를 입력해 주세요."
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="새 비밀번호를 확인해 주세요."
              className="w-full"
            />
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-4"
        >
          비밀번호 재설정
        </Button>
      </div>
    </div>
  );
};

export default FindPasswordReset;
