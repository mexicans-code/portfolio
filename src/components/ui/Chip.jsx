export default function Chip({ children, plain = false }) {
  return <span className={`chip${plain ? ' chip--plain' : ''}`}>{children}</span>;
}