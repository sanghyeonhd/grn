
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 테스트 케이스 처리
    if (value === '1') {
      setErrors({ email: false, password: false });
    } else if (value === '2') {
      setErrors({
        email: true,
        password: true
      });
    }
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

    if (errors.email || errors.password) {
      toast({
        title: "로그인 실패",
        description: "아이디 또는 비밀번호를 다시 확인해 주세요.",
        variant: "destructive"
      });
      return;
    }

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-12">GRANHAND.</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm">아이디</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해 주세요."
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">올바른 이메일 형식으로 입력해 주세요.</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm">비밀번호</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해 주세요."
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">아이디 또는 비밀번호를 다시 확인해 주세요.</p>
            )}
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className={`w-full py-3 rounded-none ${
                formData.email && formData.password && !errors.email && !errors.password
                  ? 'bg-[#2C2C2C] text-white'
                  : 'bg-[#E9E9E9] text-gray-500'
              }`}
            >
              로그인
            </button>

            <button 
              type="button" 
              onClick={() => navigate('/signup/terms')} 
              className="w-full py-3 text-sm border-t border-b mt-4"
            >
              이메일 회원가입
            </button>
          </div>

          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <button type="button" onClick={() => navigate('/find-id')}>
              아이디 찾기
            </button>
            <span>|</span>
            <button type="button" onClick={() => navigate('/find-password')}>
              비밀번호 찾기
            </button>
          </div>

          <div className="pt-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <p className="text-center text-sm text-gray-500">간편 로그인</p>
              <div className="w-12 h-[1px] bg-gray-300"></div>
            </div>
            <div className="flex justify-center gap-8">
              <button type="button">
                <img 
                  src="/lovable-uploads/8d0a9713-11f0-4d4f-b93d-71d5332424f1.png" 
                  alt="Apple" 
                  className="w-12 h-12"
                />
              </button>
              <button type="button">
                <img 
                  src="/lovable-uploads/f91f72da-47de-4e10-8263-b19a3741d98b.png" 
                  alt="Naver" 
                  className="w-12 h-12"
                />
              </button>
              <button type="button">
                <img 
                  src="/lovable-uploads/132e0477-dd85-44e2-b4f5-a3c72e07e332.png" 
                  alt="Kakao" 
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
