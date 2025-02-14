
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Guide = () => {
  const navigate = useNavigate();
  const [step1Answer, setStep1Answer] = useState<string | null>(null);
  const [step2Answer, setStep2Answer] = useState<string | null>(null);
  const [step3Answer, setStep3Answer] = useState<string | null>(null);
  const [step4Answer, setStep4Answer] = useState<string | null>(null);

  const questions = {
    1: {
      question: "1. 어떤 용도로 사용하시나요?",
      options: ["선물할 거예요", "제가 쓸 거예요"]
    },
    2: {
      question: "2. 어떤 계절에 맞는 향을 찾으세요?",
      options: ["봄&여름", "가을&겨울", "계절 상관없어요"]
    },
    3: {
      question: "3. 원하시는 계열을 선택해 주세요.",
      options: ["플로럴", "프루티", "시트러스", "우디", "그린", "워터리"]
    },
    4: {
      question: "4. 원하시는 분위기를 선택해 주세요.",
      options: ["#청순함", "#활발", "#비강함", "#코튼", "#동차", "#우아"]
    }
  };

  const handleAnswer = (step: number, answer: string) => {
    switch(step) {
      case 1:
        setStep1Answer(answer);
        break;
      case 2:
        setStep2Answer(answer);
        break;
      case 3:
        setStep3Answer(answer);
        break;
      case 4:
        setStep4Answer(answer);
        break;
    }
  };

  const handleResult = () => {
    if (step1Answer && step2Answer && step3Answer && step4Answer) {
      navigate('/guide/result', { 
        state: { 
          answers: {
            step1: step1Answer,
            step2: step2Answer,
            step3: step3Answer,
            step4: step4Answer
          }
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 h-[44px] border-b border-[#EAEAEA]">
        <h1 className="text-[18px] font-bold">GUIDE</h1>
        <div className="flex items-center">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h18v18H3V3z M16 11V7 M8 11V7 M3 11h18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#F3BA00] text-sm mb-8">
          ✓ 원하시는 향을 주관적 도움되니, 여러 향목을 모두 선택해 주세요.
        </p>

        {/* 질문 1 */}
        <div className="mb-8">
          <h2 className="text-base mb-4">{questions[1].question}</h2>
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
            {questions[1].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(1, option)}
                className={`px-3 py-1.5 rounded-full text-xs flex-shrink-0 ${
                  step1Answer === option
                    ? 'bg-black text-white'
                    : 'bg-[#F5F5F5] text-black'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* 질문 2 - 질문 1에 답변했을 때만 표시 */}
        {step1Answer && (
          <div className="mb-8">
            <h2 className="text-base mb-4">{questions[2].question}</h2>
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
              {questions[2].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(2, option)}
                  className={`px-3 py-1.5 rounded-full text-xs flex-shrink-0 ${
                    step2Answer === option
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F5] text-black'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 질문 3 - 질문 2에 답변했을 때만 표시 */}
        {step2Answer && (
          <div className="mb-8">
            <h2 className="text-base mb-4">{questions[3].question}</h2>
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
              {questions[3].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(3, option)}
                  className={`px-3 py-1.5 rounded-full text-xs flex-shrink-0 ${
                    step3Answer === option
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F5] text-black'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 질문 4 - 질문 3에 답변했을 때만 표시 */}
        {step3Answer && (
          <div className="mb-8">
            <h2 className="text-base mb-4">{questions[4].question}</h2>
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
              {questions[4].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(4, option)}
                  className={`px-3 py-1.5 rounded-full text-xs flex-shrink-0 ${
                    step4Answer === option
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F5] text-black'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 결과 보기 버튼 - 모든 질문에 답변했을 때만 표시 */}
        {step4Answer && (
          <button
            onClick={handleResult}
            className="w-full py-4 text-center border border-black text-black mt-8"
          >
            결과보기
          </button>
        )}
      </div>
    </div>
  );
};

export default Guide;
