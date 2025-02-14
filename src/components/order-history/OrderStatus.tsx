
const OrderStatus = () => {
  return (
    <div className="grid grid-cols-5 py-4 text-center text-sm border-b">
      <div>
        <div>1</div>
        <div className="text-gray-500">입금/결제</div>
      </div>
      <div>
        <div>0</div>
        <div className="text-gray-500">배송준비</div>
      </div>
      <div>
        <div>0</div>
        <div className="text-gray-500">배송중</div>
      </div>
      <div>
        <div>1</div>
        <div className="text-gray-500">배송완료</div>
      </div>
      <div>
        <div>17</div>
        <div className="text-gray-500">구매확정</div>
      </div>
    </div>
  );
};

export default OrderStatus;
