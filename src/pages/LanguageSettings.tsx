import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const LanguageSettings = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState("ko");

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-lg">언어 설정</h1>
        <button onClick={() => navigate(-1)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        <RadioGroup 
          defaultValue={language} 
          onValueChange={setLanguage}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ko" id="ko" />
            <Label htmlFor="ko">한국어</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="en" id="en" />
            <Label htmlFor="en">English</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default LanguageSettings;
