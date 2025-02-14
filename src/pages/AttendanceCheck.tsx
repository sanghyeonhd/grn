
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";

const AttendanceCheck = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const { toast: shadowToast } = useToast();

  const handleAttendanceCheck = () => {
    setAttendanceCount(prev => prev + 1);
    setTotalPoints(prev => prev + 100);
    shadowToast({
      title: "출석체크 완료! 100포인트가 지급되었습니다.",
      className: "bg-red-500 text-white border-none",
    });
  };

  const handleLuckyDraw = () => {
    const points = 100;
    setTotalPoints(prev => prev + points);
    toast.message("행운뽑기 완료!", {
      description: `${points}포인트가 지급되었어요.`,
      position: "bottom-center",
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">출석 체크</h1>
      </header>

      <div className="space-y-6">
        <div className="flex space-x-4 border-b border-gray-200">
          <button className="pb-2 border-b-2 border-black font-medium">출석 체크</button>
          <button className="pb-2 text-gray-500">행운 뽑기</button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-medium">2023.08</h2>
            <button>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center py-2 text-sm">{day}</div>
            ))}
            
            {Array(31).fill(null).map((_, i) => (
              <div key={i} className="text-center py-2 text-sm">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">누적 참여 횟수</p>
                <p className="font-medium">{attendanceCount} 일</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">누적 획득 포인트</p>
                <p className="font-medium">{totalPoints}</p>
              </div>
            </div>

            <p className="text-center text-sm text-[#D25B68]">
              1주 연속 시 500 포인트 추가 지급
            </p>

            <Button 
              onClick={handleAttendanceCheck}
              className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
            >
              출석 체크하기
            </Button>

            <Button
              onClick={handleLuckyDraw}
              className="w-full bg-white hover:bg-gray-50 text-black border border-gray-300 rounded-none h-12"
            >
              행운 뽑기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCheck;
