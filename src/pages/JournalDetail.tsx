import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share } from 'lucide-react';
const JournalDetail = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
          <h1 className="text-lg font-medium">JOURNAL</h1>
        </div>
        <button className="p-2">
          <Share className="w-5 h-5" />
        </button>
      </header>

      <nav className="flex space-x-4 px-4 py-3 overflow-x-auto whitespace-nowrap">
        {['All', 'News', 'Culture', 'Life', 'Team', 'Essay', 'Film'].map(tab => <button key={tab} className="text-sm text-gray-600 hover:text-black">
            {tab}
          </button>)}
      </nav>

      <div className="space-y-4">
        <img src="/public/lovable-uploads/5543f85b-0d24-4ab3-a996-08c599742a75.png" alt="Journal detail" className="w-full h-64 object-cover" />
        <div className="px-4">
          <p className="text-sm text-gray-500">#Team</p>
          <h2 className="text-xl font-medium mb-1">NOLL 놀에 대한 모든 것.</h2>
          <p className="text-sm text-gray-500">2023-07-08 조회 412</p>
          
          <div className="mt-6 space-y-4 text-gray-800">
            <p>'놀'은 작년 크리스마스에 출시된 그랜핸드의 새로운 라인인 '피험 라인'의 새끼집 향 중 하나입니다. 가장 최근에 보낸다 따끈한 향이에요.</p>
            
          </div>
        </div>
      </div>
    </div>;
};
export default JournalDetail;