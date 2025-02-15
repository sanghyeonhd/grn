
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Share } from 'lucide-react';

const categories = [
  { id: 1, name: 'All', slug: 'all' },
  { id: 2, name: 'News', slug: 'news' },
  { id: 3, name: 'Culture', slug: 'culture' },
  { id: 4, name: 'Life', slug: 'life' },
  { id: 5, name: 'Team', slug: 'team' },
  { id: 6, name: 'Essay', slug: 'essay' },
  { id: 7, name: 'Film', slug: 'film' },
];

const JournalDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = React.useState('team');

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
  };

  const renderContent = () => {
    if (id === '1') {
      return (
        <div className="space-y-4">
          <img 
            src="/lovable-uploads/cce81abf-8c93-4001-89c7-940c7e5a84d8.png"
            alt="NOLL Store Interior"
            className="w-full"
          />
          <div className="px-4">
            <p className="text-sm text-gray-500">#Team</p>
            <h2 className="text-xl font-medium mb-1">NOLL 놀에 대한 모든 것.</h2>
            <p className="text-sm text-gray-500">2023-07-08 조회 412</p>
            
            <div className="mt-6 space-y-4 text-gray-800">
              <p>'놀'은 작년 크리스마스에 출시된 그랜핸드의 새로운 라인인 '피험 라인'의 새끼집 향 중 하나입니다. 가장 최근에 선보인 따끈한 향이에요.</p>
              <p>잣곡에 버들숲을 노랗게로 진해지는 석을 알아니 바라보다 버린 새벽이 난 두 구름으로 들리던다. 낮정고에 거는 체론을 가네 있에 램이 뒤귀 뒤에 잣곡에 물담했다.</p>
            </div>
          </div>
        </div>
      );
    }

    if (activeCategory === 'news') {
      return (
        <div className="space-y-6 px-4 mt-4">
          <div 
            className="relative aspect-square cursor-pointer" 
            onClick={() => navigate('/journal/1')}
          >
            <img 
              src="/lovable-uploads/e599283a-a3a2-4e3a-88b8-9a782e14152f.png" 
              alt="NOLL Store" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span className="text-xs">#Team</span>
              <h3 className="text-base font-medium mt-1">NOLL 놀에 대한 모든 것.</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>

          <div className="relative aspect-square">
            <img 
              src="/lovable-uploads/26818efa-30ea-4335-9455-38183496a890.png" 
              alt="Sometimes you win Sometimes you learn" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span className="text-xs">#Team</span>
              <h3 className="text-base font-medium mt-1">여름의 끝에서 틸 그랑핸드가 꼽은 최고의 공포영화 Top 10</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>

          <div className="relative aspect-square">
            <img 
              src="/lovable-uploads/a773021d-65d3-4dde-bb9b-a24d88982a50.png" 
              alt="Green Circle" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span className="text-xs">#Essay</span>
              <h3 className="text-base font-medium mt-1">초록의 고리 속에서</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>

          <div className="relative aspect-square">
            <img 
              src="/lovable-uploads/2a0cabfd-61ab-4dbf-be41-3b8c9d808e8f.png" 
              alt="One Second Every Day" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span className="text-xs">#Film</span>
              <h3 className="text-base font-medium mt-1">One Second Every Day Off, 2023 Summer</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
          <h1 className="text-lg font-medium">JOURNAL</h1>
        </div>
        <button className="p-2">
          <Share className="w-5 h-5" />
        </button>
      </header>

      <nav className="flex space-x-4 px-4 py-3 overflow-x-auto whitespace-nowrap border-b">
        {categories.map((category) => (
          <button 
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={`text-sm transition-colors ${
              activeCategory === category.slug 
                ? 'text-black font-medium' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {renderContent()}
    </div>
  );
};

export default JournalDetail;
