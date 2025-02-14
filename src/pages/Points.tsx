
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Points = () => {
  const navigate = useNavigate();

  const pointHistory = [
    {
      id: 1,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '구매확정 적립',
      points: '+700',
      expireDate: '2029.01.09까지 사용 가능'
    },
    {
      id: 2,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '출석 체크',
      points: '+100',
      expireDate: '2029.01.09까지 사용 가능'
    },
    {
      id: 3,
      date: '2024.01.01',
      time: 'PM 04:00',
      type: '그랑핸드',
      title: '행운 뽑기',
      points: '+5,000',
      expireDate: '2029.01.09까지 사용 가능'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">포인트</h1>
      </div>

      <div className="p-4 bg-white">
        <div className="mb-8">
          <p className="text-sm text-gray-600">포인트</p>
          <p className="text-[32px] font-bold">13,900</p>
          <p className="text-sm text-gray-600">이번 달 소멸 예정 포인트 <span className="text-black">0</span></p>
        </div>

        <div>
          <div className="flex border-b">
            <button className="flex-1 py-3 text-sm border-b-2 border-black">전체</button>
            <button className="flex-1 py-3 text-sm text-gray-400">적립</button>
            <button className="flex-1 py-3 text-sm text-gray-400">사용</button>
            <button className="flex-1 py-3 text-sm text-gray-400">소멸</button>
          </div>

          <div className="mt-4 space-y-4">
            {pointHistory.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                  <span>·</span>
                  <span>{item.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.expireDate}</p>
                  </div>
                  <p className="text-lg font-medium">{item.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
