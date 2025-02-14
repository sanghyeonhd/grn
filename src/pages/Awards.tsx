import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Share } from 'lucide-react';

const Awards = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('필름사진상');
  const [submenuTab, setSubmenuTab] = useState('행사안내');
  const [showShareDialog, setShowShareDialog] = useState(false);

  const mainTabs = ['필름사진상', '사생대회', '문예공모전'];
  const subTabs = ['행사안내', '참가접수', '당선작'];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <div className="flex items-center px-4 h-[44px] border-b border-[#EAEAEA]">
        <button onClick={() => navigate(-1)} className="mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-[18px] font-bold leading-[28px] text-[#1A1A1A]">AWARDS</h1>
        <button className="ml-auto" onClick={() => setShowShareDialog(true)}>
          <Share className="w-5 h-5 text-[#1A1A1A]" />
        </button>
      </div>

      {/* 메인 탭 */}
      <div className="flex border-b border-[#EAEAEA] px-4">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            className={`py-3 mr-4 text-sm ${
              activeTab === tab
                ? 'text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A]'
                : 'text-[#999999]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 서브 탭 */}
      <div className="flex border-b border-[#EAEAEA] px-4">
        {subTabs.map((tab) => (
          <button
            key={tab}
            className={`py-3 mr-4 text-sm ${
              submenuTab === tab
                ? 'text-[#1A1A1A] font-bold'
                : 'text-[#999999]'
            }`}
            onClick={() => setSubmenuTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      {submenuTab === '행사안내' && (
        <div className="px-4 py-8">
          <div className="mb-8">
            <img 
              src="/public/lovable-uploads/707d314f-2527-46c5-a639-c450c208981a.png" 
              alt="FPAG Logo"
              className="w-full h-auto mb-6"
            />
            <p className="text-sm text-[#1A1A1A] leading-6 mb-8">
              그랜핸드 {activeTab}은 그랜핸드가 유치하는 이념로고 감상과 함께 삶에 대한 성찰을 사진으로 표현하여 아마추어리즘 작가를 발굴하고 소개합니다. 수상자들은 그랜핸드와 함께 다양한 협업을 진행하여 전시에 참여할 기회가 제공됩니다.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold mb-2">수상</h3>
                <p className="text-sm text-[#1A1A1A]">
                  필름사진 이미주어 및 애호가를 대상으로 매년 1회 실시됩니다.<br />
                  필터 또는 흑백 네거티브 필름으로 촬영한 작품만 접수하실 수 있으며 디지털 사진 작품은 허용하지 않습니다.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">부문</h3>
                <p className="text-sm text-[#1A1A1A]">
                  Nature 자연 / People 사람 / Daily Life 일상 / Still Life 정물
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">시상</h3>
                <ul className="text-sm text-[#1A1A1A] list-disc pl-4">
                  <li>올해의 작가상 직접금</li>
                  <li>올해의 신인상 직접금 50만원 / 부문 수상자 : 직접금 25만원</li>
                </ul>
                <p className="text-sm text-[#666666] mt-2">
                  * 상금은 모두 제세공과금 징용된 액수
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {submenuTab === '참가접수' && (
        <div className="flex items-center justify-center h-[400px] text-[#999999]">
          현재 접수기간이 아닙니다.
        </div>
      )}

      {submenuTab === '당선작' && (
        <div className="p-4 space-y-4">
          <div className="aspect-video bg-[#F5F5F5] rounded-lg">
            <img 
              src="/public/lovable-uploads/85c4c9b1-b2ae-4bcc-802f-9907227ae6b0.png"
              alt="당선작"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold mb-1">2025년도 {activeTab} 당선작 발표</h3>
            <p className="text-xs text-[#999999]">2025-01-01</p>
          </div>
        </div>
      )}

      {/* 공유하기 다이얼로그 */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-sm mb-4">공유하기</DialogTitle>
          </DialogHeader>
          <div className="flex items-center border border-[#EAEAEA] rounded p-3">
            <input 
              type="text" 
              value="https://granhand.com/evnet/11832" 
              readOnly
              className="flex-1 text-sm text-[#999999] bg-transparent outline-none"
            />
            <button className="ml-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 7.5H8.33333C7.41286 7.5 6.66667 8.24619 6.66667 9.16667V16.6667C6.66667 17.5871 7.41286 18.3333 8.33333 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33333 12.5H2.5C2.03976 12.5 1.66667 12.1269 1.66667 11.6667V4.16667C1.66667 3.70643 2.03976 3.33333 2.5 3.33333H10.8333C11.2936 3.33333 11.6667 3.70643 11.6667 4.16667V5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Awards;
