import React from "react";
import product from "../assets/data/product.js"; 


function ProductSelector({ selectedProducts, setSelectedProducts }) {
  const handleChange = (product, quantity) => {
    const existing = selectedProducts.find((p) => p.id === product.id);
    if (existing) {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.id === product.id ? { ...p, quantity } : p
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity }]);
    }
  };

  return (
    <div className="product-selector">
      {product.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} ({product.price} MAD)
          </span>
          <input
            type="number"
            min="0"
            value={
              selectedProducts.find((p) => p.id === product.id)?.quantity || 0
            }
            onChange={(e) =>
              handleChange(product, parseInt(e.target.value, 10))
            }
          />
        </div>
      ))}
    </div>
  );
}

export default ProductSelector;
