import { Mail, Phone, Github, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data.js';
import Reveal from './ui/Reveal.jsx';
import Eyebrow from './ui/Eyebrow.jsx';

export default function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <Eyebrow>05 · Contacto</Eyebrow>
            <h2 className="h-section">
              Hagamos algo que valga la <span className="em">pena</span>
            </h2>
          </div>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={60}>
            <div className="card contact__main">
              <h2>
                ¿Tienes una idea?<br />
                Hablemos <span className="em">ahora</span>
              </h2>
              <p>
                Estoy abierto a colaborar en proyectos full-stack, liderar desarrollos o simplemente a una buena
                conversación técnica.
              </p>
              <div className="hero__cta" style={{ marginBottom: 0, marginTop: 10 }}>
                <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
                  <Mail size={17} />
                  Escríbeme
                </a>
                <a href={PROFILE.github} className="btn btn--ghost" target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="contact__rail" style={{ alignSelf: 'stretch' }}>
            <Reveal delay={140}>
              <a className="card contact__rail-card card--lift" href={`mailto:${PROFILE.email}`}>
                <span className="contact__rail-icon"><Mail /></span>
                <div>
                  <strong>{PROFILE.email}</strong>
                  <span>Correo directo</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a className="card contact__rail-card card--lift" href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>
                <span className="contact__rail-icon"><Phone /></span>
                <div>
                  <strong>{PROFILE.phone}</strong>
                  <span>Teléfono / WhatsApp</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={260}>
              <a className="card contact__rail-card card--lift" href={PROFILE.github} target="_blank" rel="noreferrer">
                <span className="contact__rail-icon"><Github /></span>
                <div>
                  <strong>mexicans-code</strong>
                  <span>GitHub</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}