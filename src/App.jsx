import React from "react";
import "./App.css";


function App() {
  return ( 
    <div className="app-container">
      <h1>🫒 Coopérative Elghousni</h1>
      <p>Bienvenue dans notre catalogue de produit naturels!</p>
      

      {/* Product 1 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Huile d’olive" />
        <h3>Huile d’olive extra vierge</h3>
        <p>Prix: 90 DH / 1L</p>
      </div>

      {/* Product 2 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Olives Beldi naturelles" />
        <h3>Olives Beldi naturelles</h3>
        <p>Prix: 35 DH / kg</p>
      </div>

      {/* Product 3 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Olives Beldi marinées" />
        <h3>Olives Beldi marinées</h3>
        <p>Prix: 40 DH / kg</p>
      </div>

      {/* Product 4 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Tapenade d’olives noires" />
        <h3>Tapenade d’olives noires</h3>
        <p>Prix: 45 DH / 200g</p>
      </div>

      {/* Product 5 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Miel naturel" />
        <h3>Miel naturel</h3>
        <p>Prix: 70 DH / 500g</p>
      </div>

      {/* Product 6 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Savon à l’huile d’olive" />
        <h3>Savon à l’huile d’olive</h3>
        <p>Prix: 25 DH / pièce</p>
      </div>

      {/* Product 7 */}
      <div className="product-card">
        <img src="/assets/react.svg" alt="Confiture artisanale" />
        <h3>Confiture artisanale</h3>
        <p>Prix: 35 DH / 250g</p>
      </div>
    </div>
  );
}

export default App;
