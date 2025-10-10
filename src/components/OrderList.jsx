import OrderCard from "./OrderCard";

function OrderList({ orders, filter, changeStatus, deleteOrder }) {
  const filtered =
    filter === "Toutes" ? orders : orders.filter((o) => o.status === filter);
  return (
    <div className="order-list">
      {filtered.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          changeStatus={changeStatus}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
}

export default OrderList;
