import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallengeGrid from '@/components/challenge/ChallengeGrid';
import DailyMeetingSheet from '@/components/challenge/DailyMeetingSheet';

const Challenge = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("unowned");

  const unownedChallenges = [
    { id: 1, name: "마음의 양기", icon: "🔒", count: 0 },
    { id: 2, name: "향기로운 기록", icon: "🛍️", count: 0, date: "2023.01.01" },
    { id: 3, name: "하루의 모임", icon: "🌟", count: 0, date: "2023.01.01" },
    { id: 4, name: "사계의 흔적", icon: "🔒", count: 0 },
    { id: 5, name: "한 해의 향", icon: "🔒", count: 0 },
    { id: 6, name: "첫 경음", icon: "🔒", count: 0 },
    { id: 7, name: "첫 향의 여정", icon: "🔒", count: 0 },
    { id: 8, name: "온은한 여운", icon: "🔒", count: 0 },
    { id: 9, name: "향금의 향기", icon: "🔒", count: 0 },
    { id: 10, name: "특별한 존재", icon: "🔒", count: 0 },
    { id: 11, name: "향의 문을 열다", icon: "📝", count: 0 },
    { id: 12, name: "커피 속의 진향", icon: "🔒", count: 0 }
  ];

  const ownedChallenges = [
    { id: 2, name: "향기로운 기록", icon: "🛍️", count: 1, date: "2023.01.01" },
    { id: 3, name: "하루의 모임", icon: "🌟", count: 1, date: "2023.01.01" },
    { id: 11, name: "향의 문을 열다", icon: "📝", count: 1, date: "2023.01.01" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 bg-[#FDFBF4] border-b">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">챌린지</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="px-4">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="unowned" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-auto p-0">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:border-b-2 border-black py-3 rounded-none"
            onClick={() => setTab("all")}
          >
            전체
          </TabsTrigger>
          <TabsTrigger 
            value="unowned" 
            className="data-[state=active]:border-b-2 border-black py-3 rounded-none"
            onClick={() => setTab("unowned")}
          >
            미보유
          </TabsTrigger>
          <TabsTrigger 
            value="owned" 
            className="data-[state=active]:border-b-2 border-black py-3 rounded-none"
            onClick={() => setTab("owned")}
          >
            보유
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ChallengeGrid challenges={[...unownedChallenges, ...ownedChallenges]} />
        </TabsContent>
        <TabsContent value="unowned">
          <ChallengeGrid challenges={unownedChallenges} />
        </TabsContent>
        <TabsContent value="owned">
          <ChallengeGrid challenges={ownedChallenges} />
        </TabsContent>
      </Tabs>

      <Sheet>
        <SheetTrigger asChild>
          <button className="sr-only">Open Daily Meeting</button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <DailyMeetingSheet />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Challenge;
