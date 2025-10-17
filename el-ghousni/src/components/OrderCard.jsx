import React from "react";
import StatusBadge from "./StatusBadge";
import OrderSummary from "./OrderSummary";

function OrderCard({ order, updateOrderStatus, deleteOrder }) {
  return (
    <div className="order-card">
      <h3>
        {order.clientName} ({order.clientPhone})
      </h3>
      <StatusBadge status={order.status} />
      <OrderSummary products={order.products} />
      <button onClick={() => deleteOrder(order.id)}>Supprimer</button>
      <select
        value={order.status}
        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
      >
        <option>En attente</option>
        <option>Préparée</option>
        <option>Livrée</option>
      </select>
    </div>
  );
}

export default OrderCard;
