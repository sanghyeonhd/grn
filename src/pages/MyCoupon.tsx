
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const MyCoupon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">나의 쿠폰함</h1>
      </div>
      
      <div className="p-4">
        <div className="text-center py-20 text-gray-500">
          <p>사용 가능한 쿠폰이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MyCoupon;
