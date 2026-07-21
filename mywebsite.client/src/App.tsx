import './App.css';

const services = [
  {
    num: '01',
    title: 'Websites für Unternehmen',
    desc: 'Moderne, schnelle Websites und Landing Pages, die Ihre Marke professionell präsentieren und aus Besuchern Kunden machen.',
    points: ['Individuelles Design', 'Performance & SEO', 'Responsive auf jedem Gerät'],
  },
  {
    num: '02',
    title: 'Web-Apps & SaaS',
    desc: 'Massgeschneiderte Web-Applikationen und SaaS-Produkte, von der Architektur über das Interface bis zum fertigen Produkt.',
    points: ['React & TypeScript', '.NET Backend', 'Datenbank & API'],
  },
  {
    num: '03',
    title: 'Automatisierung & Tools',
    desc: 'Ich automatisiere wiederkehrende Abläufe und entwickle interne Tools, die Zeit sparen und Fehler vermeiden.',
    points: ['ETL & Datenpipelines', 'Schnittstellen', 'Interne Werkzeuge'],
  },
  {
    num: '04',
    title: 'Betrieb & Wartung',
    desc: 'Hosting, Updates und laufende Betreuung. Ihre Anwendung bleibt sicher, aktuell und zuverlässig schnell.',
    points: ['Hosting & Deployment', 'Updates & Monitoring', 'Laufender Support'],
  },
];

const steps = [
  { num: '01', title: 'Erstgespräch', desc: 'Wir klären Ziele, Umfang und Budget in einem unverbindlichen Gespräch.' },
  { num: '02', title: 'Konzept & Angebot', desc: 'Sie erhalten ein klares Konzept mit Zeitplan und transparentem Festpreis.' },
  { num: '03', title: 'Umsetzung', desc: 'Entwicklung in engem Austausch, mit regelmässigen Zwischenständen zum Mitverfolgen.' },
  { num: '04', title: 'Launch & Betrieb', desc: 'Sauberer Go-live, saubere Übergabe und auf Wunsch die laufende Betreuung danach.' },
];

const projects = [
  {
    name: 'XGBoost Pattern Classifier',
    desc: 'Machine-Learning-System zur Mustererkennung in hochfrequenten Zeitreihen. Ein XGBoost-Klassifikator wertet 98 selbst berechnete Features aus und liefert seine Vorhersagen in Echtzeit an ein Dashboard.',
    tags: ['Machine Learning', 'XGBoost', 'Python'],
    url: 'https://github.com/JODI96/TraderXGBoost',
  },
  {
    name: 'OrderFlow RL Agent',
    desc: 'Deep-Learning-System, das Echtzeit-Datenströme über WebSocket verarbeitet. Es kombiniert ein Double DQN mit einem LSTM-Netzwerk und einer sauberen Verarbeitung grosser Datenmengen.',
    tags: ['PyTorch', 'Reinforcement Learning', 'WebSocket'],
    url: 'https://github.com/JODI96/Trader',
  },
  {
    name: 'ravecheller',
    desc: 'Discord-Bot zur Verwaltung mehrerer Game-Server über Chat-Befehle. Server starten, stoppen und updaten direkt aus Discord, ganz ohne SSH.',
    tags: ['Automation', 'discord.py', 'Linux'],
    url: 'https://github.com/JODI96/ravecheller',
  },
  {
    name: 'TKI',
    desc: 'Interaktives Lernspiel für Programmiereinsteiger. Story-getriebene Levels führen durch praktisches Debuggen und vermitteln die Grundlagen des Codens.',
    tags: ['Pygame', 'Education', 'Game Dev'],
    url: 'https://github.com/JODI96/TKI',
  },
];

const stack = ['React', 'TypeScript', '.NET / C#', 'Node.js', 'SQL / MariaDB', 'Vite', 'REST APIs', 'Python'];

