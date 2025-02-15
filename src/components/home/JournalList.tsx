
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JournalList = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    navigate(`/journal?category=${category.toLowerCase()}`);
  };

  return (
    <section className="px-6 py-8">
      <h2 className="text-sm font-medium mb-6">저널</h2>
      <div className="space-y-6">
        <Link to="/journal/1" className="block">
          <div className="relative aspect-square mb-4">
            <img 
              src="/lovable-uploads/e599283a-a3a2-4e3a-88b8-9a782e14152f.png" 
              alt="NOLL Store" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span 
                className="text-xs cursor-pointer hover:underline"
                onClick={(e) => handleCategoryClick(e, 'Team')}
              >#Team</span>
              <h3 className="text-base font-medium mt-1">NOLL 놀에 대한 모든 것.</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>
        </Link>

        <Link to="/journal/2" className="block">
          <div className="relative aspect-square mb-4">
            <img 
              src="/lovable-uploads/26818efa-30ea-4335-9455-38183496a890.png" 
              alt="Sometimes you win Sometimes you learn" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span 
                className="text-xs cursor-pointer hover:underline"
                onClick={(e) => handleCategoryClick(e, 'Team')}
              >#Team</span>
              <h3 className="text-base font-medium mt-1">여름의 끝에서 팀 그랑핸드가 꼽은 최고의 공포영화 Top 10</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>
        </Link>

        <Link to="/journal/3" className="block">
          <div className="relative aspect-square mb-4">
            <img 
              src="/lovable-uploads/a773021d-65d3-4dde-bb9b-a24d88982a50.png" 
              alt="Green Circle" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span 
                className="text-xs cursor-pointer hover:underline"
                onClick={(e) => handleCategoryClick(e, 'Essay')}
              >#Essay</span>
              <h3 className="text-base font-medium mt-1">초록의 고립 속에서</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>
        </Link>

        <Link to="/journal/4" className="block">
          <div className="relative aspect-square mb-4">
            <img 
              src="/lovable-uploads/2a0cabfd-61ab-4dbf-be41-3b8c9d808e8f.png" 
              alt="One Second Every Day" 
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <span 
                className="text-xs cursor-pointer hover:underline"
                onClick={(e) => handleCategoryClick(e, 'Film')}
              >#Film</span>
              <h3 className="text-base font-medium mt-1">One Second Every Day Off, 2023 Summer</h3>
              <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default JournalList;
