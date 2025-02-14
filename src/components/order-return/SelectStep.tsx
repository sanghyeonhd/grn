
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/types/order";

interface SelectStepProps {
  products: Product[];
}

const SelectStep = ({ products }: SelectStepProps) => {
  return (
    <div className="p-4">
      <div className="mb-4">교환/반품 상품을 선택해 주세요.</div>
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
                      <div className="w-20 text-sm text-gray-500">스탬핑 여부</div>
                      <div className="flex-1 text-sm">{product.stampingType}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <div className="font-medium text-black mb-2">교환/반품 유의사항</div>
        <ul className="space-y-1">
          <li>• 상품은 판매 상태 그대로 재포장해 주세요.</li>
          <li>• 제품 수령일로부터 7일간의 기간 이내 접수한 경우 교환/반품이 가능합니다.</li>
          <li>• 개봉 봉투 및 오메송장 장수 제품 상태에 상관없이 교환/반품이 가능합니다.</li>
          <li>• 단순 변심으로 인한 교환/반품의 경우 반품 배송비는 고객님 부담입니다.</li>
          <li>• 제품 포장 및 박스에 스티커가 제품과 함께 돌려 볼로 떨어지기 쉽고, 핸드크림 식사,<br />사식 배달 등)</li>
          <li>• 스팸핑 서비스를 받은 제품의 경우(갤러리아몰, 더류자, 현동) 불가능합니다.</li>
          <li>• 교환 및 환불 가능 여부 확인을 위해 상품 촬영 필수입니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectStep;
