
import React from "react";
import OrderCard from "./OrderCard";

function OrderList({ orders, updateOrderStatus, deleteOrder }) {
  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          updateOrderStatus={updateOrderStatus}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
}

export default OrderList;