function App() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />

      {/* ── NAV ─────────────────────────── */}
      <nav>
        <div className="nav-inner container">
          <a href="#hero" className="nav-brand">
            Joys Di Giorgio<span className="brand-dot">.</span>
          </a>
          <ul className="nav-links">
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#ablauf">Ablauf</a></li>
            <li><a href="#projekte">Projekte</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
          <a href="#kontakt" className="btn btn-primary nav-cta">Projekt anfragen</a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────── */}
      <header id="hero" className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-status">
              <span className="status-dot" /> Verfügbar für neue Projekte
            </span>
            <h1 className="hero-title">
              Websites und Software, die Ihr Unternehmen{' '}
              <span className="accent">weiterbringen</span>.
            </h1>
            <p className="hero-lead">
              Ich bin Joys Di Giorgio, freischaffender Software Engineer aus dem Raum Zürich.
              Ich entwickle professionelle Websites, Web-Apps und Automatisierungen, von der
              ersten Idee bis zum laufenden Betrieb.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary">Projekt anfragen</a>
              <a href="#leistungen" className="btn btn-ghost">Leistungen ansehen</a>
            </div>
            <div className="hero-meta">
              <span>Raum Zürich, Schweiz</span>
              <span className="dot-sep" />
              <span>Remote &amp; vor Ort</span>
              <span className="dot-sep" />
              <span>Deutsch &amp; Englisch</span>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <img src="/foto.jpg" alt="Joys Di Giorgio" />
            </div>
          </div>
        </div>
      </header>

      {/* ── LEISTUNGEN ──────────────────── */}
      <section id="leistungen">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow"><span className="eyebrow-num">01</span> Leistungen</span>
            <h2 className="section-title">Alles aus einer Hand, von der Idee bis zum Betrieb.</h2>
            <p className="section-lead">
              Vier klar umrissene Leistungen. Wählen Sie einzeln oder lassen Sie mich Ihr Projekt
              vollständig übernehmen.
            </p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <article key={s.num} className="service-card">
                <span className="service-num">{s.num}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-points">
                  {s.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABLAUF ──────────────────────── */}
      <section id="ablauf">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow"><span className="eyebrow-num">02</span> Ablauf</span>
            <h2 className="section-title">Ein klarer Weg zu Ihrem Projekt.</h2>
            <p className="section-lead">
              Transparent, planbar und ohne Überraschungen. So sieht die Zusammenarbeit aus.
            </p>
          </div>
          <div className="steps">
            {steps.map(step => (
              <div key={step.num} className="step">
                <span className="step-num">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJEKTE ────────────────────── */}
      <section id="projekte">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow"><span className="eyebrow-num">03</span> Projekte</span>
            <h2 className="section-title">Ausgewählte Arbeiten.</h2>
            <p className="section-lead">
              Eine Auswahl technischer Projekte, die zeigen, wie ich komplexe Probleme sauber löse.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map(p => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-top">
                  <h3 className="project-name">{p.name}</h3>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="stack">
            <span className="stack-label">Technologien</span>
            <div className="stack-row">
              {stack.map(t => (
                <span key={t} className="stack-item">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTAKT ─────────────────────── */}
      <section id="kontakt" className="contact">
        <div className="container">
          <span className="eyebrow"><span className="eyebrow-num">04</span> Kontakt</span>
          <h2 className="contact-title">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
          <p className="contact-lead">
            Ob neue Website, Web-App oder Automatisierung. Schreiben Sie mir kurz, worum es geht,
            und Sie erhalten zeitnah eine ehrliche Einschätzung.
          </p>
          <div className="contact-actions">
            <a href="mailto:joys96@gmail.com" className="btn btn-primary">
              E-Mail schreiben
            </a>
            <a href="tel:+41798702865" className="btn btn-ghost">
              +41 79 870 28 65
            </a>
          </div>
          <div className="contact-methods">
            <a href="mailto:joys96@gmail.com">joys96@gmail.com</a>
            <a href="https://www.linkedin.com/in/joys-di-giorgio-14698b186" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/JODI96" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────── */}
      <footer>
        <div className="container footer-inner">
          <span className="footer-brand">Joys Di Giorgio</span>
          <span className="footer-copy">© {new Date().getFullYear()} · Software Engineer · Raum Zürich</span>
        </div>
      </footer>
    </>
  );
}

export default App;
