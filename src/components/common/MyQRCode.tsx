
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MyQRCodeProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyQRCode = ({ isOpen, onClose }: MyQRCodeProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-white p-0">
        <div className="relative p-6">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="space-y-4">
            <div className="text-center text-sm text-gray-500">10:48</div>
            <h2 className="text-center text-xl font-medium">나의 QR 코드</h2>
            <div className="flex justify-center py-4">
              <img 
                src="/lovable-uploads/c57c2987-e0a2-4373-8ed1-e82a4c5f8503.png" 
                alt="QR Code" 
                className="w-64 h-64" 
              />
            </div>
            <div className="grid grid-cols-2 pt-4 text-center gap-8">
              <button 
                onClick={() => {
                  onClose();
                  navigate('/coffee-stamp');
                }}
                className="text-center"
              >
                <div className="mb-1">
                  <img 
                    src="/lovable-uploads/112f148b-91f0-4624-bafd-8f3104bdaf7f.png" 
                    alt="Stamp" 
                    className="w-6 h-6 mx-auto" 
                  />
                </div>
                <div className="text-sm">콤프타블 커피<br />스탬프</div>
              </button>
              <button 
                onClick={() => {
                  onClose();
                  navigate('/passport');
                }}
                className="text-center"
              >
                <div className="mb-1">
                  <img 
                    src="/lovable-uploads/cbf25e6c-3fbf-4916-b528-9ef04eaa17a0.png" 
                    alt="Calendar" 
                    className="w-6 h-6 mx-auto" 
                  />
                </div>
                <div className="text-sm">그랑핸드<br />패스포트</div>
              </button>
            </div>
            <div className="text-center text-xs text-gray-400 pt-4">
              스탬프 및 QR 이용안내
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyQRCode;
