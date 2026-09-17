import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, MapPin, Github } from 'lucide-react';
import { PROFILE, PROJECTS, ROLES } from '../data.js';

function useTypewriter() {
  const [text, setText] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const role = ROLES[roleIndex.current % ROLES.length];
    let t;
    if (!deleting.current) {
      t = setTimeout(() => {
        setText(role.slice(0, charIndex.current + 1));
        charIndex.current += 1;
        if (charIndex.current === role.length) {
          deleting.current = true;
          t = setTimeout(() => {}, 1400);
        }
      }, 65);
    } else {
      t = setTimeout(() => {
        setText(role.slice(0, charIndex.current - 1));
        charIndex.current -= 1;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current += 1;
        }
      }, 38);
    }
    return () => clearTimeout(t);
  }, [text]);

  return text;
}

export default function Hero() {
  const role = useTypewriter();

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__tag">
            <MapPin size={14} />
            {PROFILE.location}
          </span>

          <h1 className="h-display">
            Ricardo
            <span className="em">&nbsp;Medina</span>
          </h1>

          <div className="hero__roles" aria-live="polite">
            <span>{role}</span>
            <span className="caret" />
          </div>

          <p className="lead hero__lead">{PROFILE.summary}</p>

          <div className="hero__cta">
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos
              <ArrowRight />
            </a>
            <a href="#contacto" className="btn btn--ghost">
              Hablemos
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__avatar">RM</div>
            <div className="hero__meta-text">
              <small>Disponible para proyectos</small>
              <strong>Respuesta rápida · full-time / freelance</strong>
            </div>
            <a href={PROFILE.github} className="hero__github" aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github size={22} style={{ color: 'var(--muted)' }} />
            </a>
          </div>
        </div>

        <div className="hero__bento">
          <div className="hero__bento-card hero__bento-card--main">
            <p className="hero__bento-label">Proyecto destacado</p>
            <p className="hero__bento-title">{PROJECTS[0].fullName}</p>
            <p className="hero__bento-line">{PROJECTS[0].role}</p>
          </div>

          <div className="hero__bento-card">
            <p className="hero__bento-label">Proyecto</p>
            <p className="hero__bento-title">{PROJECTS[1].name}</p>
            <p className="hero__bento-line">{PROJECTS[1].role}</p>
            <a href={PROJECTS[1].href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', marginTop: 12 }}>
              Ver <ChevronRight size={14} />
            </a>
          </div>

          <div className="hero__bento-card hero__bento-card--offset">
            <p className="hero__bento-label">Trayectoria</p>
            <div className="hero__bento-stats">
              {PROFILE.stats.map((s) => (
                <div className="hero__bento-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}