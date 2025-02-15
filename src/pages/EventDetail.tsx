
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";

interface EventDetail {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

const mockEvents: EventDetail[] = [
  {
    id: "1",
    title: "2024 Calender | 10월 뉴스레터에서 신청하세요",
    date: "2023-07-08",
    image: "/lovable-uploads/4ed1a11b-9cd7-4c5b-9991-6adeda1ecdef.png",
    content: "늘을 한마디로 표현하자면 '시트러스의 재해석'이라 생각해요. 일반적으로 '상큼함', '발랄', '가벼움'을 시트러스 계열의 향의 특징으로 떠올리는데, 늘은 레몬과 베르가못, 자몽의 상큼함을 없지 않으면서도 자스민과 프리지아 우아함과 자몽잎을 유지하고, 티트리와 유칼립투스의 싱싱함은 그러니러하되 갖추면서 시간이 지날수록 앰버와 머스크로 포근하게 마무리되기 때문입니다. 조금은 성숙하면서도 차분한, '편안한 자존감'이라 부디 게재된 부담스러운 불들게 주선된답니다. 싱글향을 먹던은 엣설골로 느낌이 디귀는는 날씨에 가장 잘 어울립니다."
  },
  {
    id: "2",
    title: "그랜핸드 온라인 스토어 혜택 안내",
    date: "2023-07-08",
    image: "/lovable-uploads/02ba4942-211a-4df9-bd82-5cb66bd619f8.png",
    content: "그랜핸드 온라인 스토어의 다양한 혜택을 소개합니다..."
  }
];

const EventDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
  const [showShareLink, setShowShareLink] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const event = mockEvents.find(event => event.id === id);
    if (event) {
      setSelectedEvent(event);
    }
  }, [id]);

  const handleShare = () => {
    setShowShareLink(true);
    setLinkCopied(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://grangand.com/evnet/${id}`);
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

  if (!id) {
    return (
      <div className="min-h-screen bg-[#FDFBF4]">
        <header className="flex items-center justify-between px-4 py-3 border-b bg-[#FDFBF4]">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
            <h1 className="text-lg font-medium">EVENT</h1>
          </div>
          <button className="p-2">
            <img 
              src="/lovable-uploads/86242de2-5c97-465b-8736-9e7f545d6a7e.png" 
              alt="Share" 
              className="w-5 h-5 brightness-0" 
            />
          </button>
        </header>

        <div className="space-y-6 p-4">
          {mockEvents.map((event) => (
            <div 
              key={event.id}
              className="space-y-3 cursor-pointer" 
              onClick={() => navigate(`/event/${event.id}`)}
            >
              <img 
                src={event.image}
                alt={event.title}
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
              <div>
                <h2 className="text-base font-medium">{event.title}</h2>
                <p className="text-xs text-gray-400 mt-1">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedEvent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="flex items-center justify-between px-4 py-3 border-b bg-[#FDFBF4]">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
          <h1 className="text-lg font-medium">EVENT</h1>
        </div>
        <button className="p-2" onClick={handleShare}>
          <img 
            src="/lovable-uploads/86242de2-5c97-465b-8736-9e7f545d6a7e.png" 
            alt="Share" 
            className="w-5 h-5 brightness-0" 
          />
        </button>
      </header>

      <div className="p-4">
        <img 
          src={selectedEvent.image}
          alt={selectedEvent.title}
          className="w-full aspect-[4/3] object-cover rounded-sm"
        />
        <h1 className="text-xl font-medium mt-4">{selectedEvent.title}</h1>
        <p className="text-sm text-gray-400 mt-1">{selectedEvent.date}</p>
        
        <div className="mt-6 text-base text-gray-800 whitespace-pre-line leading-relaxed">
          {selectedEvent.content}
        </div>
      </div>

      {showShareLink && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#FDFBF4] border-t p-4">
          <div className="text-sm font-medium mb-3">공유하기</div>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              value={`https://grangand.com/evnet/${id}`}
              readOnly
              className="flex-1 px-3 py-2 text-sm bg-gray-50"
            />
            <button 
              onClick={handleCopyLink}
              className="px-3 py-2 border-l hover:bg-gray-50"
            >
              {linkCopied ? (
                <Check className="w-5 h-5 text-gray-600" />
              ) : (
                <Copy className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
