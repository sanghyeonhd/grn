
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Partnership = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    title: '',
    content: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: "개인정보 수집 및 이용 동의가 필요합니다.",
        variant: "destructive",
      });
      return;
    }
    // 여기에 제출 로직 추가
    toast({
      title: "문의가 등록되었습니다.",
    });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">제휴 문의하기</h1>
          <button onClick={() => navigate(-1)} className="text-gray-400">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-6">
          개인 및 기업의 대량구매 문의는 <span className="text-[#8B6544]">대량구매 신청서</span>를 통해 접수해주시기 바랍니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">
              성함<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="성함을 입력해 주세요."
              className="w-full p-3 border rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              휴대폰 번호<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="연락처를 입력해 주세요."
              className="w-full p-3 border rounded-md"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              이메일 주소<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해 주세요."
              className="w-full p-3 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              제목<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="제목을 입력해 주세요. (최대 40자)"
              className="w-full p-3 border rounded-md"
              maxLength={40}
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              내용<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="내용을 입력해주세요."
              className="w-full p-3 border rounded-md h-[200px] resize-none"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              required
            />
            <div className="flex justify-between items-center mt-2">
              <button
                type="button"
                className="w-[86px] h-[26px] bg-[#E9E6E0] rounded text-sm"
              >
                첨부파일
              </button>
              <span className="text-sm text-gray-400">
                {formData.content.length}/1000
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              className="w-5 h-5 border rounded mr-2"
              checked={formData.agreement}
              onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              (필수) 개인정보 수집 및 이용 동의
            </label>
            <button type="button" className="ml-auto text-gray-400">
              &gt;
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#DED7D1] text-white rounded-md mt-6"
          >
            문의하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Partnership;
