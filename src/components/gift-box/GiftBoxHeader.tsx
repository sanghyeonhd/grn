
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GiftBoxHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <button onClick={() => navigate(-1)}>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-medium">선물함</h1>
    </header>
  );
};

export default GiftBoxHeader;
