
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const FindPasswordReset = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);

  useEffect(() => {
    if (newPassword && confirmPassword) {
      setPasswordMatch(newPassword === confirmPassword);
    } else {
      setPasswordMatch(null);
    }
  }, [newPassword, confirmPassword]);

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({
        title: "모든 항목을 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    if (!passwordMatch) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        description: "동일한 비밀번호를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "비밀번호가 변경되었습니다.",
      description: "로그인 페이지로 이동합니다.",
      variant: "default",
    });

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-[18px] font-medium">비밀번호 재설정</h1>
      </header>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm">현재 비밀번호</label>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="현재 비밀번호를 입력해 주세요."
            className={`w-full border-[#C0BCB6] rounded ${currentPassword ? 'bg-white' : 'bg-[#f8f8f8]'}`}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">신규 비밀번호</label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="신규 비밀번호를 입력해 주세요."
            className={`w-full border-[#C0BCB6] rounded ${newPassword ? 'bg-white' : 'bg-[#f8f8f8]'}`}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">신규 비밀번호 확인</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="신규 비밀번호를 확인해 주세요."
            className={`w-full border-[#C0BCB6] rounded ${confirmPassword ? 'bg-white' : 'bg-[#f8f8f8]'}`}
          />
          {passwordMatch !== null && (
            <p className={`text-sm ${passwordMatch ? 'text-green-500' : 'text-red-500'}`}>
              {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </p>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white h-[52px] rounded-none"
          >
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindPasswordReset;
