
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Search, ShoppingBag } from 'lucide-react';
import BottomNavigation from '@/components/common/BottomNavigation';

interface Question {
  id: number;
  text: string;
  options: string[];
  selected?: string;
  isCompleted: boolean;
}

const Guide = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(2);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "어떤 용도로 사용하시나요?",
      options: ["선물할 거예요", "제가 쓸 거예요"],
      isCompleted: false
    },
    {
      id: 2,
      text: "어떤 계절에 맞는 향을 찾으세요?",
      options: ["봄&여름", "가을&겨울", "계절 상관없어요"],
      isCompleted: false
    },
    {
      id: 3,
      text: "원하시는 제질을 선택해 주세요.",
      options: ["플로럴", "프루티", "시트러스", "우디", "그린", "워터리"],
      isCompleted: false
    },
    {
      id: 4,
      text: "원하시는 분위기를 선택해 주세요.",
      options: ["#청순함", "#바캉스", "#봄비", "#코튼", "#홍차", "#우아"],
      isCompleted: false
    }
  ]);

  const handleOptionSelect = (questionId: number, option: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return { ...q, selected: option, isCompleted: true };
      }
      return q;
    }));
  };

  const isAllCompleted = questions.every(q => q.isCompleted);

  const handleSubmit = () => {
    if (isAllCompleted) {
      navigate('/guide/result', { 
        state: { 
          answers: questions.map(q => ({ 
            question: q.text, 
            answer: q.selected 
          })) 
        } 
      });
    }
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 z-10 bg-[#FDFBF4] border-b">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">GUIDE</h1>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 cursor-pointer" onClick={handleSearchClick} />
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <ShoppingBag className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                {cartItemCount}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pb-20">
        <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
          <span className="text-amber-400 text-lg">✨</span>
          <p className="text-sm text-gray-600">원하시는 항목 주제에 들어나서, 아래 항목을 모두 선택해 주세요.</p>
        </div>

        <div className="mt-6 space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="relative pl-6 pb-6">
              <div className="border-b ml-4">
                <div className="flex items-start gap-2 mb-4">
                  <div className="relative mt-1 ml-[-1.75rem]">
                    {question.isCompleted && <Check className="w-4 h-4 text-green-500" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm mb-3">
                      {question.id}. {question.text}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(question.id, option)}
                          className={`px-4 py-2 text-sm border ${
                            question.selected === option 
                              ? 'bg-black text-white' 
                              : 'bg-white text-black'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < questions.length - 1 && question.isCompleted && (
                <div className="absolute left-[10px] bottom-[24px] flex flex-col items-center gap-1">
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {isAllCompleted && (
          <button
            onClick={handleSubmit}
            className="w-full py-3 mt-6 bg-black text-white"
          >
            결과보기
          </button>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Guide;
