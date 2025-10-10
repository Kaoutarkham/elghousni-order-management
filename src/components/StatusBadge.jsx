function StatusBadge({ status }) {
  const colors = {
    "En attente": "orange",
    Livré: "green",
    Annulé: "red",
  };
  return (
    <span
      style={{
        backgroundColor: colors[status],
        color: "white",
        padding: "2px 6px",
        borderRadius: "4px",
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
