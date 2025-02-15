
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AttendanceCheck = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [checkedDates, setCheckedDates] = useState<number[]>([]);
  const [showLuckyDrawDialog, setShowLuckyDrawDialog] = useState(false);
  const [luckyPoints, setLuckyPoints] = useState(0);
  const { toast: shadowToast } = useToast();

  const today = new Date().getDate();

  const handleAttendanceCheck = () => {
    if (checkedDates.includes(today)) {
      toast.message("이미 출석체크를 완료했습니다.", {
        position: "bottom-center",
      });
      return;
    }

    setCheckedDates(prev => [...prev, today]);
    setAttendanceCount(prev => prev + 1);
    setTotalPoints(prev => prev + 500);
    shadowToast({
      title: "출석체크 완료!",
      description: "500포인트가 지급되었습니다.",
      className: "bg-red-500 text-white border-none",
    });
  };

  const handleLuckyDraw = () => {
    const points = 100;
    setLuckyPoints(points);
    setTotalPoints(prev => prev + points);
    setShowLuckyDrawDialog(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/granshop')}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">출석 체크</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
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
              <div key={i} className="text-center py-2 text-sm text-gray-500">{day}</div>
            ))}
            
            {Array(31).fill(null).map((_, i) => {
              const isChecked = checkedDates.includes(i + 1);
              const isToday = i + 1 === today;
              
              return (
                <div 
                  key={i} 
                  className={`text-center py-2 text-sm relative ${
                    isChecked ? 'text-red-500 font-medium' : ''
                  } ${isToday ? 'font-bold' : ''}`}
                >
                  {i + 1}
                  {isChecked && (
                    <div className="absolute -bottom-1 right-1">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="text-center px-4">
                <p className="text-sm text-gray-500">누적 참여 횟수</p>
                <p className="font-medium text-xl mt-1">{attendanceCount} 일</p>
              </div>
              <div className="text-center px-4">
                <p className="text-sm text-gray-500">누적 획득 포인트</p>
                <p className="font-medium text-xl mt-1">{totalPoints}</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
              <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                1주 연속 시 500 포인트 추가 지급
              </div>
            </div>
          </div>

          <Button 
            onClick={handleAttendanceCheck}
            className={`w-full ${
              checkedDates.includes(today)
                ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
                : 'bg-[#2C2C2C] hover:bg-[#1a1a1a]'
            } text-white rounded-none h-12`}
            disabled={checkedDates.includes(today)}
          >
            {checkedDates.includes(today) ? '오늘은 이미 출석완료' : '출석 체크하기'}
          </Button>

          <Button
            onClick={handleLuckyDraw}
            className="w-full bg-white hover:bg-gray-50 text-black border border-gray-300 rounded-none h-12"
          >
            행운 뽑기
          </Button>
        </div>
      </div>

      <Dialog open={showLuckyDrawDialog} onOpenChange={setShowLuckyDrawDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-medium">행운뽑기 완료!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p>{luckyPoints}포인트가 지급되었어요.</p>
            <Button 
              onClick={() => setShowLuckyDrawDialog(false)}
              className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
            >
              포인트 확인
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AttendanceCheck;
