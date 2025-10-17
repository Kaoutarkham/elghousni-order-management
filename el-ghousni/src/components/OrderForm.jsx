import React, { useState } from "react";
import ProductSelector from "./ProductSelector";

function OrderForm({ addOrder }) {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || selectedProducts.length === 0) return;

    const newOrder = {
      id: Date.now(),
      clientName,
      clientPhone,
      products: selectedProducts,
      status: "En attente",
    };

    addOrder(newOrder);
    setClientName("");
    setClientPhone("");
    setSelectedProducts([]);
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <input
        type="text"
        placeholder="Nom du client"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
      />
      <ProductSelector
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <button type="submit">Ajouter Commande</button>
    </form>
  );
}

export default OrderForm;
