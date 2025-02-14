
import React from 'react';
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

const DailyMeetingSheet = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <SheetHeader className="mb-8">
        <SheetTitle className="text-center">하루의 모임</SheetTitle>
      </SheetHeader>
      <div className="space-y-4 text-center">
        <img
          src="/lovable-uploads/08cbc960-09de-47a0-8a92-a800b9ba8001.png"
          alt="Daily Meeting"
          className="w-24 h-24 mx-auto"
        />
        <h3 className="font-medium">하루의 모임</h3>
        <p className="text-sm text-gray-500">출석 1개월</p>
      </div>
    </div>
  );
};

export default DailyMeetingSheet;
