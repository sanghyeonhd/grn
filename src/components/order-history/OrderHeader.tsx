
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface OrderHeaderProps {
  selectedPeriod: string;
  startDate: string;
  endDate: string;
  onPeriodSelect: (period: string) => void;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const OrderHeader = ({
  selectedPeriod,
  startDate,
  endDate,
  onPeriodSelect,
  onStartDateChange,
  onEndDateChange,
}: OrderHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col p-4 border-b">
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 내역</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-medium">최근 1년</div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-sm">
              기간설정
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[400px] p-0 bg-white">
            <div className="space-y-8 px-6 pt-6 pb-10">
              <div className="space-y-6">
                <h2 className="text-lg font-medium">기간설정</h2>
                <div className="grid grid-cols-4 gap-2">
                  {["최근 1년", "1주일", "1개월", "3개월"].map((period) => (
                    <button
                      key={period}
                      className={`h-10 border rounded-sm text-sm ${
                        selectedPeriod === period
                          ? "border-black bg-black text-white"
                          : "border-gray-300"
                      }`}
                      onClick={() => onPeriodSelect(period)}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => onStartDateChange(e.target.value)}
                    className="w-[110px] h-10 border border-gray-300 px-2 rounded-sm text-sm text-center"
                    placeholder="YYYY.MM.DD"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="text"
                    value={endDate}
                    onChange={(e) => onEndDateChange(e.target.value)}
                    className="w-[110px] h-10 border border-gray-300 px-2 rounded-sm text-sm text-center"
                    placeholder="YYYY.MM.DD"
                  />
                </div>
              </div>
              <Button 
                className="w-full h-12 text-white bg-[#2C2C2C] hover:bg-[#1a1a1a] rounded-none"
                onClick={() => {
                  // Add your search logic here
                }}
              >
                조회하기
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default OrderHeader;
