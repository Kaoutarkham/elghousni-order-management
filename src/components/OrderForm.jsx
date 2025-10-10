import React, { useState } from "react";
import ProductSelector from "./ProductSelector";

function OrderForm({ addOrder }) {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || selectedProducts.length === 0) return;

    addOrder({
      clientName,
      clientPhone,
      products: selectedProducts,
    });

    setClientName("");
    setClientPhone("");
    setSelectedProducts([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="nomettelephone">
          <input
            type="text"
            placeholder="Nom du client"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />
        </div>
        <ProductSelector
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        <button type="submit">Ajouter la commande</button>
      </form>
    </div>
  );
}

export default OrderForm;
