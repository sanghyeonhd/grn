
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";

const AddressForm = () => {
  const navigate = useNavigate();
  const [isDefault, setIsDefault] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    detailAddress: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 주소 저장 로직 추가
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">배송지 입력</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="default"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="default" className="text-sm">기본 배송지</label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm mb-1 block">배송지명</label>
            <Input
              placeholder="배송지명을 입력해 주세요."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">받는 분</label>
            <Input
              placeholder="성함을 입력해 주세요."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">연락처</label>
            <Input
              placeholder="연락처를 입력해 주세요."
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">주소</label>
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="우편번호"
                className="flex-1"
                readOnly
              />
              <button
                type="button"
                className="px-4 py-2 bg-black text-white text-sm rounded-sm"
              >
                검색
              </button>
            </div>
            <Input
              placeholder="상세주소를 입력해 주세요."
              value={form.detailAddress}
              onChange={(e) => setForm({ ...form, detailAddress: e.target.value })}
              className="mb-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="fixed bottom-0 left-0 right-0 py-4 bg-black text-white text-sm"
        >
          저장
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
