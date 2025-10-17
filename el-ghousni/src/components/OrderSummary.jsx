import React from "react";

function OrderSummary({ products }) {
 
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const showTotal = () => {
    alert(`Total: ${total} MAD`);
  };

  return (
    <div className="order-summary">
      {products.map((p) => (
        <div key={p.id}>
          {p.name} x {p.quantity} = {p.price * p.quantity} MAD
        </div>
      ))}

      <strong>Total: {total} MAD</strong>
      <br />

      <button onClick={showTotal}>Show Total</button>
    </div>
  );
}

export default OrderSummary;
