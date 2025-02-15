
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const EventDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://granhand.com/evnet/11832');
    setCopied(true);
    toast({
      title: "링크가 복사되었습니다",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleListClick = () => {
    // 이벤트 상세 페이지로 이동
    navigate('/event/1');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
          <h1 className="text-lg font-medium">EVNET</h1>
        </div>
        <button className="p-2">
          <Share className="w-5 h-5" />
        </button>
      </header>

      <div className="space-y-6 p-4">
        <div className="space-y-3 cursor-pointer" onClick={handleListClick}>
          <img 
            src="/lovable-uploads/183e831a-0ce5-4fe8-a07d-3a1388afd6c3.png"
            alt="2024 Calendar Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">2024 Calender | 10월 뉴스레터에서 신청하세요</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>

          <div className="mt-6 space-y-4 text-gray-800">
            <p>늘을 한마디로 표현하자면 '시트러스의 재해석'이라 생각해요. 일반적으로 '상큼함', '발랄', '가벼움'을 시트러스 계열의 향의 특징으로 떠올리는데, 늘은 레몬과 베르가못, 자몽의 상큼함을 없지 않으면서도 자스민과 프리지아 우아함과 자몽잎을 유지하고, 티트리와 유칼립투스의 싱싱함은 그러니러하되 갖추면서 시간이 지날수록 앰버와 머스크로 포근하게 마무리되기 때문입니다.</p>
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">공유하기</p>
            <div className="flex items-center border rounded-lg p-2">
              <input 
                type="text" 
                value="https://granhand.com/evnet/11832" 
                readOnly
                className="flex-1 text-sm text-gray-500 outline-none"
              />
              <button onClick={handleCopyLink} className="p-2">
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 cursor-pointer" onClick={handleListClick}>
          <img 
            src="/lovable-uploads/89f6fe96-ab03-417c-9ef2-17932ea6fa25.png"
            alt="Online Store Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">그랜핸드 온라인 스토어 혜택 안내</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>
        </div>

        <div className="space-y-3 cursor-pointer" onClick={handleListClick}>
          <img 
            src="/lovable-uploads/183e831a-0ce5-4fe8-a07d-3a1388afd6c3.png"
            alt="Another Event"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="text-base font-medium">2024 Calender | 10월 뉴스레터에서 신청하세요</h2>
            <p className="text-xs text-gray-400 mt-1">2023-07-08</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
