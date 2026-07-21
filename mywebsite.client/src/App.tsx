import './App.css';
import Simulation from './Simulation';

const projects = [
  {
    name: 'XGBoost Pattern Classifier',
    desc: 'Machine-Learning-System zur Mustererkennung in hochfrequenten Zeitreihen. Ein XGBoost-Klassifikator mit 5-Klassen-Softmax wertet 98 selbst berechnete Features auf Minutendaten aus. Dazu kommt eine saubere Walk-Forward-Validierung und ein Dashboard, das die Vorhersagen des Modells in Echtzeit anzeigt.',
    language: 'Python',
    tags: ['Machine Learning', 'XGBoost', 'Feature Engineering', 'Zeitreihen'],
    url: 'https://github.com/JODI96/TraderXGBoost',
  },
  {
    name: 'OrderFlow RL Agent',
    desc: 'Deep-Learning-System, das Echtzeit-Datenströme über WebSocket verarbeitet. Es kombiniert ein Double DQN mit einem LSTM-Netzwerk und wertet berechnete Kennzahlen wie VWAP, CVD und Order-Book-Daten aus. Im Vordergrund stehen die Architektur des Reinforcement-Learning-Agenten und die Verarbeitung grosser Datenmengen in Echtzeit.',
    language: 'Python',
    tags: ['PyTorch', 'Reinforcement Learning', 'Echtzeitdaten', 'WebSocket'],
    url: 'https://github.com/JODI96/Trader',
  },
  {
    name: 'ravecheller',
    desc: 'Discord-Bot zur Verwaltung mehrerer Game-Server (Minecraft, Garry\'s Mod, Terraria, Factorio) via Chat-Befehle. Kein SSH nötig, man startet, stoppt und updatet die Server direkt aus Discord.',
    language: 'Python',
    tags: ['discord.py', 'Game Server', 'Automation', 'Linux'],
    url: 'https://github.com/JODI96/ravecheller',
  },
  {
    name: 'TKI',
    desc: 'Pygame-basiertes Lernspiel für Programmiereinsteiger. Schüler lösen story-getriebene Levels durch praktisches Debuggen, TODO-Markierungen leiten durch den Code.',
    language: 'Python',
    tags: ['Pygame', 'Education', 'Game Dev'],
    url: 'https://github.com/JODI96/TKI',
  },
  {
    name: 'Portfolio',
    desc: 'Diese Portfolio-Website, gebaut mit React (Vite) und ASP.NET Core. Single-Page-App mit dark theme, responsivem Layout und vollständiger Berufsprofil-Darstellung.',
    language: 'TypeScript',
    tags: ['React', 'ASP.NET Core', 'Vite', 'TypeScript'],
    url: 'https://github.com/JODI96/Portfolio',
  },
];

const langColors: Record<string, string> = {
  JavaScript: 'lang-dot-js',
  TypeScript: 'lang-dot-ts',
  Vue: 'lang-dot-vue',
  HTML: 'lang-dot-html',
  'C#': 'lang-dot-cs',
  Python: 'lang-dot-py',
};

function LangDot({ lang }: { lang: string }) {
  const cls = langColors[lang] ?? 'lang-dot-default';
  return <span className={`lang-dot ${cls}`} />;
}

