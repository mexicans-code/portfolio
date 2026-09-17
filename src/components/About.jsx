import { Code2, Layers, Sparkles } from 'lucide-react';
import { PROFILE } from '../data.js';
import Reveal from './ui/Reveal.jsx';
import Eyebrow from './ui/Eyebrow.jsx';

const ICONS = { code: Code2, layers: Layers, spark: Sparkles };

export default function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <Eyebrow>01 · Sobre mí</Eyebrow>
            <h2 className="h-section">
              Ingeniero full-stack que piensa en <span className="em">producto</span>
            </h2>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={60}>
            <div>
              <p className="about__bigtext">
                {PROFILE.pitch} Cada línea tiene un <span className="em">por qué</span> detrás.
              </p>
              <div className="about__copy">
                <p>
                  Soy Ricardo Medina, ingeniero en Desarrollo y Gestión de Software Multiplataforma por la UTEQ.
                  He liderado y construido plataformas completas — de turismo, e-commerce y móviles — donde cuidé
                  tanto la arquitectura como la experiencia de quien la usa.
                </p>
                <p>
                  Hoy me enfoco en crear soluciones {` `}
                  <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>end-to-end con React, Node.js y bases de datos modernas</strong>
                  , con especial gusto por los detalles de diseño que hacen que un producto se sienta profesional.
                </p>
              </div>

              <div className="about__stats">
                {PROFILE.stats.map((s) => (
                  <div className="about__stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="about__panel">
              <p className="about__panel-title">Lo que traigo a la mesa</p>
              {PROFILE.pillars.map((p) => {
                const Icon = ICONS[p.icon] || Code2;
                return (
                  <div className="about__pillar" key={p.title}>
                    <span className="about__pillar-icon"><Icon /></span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}