import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const SignupTerms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [agreements, setAgreements] = useState({
    all: false,
    age: false,
    service: false,
    privacy: false,
    marketing: false,
    advertisement: false
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const agreedTerm = params.get('agreed');
    
    if (agreedTerm) {
      handleSingleCheck(agreedTerm, true);
      navigate('/signup/terms', { replace: true });
    }
  }, [location.search]);

  const handleAllCheck = (checked: boolean) => {
    setAgreements({
      all: checked,
      age: checked,
      service: checked,
      privacy: checked,
      marketing: checked,
      advertisement: checked
    });
  };

  const handleSingleCheck = (key: string, checked: boolean) => {
    const newAgreements = {
      ...agreements,
      [key]: checked
    };
    
    const allChecked = Object.keys(newAgreements)
      .filter(k => k !== 'all')
      .every(k => newAgreements[k as keyof typeof newAgreements]);
    
    setAgreements({
      ...newAgreements,
      all: allChecked
    });
  };

  const handleNext = () => {
    if (agreements.age && agreements.service && agreements.privacy) {
      navigate('/signup');
    }
  };

  const handleTermDetail = (type: string) => {
    navigate(`/terms/${type}`);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col">
      <div className="space-y-4">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        
        <div className="flex w-full h-1">
          <div className="w-1/4 bg-[#2C2C2C]" />
          <div className="w-3/4 bg-gray-200" />
        </div>

        <h1 className="text-xl font-medium">그랭핸드 서비스 이용 약관에 동의해 주세요.</h1>
      </div>

      <div className="flex-1 mt-8 space-y-6">
        <div className="flex items-center">
          <Checkbox
            checked={agreements.all}
            onCheckedChange={(checked) => handleAllCheck(checked as boolean)}
            id="all"
          />
          <label htmlFor="all" className="ml-2 text-sm font-medium">
            모두 동의 (선택 정보 포함)
          </label>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={agreements.age}
                onCheckedChange={(checked) => handleSingleCheck('age', checked as boolean)}
                id="age"
              />
              <label htmlFor="age" className="ml-2 text-sm font-medium">
                (필수) 만 14세 이상입니다
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={agreements.service}
                onCheckedChange={(checked) => handleSingleCheck('service', checked as boolean)}
                id="service"
              />
              <label htmlFor="service" className="ml-2 text-sm font-medium">
                (필수) 서비스 이용 약관 동의
              </label>
            </div>
            <button
              onClick={() => handleTermDetail('service')}
              className="text-sm text-gray-500 p-2"
            >
              &gt;
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={agreements.privacy}
                onCheckedChange={(checked) => handleSingleCheck('privacy', checked as boolean)}
                id="privacy"
              />
              <label htmlFor="privacy" className="ml-2 text-sm font-medium">
                (필수) 개인정보 수집 및 이용 동의
              </label>
            </div>
            <button
              onClick={() => handleTermDetail('privacy')}
              className="text-sm text-gray-500"
            >
              &gt;
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={agreements.marketing}
                onCheckedChange={(checked) => handleSingleCheck('marketing', checked as boolean)}
                id="marketing"
              />
              <label htmlFor="marketing" className="ml-2 text-sm font-medium">
                (선택) 마케팅 목적의 개인정보 수집 및 이용 동의
              </label>
            </div>
            <button
              onClick={() => handleTermDetail('marketing')}
              className="text-sm text-gray-500"
            >
              &gt;
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={agreements.advertisement}
                onCheckedChange={(checked) => handleSingleCheck('advertisement', checked as boolean)}
                id="advertisement"
              />
              <label htmlFor="advertisement" className="ml-2 text-sm font-medium">
                (선택) 광고성 정보 수신 동의
              </label>
            </div>
            <button
              onClick={() => handleTermDetail('advertisement')}
              className="text-sm text-gray-500"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <Button
        onClick={handleNext}
        className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-4"
        disabled={!(agreements.age && agreements.service && agreements.privacy)}
      >
        동의하고 가입하기
      </Button>
    </div>
  );
};

export default SignupTerms;
