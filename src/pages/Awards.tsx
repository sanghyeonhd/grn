import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ShareLinkPanel from '@/components/journal/ShareLinkPanel';

const Awards = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('필름사진상');
  const [submenuTab, setSubmenuTab] = useState('행사안내');
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const mainTabs = ['필름사진상', '사생대회', '문예공모전'];
  const subTabs = ['행사안내', '참가접수', '당선작'];

  const handleShare = () => {
    setShowShareDialog(true);
    setLinkCopied(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://granhand.com/awards/11832`);
      setLinkCopied(true);
      toast({
        description: "링크가 복사되었습니다.",
        className: "fixed bottom-4 right-4",
      });
      setTimeout(() => {
        setShowShareDialog(false);
      }, 1000);
    } catch (err) {
      toast({
        description: "링크 복사에 실패했습니다.",
        variant: "destructive",
        className: "fixed bottom-4 right-4",
      });
    }
  };

  const getTitle = (tab: string) => {
    switch(tab) {
      case '필름사진상':
        return {
          en: 'GRANHAND, Film Photography Award',
          ko: '2025 그랜핸드 필름사진상'
        };
      case '사생대회':
        return {
          en: 'GRANHAND, Drawing Contest',
          ko: '2025 그랜핸드 사생대회'
        };
      case '문예공모전':
        return {
          en: 'GRANHAND, Literature Contest',
          ko: '2025 그랜핸드 문예공모전'
        };
      default:
        return {
          en: '',
          ko: ''
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="flex items-center px-4 h-[44px] border-b border-[#EAEAEA]">
        <button onClick={() => navigate(-1)} className="mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-[18px] font-bold leading-[28px] text-[#1A1A1A]">AWARDS</h1>
        <button className="ml-auto" onClick={handleShare}>
          <img 
            src="/lovable-uploads/f640fedb-0ab0-4890-8253-529a0922016d.png" 
            alt="share"
            className="w-5 h-5"
          />
        </button>
      </div>

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

      {submenuTab === '행사안내' && (
        <div className="px-4 py-8">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/707d314f-2527-46c5-a639-c450c208981a.png" 
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
        <div className="p-4">
          <div className="w-full h-[180px] bg-[#F5F5F5] mb-4">
            <img 
              src="/lovable-uploads/983770e1-f9fd-4581-bec2-3b910c2630fc.png"
              alt="FPAG Award"
              className="w-full h-full object-contain bg-[#F5F5F5]"
            />
          </div>
          <h3 className="text-base font-medium mb-1">{getTitle(activeTab).en}</h3>
          <p className="text-base mb-6">{getTitle(activeTab).ko}</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <span className="text-sm">접수 : </span>
              <span className="text-sm ml-1">2025.01.07(월) - 20(일)</span>
            </li>
            <li className="flex items-start">
              <span className="text-sm">발표 : </span>
              <span className="text-sm ml-1">2025.01.28(월)</span>
            </li>
          </ul>
          <button 
            className="w-32 h-10 border border-[#1A1A1A] text-sm"
          >
            참가 접수
          </button>
        </div>
      )}

      {submenuTab === '당선작' && (
        <div className="p-4 space-y-4">
          <div className="aspect-video bg-[#F5F5F5] rounded-lg">
            <img 
              src="/lovable-uploads/63303077-f358-433e-921d-30b925a8b863.png"
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

      {showShareDialog && (
        <ShareLinkPanel 
          id="11832" 
          linkCopied={linkCopied}
          onCopyLink={handleCopyLink}
        />
      )}
    </div>
  );
};

export default Awards;
