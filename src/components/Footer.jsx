export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} <span className="footer__brand">Ricardo Medina</span> · Desarrollado con intención
        </span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}