import React from "react";
import OrderForm from "./components/OrderForm";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="titel">
        🫒 Gestion des Commandes - Coopérative Elghousni
      </h1>
      <p>
        La Coopérative Elghousni produit des huiles d’olive, des produits
        naturels et artisanaux, tout en soutenant les agriculteurs locaux et en
        valorisant les traditions marocaines. 🌿
      </p>
      <OrderForm />
    </div>
  );
}

export default App;
