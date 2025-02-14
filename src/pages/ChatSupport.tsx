
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const ChatSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/418cc4fd-255d-435e-bc05-32c7e4a05ea7.png"
              alt="GRANHAND"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <h1 className="text-lg font-medium">GRANHAND.</h1>
              <button className="text-sm text-gray-500 flex items-center">
                운영시간 보기 &gt;
              </button>
            </div>
          </div>
          <button onClick={() => navigate(-1)}>
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex">
          <img
            src="/lovable-uploads/418cc4fd-255d-435e-bc05-32c7e4a05ea7.png"
            alt="GRANHAND"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
            <p className="text-sm">
              안녕하세요, GRANHAND입니다.<br />
              방문해주셔서 감사합니다 :)
            </p>
          </div>
        </div>
        
        <div className="flex">
          <img
            src="/lovable-uploads/418cc4fd-255d-435e-bc05-32c7e4a05ea7.png"
            alt="GRANHAND"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
            <p className="text-sm">
              문의를 남겨주시면 상담원 연결 후 순차적으로 답변됩니다.
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button className="w-full py-3 bg-[#8B6544] text-white rounded-md">
            문의하기
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            문의창이 많아 답변이 지연되고 있어요
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