function App() {
  return (
    <>
      {/* ── NAV ─────────────────────────── */}
      <nav>
        <span className="nav-logo">JDG</span>
        <ul className="nav-links">
          <li><a href="#about">Über mich</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Erfahrung</a></li>
          <li><a href="#education">Ausbildung</a></li>
          <li><a href="#projects">Projekte</a></li>
          <li><a href="#simulation">Simulation</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>

      {/* ── HERO ────────────────────────── */}
      <section id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <p className="hero-greeting">// Hallo, ich bin</p>
              <h1 className="hero-name">Joys Di Giorgio</h1>
              <p className="hero-title">.NET Software Engineer</p>
              <p className="hero-location">
                <span>📍</span> Uster, Zürich, Schweiz
              </p>
              <p className="hero-desc">
                Ich entwickle robuste .NET-Applikationen und automatisiere Geschäftsprozesse.
                Aktuell als Software Engineer bei duagon tätig.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn-primary">Projekte ansehen</a>
                <a href="#contact" className="btn-secondary">Kontakt aufnehmen</a>
              </div>
            </div>
            <div className="hero-photo">
              <img
                src="/foto.jpg"
                alt="Joys Di Giorgio"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────── */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">Über mich</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Ich bin ein leidenschaftlicher .NET Software Engineer aus Uster (Zürich) mit einem
                Hintergrund als Elektroniker EFZ. Diese technische Basis gibt mir ein tiefes Verständnis
                für Hardware-nahe Systeme und industrielle Prozesse. Das hilft mir jeden Tag
                in meiner Arbeit als Entwickler.
              </p>
              <p>
                Bei duagon entwickle ich .NET-basierte Tools zur Automatisierung von Produktions- und
                Geschäftsprozessen, baue ETL-Pipelines und erweitere interne Projektmanagementsysteme.
                Ein Highlight: ein Produktionsautomatisierungstool, das heute in der Schweiz und in den
                USA eingesetzt wird.
              </p>
              <p>
                Nebenbei vertiefe ich stetig meine Kenntnisse in modernen Technologien.
              </p>
              <p>
                Privat beschäftige ich mich intensiv mit <strong>Machine Learning</strong>,{' '}
                <strong>Datenanalyse</strong> und <strong>Datenvisualisierung</strong>. Ich baue
                eigenständig Systeme, die grosse Mengen an Marktdaten in Echtzeit verarbeiten. Dabei
                trainiere ich Modelle mit XGBoost und Deep Reinforcement Learning (DQN und LSTM) und
                stelle die Ergebnisse in interaktiven Dashboards dar. Was mich daran reizt, ist die
                Verbindung von Datenverarbeitung, Statistik und sauberer Softwarearchitektur.
              </p>
              <div className="about-interests">
                <span className="interest-tag">Machine Learning</span>
                <span className="interest-tag">Datenanalyse</span>
                <span className="interest-tag">Datenvisualisierung</span>
                <span className="interest-tag">XGBoost</span>
                <span className="interest-tag">Deep Learning</span>
                <span className="interest-tag">Finanzmarktdaten</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Jahre Berufserfahrung (inkl. Lehre)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Länder mit produktiven Deployments (🇨🇭 🇺🇸)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">eigene Projekte in ML und Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────── */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <p className="skill-cat-title">Backend</p>
              <div className="skill-tags">
                {['C# / .NET', 'ASP.NET MVC', 'ETL Pipelines', 'REST APIs'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-cat-title">Datenbanken</p>
              <div className="skill-tags">
                {['SQL', 'MariaDB', 'Datenbankdesign'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-cat-title">Frontend</p>
              <div className="skill-tags">
                {['Vue.js', 'JavaScript', 'HTML / CSS', 'React'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-cat-title">Sprachen</p>
              <div className="skill-tags">
                <span className="skill-tag lang-tag">Deutsch (Muttersprache)</span>
                <span className="skill-tag lang-tag">Englisch (Beruflich)</span>
                <span className="skill-tag lang-tag">Italienisch (Grundkenntnisse)</span>
              </div>
            </div>
            <div className="skill-category skill-category--private">
              <p className="skill-cat-title skill-cat-title--private">
                Privat angeeignet
                <span className="private-badge">Eigeninitiative</span>
              </p>
              <div className="skill-tags">
                {['Python', 'Machine Learning', 'XGBoost', 'PyTorch', 'Deep Learning (DQN / LSTM)', 'Datenanalyse', 'Datenvisualisierung', 'pandas / numpy', 'Finanzmarktdaten', 'WebSocket Streams'].map(s => (
                  <span key={s} className="skill-tag skill-tag--private">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────── */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Berufserfahrung</h2>
          <div className="timeline">

            <div className="timeline-item">
              <p className="timeline-company">duagon</p>
              <p className="timeline-role">Software Engineer</p>
              <p className="timeline-period">September 2024 – heute</p>
              <div className="timeline-desc">
                <ul>
                  <li>Entwicklung mehrerer .NET-Tools zur Automatisierung von Geschäfts- und Produktionsprozessen</li>
                  <li>Aufbau einer .NET-basierten ETL-Pipeline zur Synchronisierung externer Produktdaten</li>
                  <li>Neuentwicklung eines internen Projektmanagement-Tools mit Drag-and-Drop-Planung, Task-Verwaltung und mehrstufigen Projekthierarchien</li>
                  <li>Import und Migration von Projektdaten einer Tochterfirma in das neue Hierarchiesystem</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <p className="timeline-company">duagon</p>
              <p className="timeline-role">Techniker</p>
              <p className="timeline-period">August 2023 – heute</p>
              <div className="timeline-desc">
                <ul>
                  <li>Entwicklung eines Produktionsautomatisierungstools für Device-Scanning und One-Click-Konfiguration</li>
                  <li>Produktiver Einsatz in der Schweiz und in den USA</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <p className="timeline-company">Dr. Marino Müller AG</p>
              <p className="timeline-role">Service und Entwicklung</p>
              <p className="timeline-period">August 2019 – Juli 2023 · 4 Jahre</p>
              <div className="timeline-desc">
                <ul>
                  <li>Service und Weiterentwicklung technischer Systeme</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <p className="timeline-company">record Türautomation GmbH</p>
              <p className="timeline-role">Lehrling – Elektroniker EFZ</p>
              <p className="timeline-period">August 2014 – August 2018 · 4 Jahre</p>
              <div className="timeline-desc">
                <ul>
                  <li>Abschluss der Berufslehre als Elektroniker EFZ im Bereich Türautomationssysteme</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────── */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Ausbildung</h2>
          <div className="education-grid">

            <div className="edu-card">
              <span className="edu-icon">🎓</span>
              <div>
                <p className="edu-school">OST – Ostschweizer Fachhochschule</p>
                <p className="edu-degree">Bachelor of Science, Computer Science</p>
                <p className="edu-period">September 2022 – September 2028</p>
              </div>
            </div>

            <div className="edu-card">
              <span className="edu-icon">📚</span>
              <div>
                <p className="edu-school">Bildungszentrum Uster</p>
                <p className="edu-degree">Weiterbildung</p>
                <p className="edu-period">2018 – 2019</p>
              </div>
            </div>

            <div className="edu-card">
              <span className="edu-icon">⚡</span>
              <div>
                <p className="edu-school">Berufsbildungszentrum Uster</p>
                <p className="edu-degree">Elektroniker EFZ</p>
                <p className="edu-period">2014 – 2018</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────── */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">GitHub Projekte</h2>
          <div className="projects-grid">
            {projects.map(p => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-card-header">
                  <span className="project-icon">📁</span>
                  <span className="project-link-icon">↗</span>
                </div>
                <p className="project-name">{p.name}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <LangDot lang={p.language} />
                  <span className="lang-label">{p.language}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Simulation />

      {/* ── CONTACT ─────────────────────── */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>
          <div className="contact-card">
            <p>
              Ich bin offen für spannende Projekte, Kollaborationen oder einfach einen fachlichen
              Austausch. Schreib mir gerne eine E-Mail oder verbinde dich auf LinkedIn!
            </p>
            <div className="contact-links">
              <a href="mailto:joys96@gmail.com" className="contact-link">
                <span>✉️</span> joys96@gmail.com
              </a>
              <a href="tel:+41798702865" className="contact-link">
                <span>📱</span> +41 79 870 28 65
              </a>
              <a
                href="https://www.linkedin.com/in/joys-di-giorgio-14698b186"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>💼</span> LinkedIn
              </a>
              <a
                href="https://github.com/JODI96"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>🐙</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────── */}
      <footer>
        <p>© {new Date().getFullYear()} Joys Di Giorgio · Built with React + ASP.NET Core</p>
      </footer>
    </>
  );
}

export default App;
