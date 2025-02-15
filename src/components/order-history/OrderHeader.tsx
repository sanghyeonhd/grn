
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
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 내역</h1>
      </div>
    </header>
  );
};

export default OrderHeader;
