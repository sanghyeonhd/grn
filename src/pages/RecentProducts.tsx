
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/order";

const RecentProducts = () => {
  const navigate = useNavigate();

  const recentProducts: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png"
    },
    {
      id: "2",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png"
    },
    {
      id: "3",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png"
    },
    {
      id: "4",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white border-b">
        <div className="flex items-center h-12">
          <button onClick={() => navigate(-1)} className="px-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">최근 본 상품</h1>
        </div>
      </header>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {recentProducts.map((product) => (
            <div key={product.id} className="space-y-2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <div>
                <div className="text-sm text-gray-500">{product.brand}</div>
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-gray-500">{product.option}</div>
                <div className="font-medium">{product.price.toLocaleString()} KRW</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
