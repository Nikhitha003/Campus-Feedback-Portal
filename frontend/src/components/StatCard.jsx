const StatCard = ({ label, value, accent = "gold" }) => {
  return (
    <article className={`stat-card stat-card-${accent}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
};

export default StatCard;
