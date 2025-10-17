import React from "react";

function StatusBadge({ status }) {
  const colors = {
    "En attente": "orange",
    Préparée: "blue",
    Livrée: "green",
  };
  return (
    <span style={{ color: colors[status], fontWeight: "bold" }}>{status}</span>
  );
}

export default StatusBadge;
