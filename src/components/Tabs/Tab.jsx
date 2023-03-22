export default function Tab({ children, isActive, event }) {
  return (
    <button className={`tab${isActive ? " tab--active" : ""}`} onClick={event}>
      {children}
    </button>
  );
}
