
import React from "react";

function FilterBar({ filter, setFilter }) {
  const statuses = ["Toutes", "En attente", "Préparée", "Livrée"];

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          style={{
            margin: "0 5px",
            padding: "8px 15px",
            backgroundColor: filter === status ? "#042e06" : "#e0e0e0",
            color: filter === status ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

