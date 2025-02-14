
import { X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface ReasonStepProps {
  reason: string;
  setReason: (reason: string) => void;
  reasonDetail: string;
  setReasonDetail: (detail: string) => void;
}

const ReasonStep = ({ reason, setReason, reasonDetail, setReasonDetail }: ReasonStepProps) => {
  return (
    <div className="p-4">
      <div className="mb-4">교환/반품 사유를 선택해 주세요.</div>
      <RadioGroup 
        value={reason} 
        onValueChange={setReason}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason1" id="reason1" />
          <label htmlFor="reason1" className="text-sm">상품이 마음에 들지 않아요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason2" id="reason2" />
          <label htmlFor="reason2" className="text-sm">옵션을 잘못 선택했어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason3" id="reason3" />
          <label htmlFor="reason3" className="text-sm">상품에 이상이 있거나 파손되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason4" id="reason4" />
          <label htmlFor="reason4" className="text-sm">일부 상품이 누락되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason5" id="reason5" />
          <label htmlFor="reason5" className="text-sm">다른 상품이 배송되었어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason6" id="reason6" />
          <label htmlFor="reason6" className="text-sm">배송된 장소에 상품이 없어요.</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reason7" id="reason7" />
          <label htmlFor="reason7" className="text-sm">다른 주소로 오배송되었어요.</label>
        </div>
      </RadioGroup>

      <div className="mt-6">
        <div className="text-sm mb-2">상세 설명 *</div>
        <Input
          placeholder="다른 주소로 오배송 되었어요 ㅠㅠ"
          value={reasonDetail}
          onChange={(e) => setReasonDetail(e.target.value)}
          className="h-24 resize-none"
        />
        <div className="text-right text-sm text-gray-400 mt-1">10/100</div>
      </div>

      <div className="mt-6">
        <div className="text-sm mb-2">사진(1/3)</div>
        <div className="flex gap-2">
          <button className="w-20 h-20 border flex items-center justify-center">
            <X className="w-6 h-6 text-gray-400" />
          </button>
          <button className="w-20 h-20 border flex items-center justify-center">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonStep;
