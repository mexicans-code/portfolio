import { EXPERIENCE } from '../data.js';
import Reveal from './ui/Reveal.jsx';
import SectionTitle from './ui/SectionTitle.jsx';

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="03 · Experiencia" title="Un recorrido que <span class='em'>construye</span>">
            Del e-commerce con pagos reales hasta el IoT embebido: proyectos que mezclan código, equipo y decisiones.
          </SectionTitle>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.title} delay={i * 80} className="timeline__item">
              <span className="timeline__dot" />
              <article className="card timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{job.title}</h3>
                    <span className="timeline__company">{job.company}</span>
                  </div>
                  <span className="timeline__date">{job.period}</span>
                </div>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}