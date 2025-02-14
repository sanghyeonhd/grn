
import React from 'react';
import { Button } from "@/components/ui/button";

const AttendanceCheck = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center space-x-4 mb-8">
        <button className="text-2xl">←</button>
        <h1 className="text-xl font-medium">출석 체크</h1>
      </header>

      <div className="space-y-6">
        <div className="flex space-x-4 border-b border-gray-200">
          <button className="pb-2 border-b-2 border-black font-medium">출석 체크</button>
          <button className="pb-2 text-gray-500">행운 뽑기</button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button>←</button>
            <h2 className="font-medium">2023.08</h2>
            <button>→</button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Calendar header */}
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center py-2 text-sm">{day}</div>
            ))}
            
            {/* Calendar days */}
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
                <p className="font-medium">0 일</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">누적 획득 포인트</p>
                <p className="font-medium">0</p>
              </div>
            </div>

            <p className="text-center text-sm text-[#D25B68]">
              1주 연속 시 500 포인트 추가 지급
            </p>

            <Button 
              className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
            >
              출석 체크하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCheck;
