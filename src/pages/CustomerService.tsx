import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const CustomerService = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { title: "자주 묻는 질문", path: "/faq" },
    { title: "채팅 문의", path: "/chat-support" },
    { title: "제휴 문의", path: "/partnership" },
    { title: "공지사항", path: "/notice" },
    { title: "약관 및 정책", path: "/terms" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">고객센터</h1>
        </div>
      </div>

      <div className="p-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <span>{item.title}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
