import { Check, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data.js';
import Reveal from './ui/Reveal.jsx';
import SectionTitle from './ui/SectionTitle.jsx';
import Chip from './ui/Chip.jsx';

function ProjectCard({ project, small = false }) {
  return (
    <article className={`card projects__card${small ? ' projects__card--small' : ''}`}>
      <div className="projects__media">
        <img src={project.image} alt={project.fullName} loading="lazy" />
        <div className="backdrop" />
        <Chip className="projects__media-tag">{project.name}</Chip>
      </div>

      <div className="projects__body">
        <h3 className="projects__title">
          {project.name} <span className="em">·</span>
        </h3>
        <p className="projects__sub" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {project.role}
        </p>
        <p className="projects__desc">{project.description}</p>

        <ul className="projects__features">
          {project.features.map((f) => (
            <li key={f}>
              <Check />
              {f}
            </li>
          ))}
        </ul>

        <div className="projects__tags">
          {project.tech.map((t) => (
            <Chip plain key={t}>{t}</Chip>
          ))}
        </div>

        <div className="projects__footer">
          <a href={project.href} className="btn btn--primary btn--sm" target="_blank" rel="noreferrer">
            {project.label}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section--soft" id="proyectos">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="02 · Proyectos" title="Trabajo que ya <span class='em'>respira</span>">
            Dos plataformas completas, de la arquitectura a la interfaz. Cada una con retos reales y entregables en producción.
          </SectionTitle>
        </Reveal>

        <div className="projects__grid">
          <Reveal delay={60}>
            <ProjectCard project={PROJECTS[0]} />
          </Reveal>
          <Reveal delay={160}>
            <ProjectCard project={PROJECTS[1]} small />
          </Reveal>
        </div>
      </div>
    </section>
  );
}