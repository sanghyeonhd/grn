import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import JournalCategories from '@/components/journal/JournalCategories';
import ShareLinkPanel from '@/components/journal/ShareLinkPanel';
import JournalListItem from '@/components/journal/JournalListItem';
import JournalDetailHeader from '@/components/journal/JournalDetailHeader';

const JournalDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = React.useState('team');
  const [showShareLink, setShowShareLink] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
  };

  const handleBack = () => {
    console.log('Back button clicked');
    navigate(-1);
  };

  const handleShare = () => {
    setShowShareLink(true);
    setLinkCopied(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://grangand.com/journal/${id}`);
      setLinkCopied(true);
      toast({
        description: "링크가 복사되었습니다.",
        className: "fixed bottom-4 right-4",
      });
    } catch (err) {
      toast({
        description: "링크 복사에 실패했습니다.",
        variant: "destructive",
        className: "fixed bottom-4 right-4",
      });
    }
  };

  const renderContent = () => {
    if (id) {
      return (
        <div className="space-y-4">
          <div className="relative">
            <img 
              src="/lovable-uploads/745e71b8-c7dc-479a-b5a5-734da100ee40.png"
              alt="NOLL Store Interior"
              className="w-full"
            />
            <div className="absolute top-0 left-0 right-0 h-full flex flex-col justify-between">
              <JournalDetailHeader onBack={handleBack} onShare={handleShare} />
              <div className="p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="text-sm">#Team</p>
                <h2 className="text-xl font-medium mb-1">NOLL 놀에 대한 모든 것.</h2>
                <p className="text-sm">2023-07-08 조회 412</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="mt-6 space-y-4 text-gray-800">
              <p>'놀'은 작년 크리스마스에 출시된 그랜핸드의 새로운 라인인 '피험 라인'의 새끼집 향 중 하나입니다. 가장 최근에 선보인 따끈한 향이에요.</p>
              <p>잣곡에 버들숲을 노랗게로 진해지는 석을 알아니 바라보다 버린 새벽이 난 두 구름으로 들리던다. 낮정고에 거는 체론을 가네 있에 램이 뒤귀 뒤에 잣곡에 물담했다.</p>
            </div>
          </div>
          {showShareLink && (
            <ShareLinkPanel 
              id={id} 
              linkCopied={linkCopied} 
              onCopyLink={handleCopyLink} 
            />
          )}
        </div>
      );
    }

    return (
      <div className="space-y-6 px-4 mt-4">
        <JournalListItem
          id="1"
          image="/lovable-uploads/e599283a-a3a2-4e3a-88b8-9a782e14152f.png"
          category="Team"
          title="NOLL 놀에 대한 모든 것."
          date="2023-07-08"
          views={412}
        />
        <JournalListItem
          id="2"
          image="/lovable-uploads/26818efa-30ea-4335-9455-38183496a890.png"
          category="Team"
          title="여름의 끝에서 팀 그랑핸드가 꼽은 최고의 공포영화 Top 10"
          date="2023-07-08"
          views={412}
        />
        <JournalListItem
          id="3"
          image="/lovable-uploads/a773021d-65d3-4dde-bb9b-a24d88982a50.png"
          category="Essay"
          title="초록�� 고립 속에서"
          date="2023-07-08"
          views={412}
        />
        <JournalListItem
          id="4"
          image="/lovable-uploads/2a0cabfd-61ab-4dbf-be41-3b8c9d808e8f.png"
          category="Film"
          title="One Second Every Day Off, 2023 Summer"
          date="2023-07-08"
          views={412}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      {id ? (
        <div className="relative">
          {renderContent()}
        </div>
      ) : (
        <>
          <header className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center">
              <button 
                onClick={handleBack}
                className="text-2xl mr-4 p-2 hover:opacity-75 transition-opacity"
              >
                ←
              </button>
              <h1 className="text-lg font-medium">JOURNAL</h1>
            </div>
          </header>
          <JournalCategories 
            activeCategory={activeCategory} 
            onCategoryClick={handleCategoryClick} 
          />
          {renderContent()}
        </>
      )}
    </div>
  );
};

export default JournalDetail;
