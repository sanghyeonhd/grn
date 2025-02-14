
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AddressForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    isDefault: false,
    name: '',
    receiver: '',
    phone: '',
    address: '',
    addressDetail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the address
    navigate('/address/list');
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

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="space-y-1">
          <label className="block text-sm">
            <input
              type="checkbox"
              checked={form.isDefault}
              onChange={(e) => setForm({ ...form, isDefault: e.target.checked })}
              className="mr-2"
            />
            기본 배송지
          </label>
        </div>

        <div className="space-y-1">
          <label className="block text-sm">배송지명</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="배송지명을 입력해 주세요."
            className="w-full p-3 border rounded-sm text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">받는 분</label>
          <input
            type="text"
            value={form.receiver}
            onChange={(e) => setForm({ ...form, receiver: e.target.value })}
            placeholder="성함을 입력해 주세요."
            className="w-full p-3 border rounded-sm text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">연락처</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="연락처를 입력해 주세요."
            className="w-full p-3 border rounded-sm text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">주소</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={form.address}
              placeholder="우편번호 찾기"
              readOnly
              className="flex-1 p-3 border rounded-sm text-sm bg-gray-50"
            />
            <button type="button" className="px-4 py-3 bg-[#2C2C2C] text-white rounded-sm text-sm">
              검색
            </button>
          </div>
          <input
            type="text"
            value={form.addressDetail}
            onChange={(e) => setForm({ ...form, addressDetail: e.target.value })}
            placeholder="상세주소를 입력해 주세요."
            className="w-full p-3 border rounded-sm text-sm"
          />
        </div>
      </form>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[#2C2C2C] text-white rounded-sm"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
