
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // 모든 필드 검증
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    // 비밀번호 일치 검증
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "비밀번호 오류",
        description: "비밀번호가 일치하지 않습니다.",
        variant: "destructive"
      });
      return;
    }

    navigate('/signup/verify');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 py-6 space-y-4">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        
        <div className="flex w-full h-1">
          <div className="w-1/4 bg-gray-200" />
          <div className="w-1/4 bg-[#2C2C2C]" />
          <div className="w-2/4 bg-gray-200" />
        </div>

        <h1 className="text-xl font-medium">회원가입</h1>
        
        <p className="text-base">로그인에 사용할 아이디와 비밀번호를 입력해 주세요.</p>
      </div>

      <div className="flex-1 px-4 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">아이디</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해 주세요."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">비밀번호</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호 입력(8자 이상 영문,숫자,특수문자 포함)"
            />
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="비밀번호 재입력"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-4 mt-auto">
        <Button
          onClick={handleSubmit}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Signup;
