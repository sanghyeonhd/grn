import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface NoticeItem {
  date: string;
  title: string;
  content?: string;
  isExpanded?: boolean;
}

const Notice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = React.useState<NoticeItem[]>([
    {
      date: "2024.01.16",
      title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일 : 2024년 1월 24일)",
      isExpanded: false
    },
    {
      date: "2023.11.23",
      title: "[공지] 서비스 이용약관 개정 사전 안내(시행일 : 2023년 12월 01일)",
      content: `안녕하세요.\n향과 일상의를 꿈꾸는 그랜핸드입니다.\n\n그랜핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '모험참수 가능'이 업데이트 될 예정입니다.\n\n업데이트 예정일\n2023년 9월 10일\n\n업데이트 내용\n-핵 사용시 : 이미베이지 - 주문내역 - [교환참수]까지 신택\n-핵 사용시 : 이미베이지 - 주문내역 - 주문단호 플러 - [교환참수] 바로 선택\n\n그랜핸드는 앞으로도 회원님의 정량한 고객경험을 위해 최선을 다할 것을 약속드립니다.\n\n감사합니다.`,
      isExpanded: false
    },
    {
      date: "2023.09.10",
      title: "[공지] '교환 접수 가능' 개발 및 업데이트 안내 (업데이트 예정일 : 2023년 9월 10일)",
      isExpanded: false
    },
    {
      date: "2023.07.11",
      title: "서비스 이용약관 개정 안내",
      isExpanded: false
    }
  ]);

  const toggleNotice = (index: number) => {
    setNotices(notices.map((notice, i) => ({
      ...notice,
      isExpanded: i === index ? !notice.isExpanded : notice.isExpanded
    })));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">공지사항</h1>
        </div>
      </div>

      <div className="divide-y">
        {notices.map((notice, index) => (
          <div key={index} className="bg-white">
            <div 
              className="px-4 py-5 cursor-pointer"
              onClick={() => toggleNotice(index)}
            >
              <div className="text-sm text-gray-500 mb-1">{notice.date}</div>
              <div className="flex items-start justify-between">
                <div className="text-base pr-8">{notice.title}</div>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transform transition-transform ${notice.isExpanded ? 'rotate-180' : ''}`} />
              </div>
            </div>
            {notice.isExpanded && notice.content && (
              <div className="px-4 py-4 bg-gray-50 text-sm whitespace-pre-line">
                {notice.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
