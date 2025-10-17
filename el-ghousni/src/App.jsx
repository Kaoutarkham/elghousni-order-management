import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import ProductSelector from "./components/ProductSelector";
import OrderList from "./components/OrderList";
import OrderCard from "./components/OrderCard";
import OrderSummary from "./components/OrderSummary";
import StatusBadge from "./components/StatusBadge";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("Toutes");

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  
  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };
 
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  
  const filteredOrders =
    filter === "Toutes"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="app">
      <h1 className="title">
        🫒 Gestion des Commandes - Coopérative Elghousni
      </h1>
      <p>
        La Coopérative Elghousni produit des huiles d’olive, des produits
        naturels et artisanaux, tout en soutenant les agriculteurs locaux et en
        valorisant les traditions marocaines. 🌿
      </p>

      <OrderForm addOrder={addOrder} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <OrderList
        orders={filteredOrders}
        updateOrderStatus={updateOrderStatus}
        deleteOrder={deleteOrder}
      />

      
      <OrderSummary products={filteredOrders} />
    </div>
  );
}

export default App;
