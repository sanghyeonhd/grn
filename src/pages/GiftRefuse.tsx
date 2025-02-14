
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  option: string;
  shoppingBag: string;
  stampingType: string;
  image: string;
}

const GiftRefuse = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35500,
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      shoppingBag: "추가 구매 (+500원)",
      stampingType: "Y",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    },
    {
      id: "2",
      brand: "GRANHAND",
      name: "Cask Signature Perfume",
      price: 110000,
      option: "캐스크 시그니처퍼퓸 100ml / 1개",
      shoppingBag: "추가 구매 (+500원)",
      stampingType: "GRANHAND❤️",
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="flex items-center h-12">
          <button 
            onClick={() => navigate(-1)}
            className="px-4"
          >
            <X className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">주문 취소</h1>
        </div>
        <div className="flex">
          <button className="flex-1 py-3 border-b-2 border-black">
            상품 선택
          </button>
          <button className="flex-1 py-3 text-gray-400">
            사유 작성
          </button>
          <button className="flex-1 py-3 text-gray-400">
            취소 정보 확인
          </button>
        </div>
      </header>

      <div className="p-4">
        <div className="mb-4">취소 상품을 선택해 주세요.</div>

        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex gap-3">
              <Checkbox id={`product-${product.id}`} className="mt-1" />
              <div className="flex-1">
                <div className="text-sm text-gray-500">{product.brand}</div>
                <div className="mt-1 flex gap-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{product.name}</div>
                    <div className="font-medium">{product.price.toLocaleString()}원</div>
                    <div className="mt-4 space-y-1">
                      <div className="flex">
                        <div className="w-20 text-sm text-gray-500">옵션</div>
                        <div className="flex-1 text-sm">{product.option}</div>
                      </div>
                      <div className="flex">
                        <div className="w-20 text-sm text-gray-500">쇼핑백</div>
                        <div className="flex-1 text-sm">{product.shoppingBag}</div>
                      </div>
                      <div className="flex">
                        <div className="w-20 text-sm text-gray-500">스탬핑 문구</div>
                        <div className="flex-1 text-sm">{product.stampingType}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="text-sm font-medium mb-2">취소 정책 안내사항</div>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• 상품이 준비되어 배송 예정일 정도 취소가 가능할 거예요.</li>
            <li>• 주문 제작 상품은 취소가 불가능해요.</li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button className="w-full py-3 text-white bg-[#2C2C2C]">
          다음
        </button>
      </div>
    </div>
  );
};

export default GiftRefuse;
