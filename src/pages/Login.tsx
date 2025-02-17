
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "입력 오류",
        description: "이메일과 비밀번호를 모두 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual login logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="text-gray-500 text-sm">
            콤포타블 커피에 오신 것을 환영합니다
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">이메일</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">비밀번호</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a]">
            로그인
          </Button>

          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <button type="button" onClick={() => navigate('/find-id')}>
              아이디 찾기
            </button>
            <span>|</span>
            <button type="button" onClick={() => navigate('/find-password')}>
              비밀번호 찾기
            </button>
            <span>|</span>
            <button type="button" onClick={() => navigate('/signup')}>
              회원가입
            </button>
          </div>

          <div className="pt-8 space-y-4">
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#FEE500] bg-[#FEE500] rounded-lg"
              onClick={() => navigate('/')}
            >
              <img 
                src="/lovable-uploads/67b9ce1b-3980-4a7d-b4e3-ab972160348b.png" 
                alt="Kakao" 
                className="w-5 h-5"
              />
              카카오로 시작하기
            </button>
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 border border-black rounded-lg"
              onClick={() => navigate('/')}
            >
              <img 
                src="/lovable-uploads/e178991f-6cc6-4587-9caa-4c0cd4eeeca6.png" 
                alt="Apple" 
                className="w-5 h-5"
              />
              Apple로 시작하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
