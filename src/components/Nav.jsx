import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">RM</span>
          Ricardo<span className="em">&nbsp;Medina</span>
        </a>

        <nav aria-label="Principal">
          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a className="nav__link" href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav__status" href="mailto:2023171035@uteq.edu.mx">Disponible</a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}>
        <button className="nav__burger" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>

      <div className="nav__progress" style={{ width: `${progress}%` }} />
    </header>
  );
}