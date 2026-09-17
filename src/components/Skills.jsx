import { GraduationCap } from 'lucide-react';
import { SKILLS, LANGUAGES, INTERESTS, EDUCATION } from '../data.js';
import Reveal from './ui/Reveal.jsx';
import SectionTitle from './ui/SectionTitle.jsx';
import Chip from './ui/Chip.jsx';

export default function Skills() {
  return (
    <section className="section section--soft" id="habilidades">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="04 · Habilidades" title="Un stack pensado para <span class='em'>resolver</span>">
            Lo que uso a diario, cómo me formé y el idioma de mis soluciones.
          </SectionTitle>
        </Reveal>

        <div className="skills__grid">
          <Reveal delay={40} className="skills__card" style={{ gridColumn: 'span 4' }}>
            <h3 className="skills__title">{SKILLS[0].title}</h3>
            <p className="skills__sub">Código</p>
            <div className="skills__items">
              {SKILLS[0].items.map((s) => (
                <span className="skills__item" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="skills__card" style={{ gridColumn: 'span 8' }}>
            <h3 className="skills__title">{SKILLS[1].title}</h3>
            <p className="skills__sub">Plataformas</p>
            <div className="skills__items">
              {SKILLS[1].items.map((s) => (
                <span className="skills__item" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="skills__card" style={{ gridColumn: 'span 5' }}>
            <h3 className="skills__title">Idiomas</h3>
            <p className="skills__sub">Comunicación</p>
            <div className="skills__i18n">
              {LANGUAGES.map((l) => (
                <div key={l.lang}>
                  <div className="skills__i18n-row">
                    <strong>{l.lang}</strong>
                    <span>{l.level}</span>
                  </div>
                  <div className="skills__bar" style={{ '--w': l.pct / 100 }} />
                </div>
              ))}
            </div>
            <div className="skills__items" style={{ marginTop: '24px' }}>
              {INTERESTS.map((i) => (
                <Chip plain key={i}>{i}</Chip>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220} className="skills__card" style={{ gridColumn: 'span 7' }}>
            <h3 className="skills__title">Educación</h3>
            <p className="skills__sub">Formal</p>
            <div style={{ marginTop: '18px' }}>
              {EDUCATION.map((e) => (
                <div className="education__row" key={e.place}>
                  <span className="education__icon"><GraduationCap /></span>
                  <div>
                    <strong>{e.place}</strong>
                    <em>
                      {e.degree}
                      {e.extra ? ` · ${e.extra}` : ''}
                    </em>
                  </div>
                  <span>{e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}