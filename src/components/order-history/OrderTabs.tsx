
interface OrderTabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const OrderTabs = ({ selectedTab, onTabChange }: OrderTabsProps) => {
  return (
    <div className="flex gap-4 p-4 border-b">
      <button 
        className={`text-sm ${selectedTab === "전체" ? "font-medium" : "text-gray-500"}`}
        onClick={() => onTabChange("전체")}
      >
        전체
      </button>
      <button 
        className={`text-sm ${selectedTab === "최근 1년" ? "font-medium" : "text-gray-500"}`}
        onClick={() => onTabChange("최근 1년")}
      >
        최근 1년
      </button>
    </div>
  );
};

export default OrderTabs;
