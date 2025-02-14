import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Splash from '../components/Splash';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const isMobile = useIsMobile();
  const [showSplash, setShowSplash] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return '이메일을 입력해주세요.';
    }
    if (!emailRegex.test(email)) {
      return '올바른 이메일 형식으로 입력해주세요.';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return '비밀번호를 입력해주세요.';
    }
    if (password.length < 8) {
      return '비밀번호는 8자 이상이어야 합니다.';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        password: validatePassword(value)
      }));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (emailError || passwordError) {
      return;
    }

    console.log('로그인 시도:', formData);
    toast({
      title: "로그인 시도",
      description: "아이디 또는 비밀번호를 확인해주세요.",
      variant: "destructive"
    });
  };

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-6 space-y-6">
        <header className="text-2xl font-bold">
          GRANHAND.
        </header>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">아이디</label>
            <div className="space-y-1">
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력해주세요."
                className={`w-full border-gray-300 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm">비밀번호</label>
            <div className="space-y-1">
              <Input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력해주세요."
                className={`w-full border-gray-300 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
          >
            로그인
          </Button>

          <Button 
            variant="outline"
            className="w-full border-gray-300 rounded-none h-12"
            type="button"
          >
            이메일 회원가입
          </Button>

          <div className="flex justify-center space-x-2 text-sm text-gray-500">
            <button 
              type="button" 
              className="hover:underline"
              onClick={() => navigate('/find-id')}
            >
              아이디 찾기
            </button>
            <span>|</span>
            <button 
              type="button" 
              className="hover:underline"
              onClick={() => navigate('/find-password')}
            >
              비밀번호 찾기
            </button>
          </div>

          <div className="pt-4">
            <p className="text-center text-sm text-gray-500 mb-4">간편 로그인</p>
            <div className="flex justify-center space-x-4">
              <button type="button" className="w-10 h-10">
                <img src="/public/lovable-uploads/6f4cb4c7-7087-4c4d-ac4a-7a8a9591edb2.png" alt="Apple" className="w-full" />
              </button>
              <button type="button" className="w-10 h-10">
                <img src="/public/lovable-uploads/9a46f8c3-c0e0-480f-84ea-85c9fbcf3ee1.png" alt="Naver" className="w-full" />
              </button>
              <button type="button" className="w-10 h-10">
                <img src="/public/lovable-uploads/a6f9138a-d672-46fe-85f6-0c2bf8162c97.png" alt="Kakao" className="w-full" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
