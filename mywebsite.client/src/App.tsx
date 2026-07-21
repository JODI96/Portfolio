import './App.css';

const services = [
  {
    title: 'Websites für Unternehmen',
    desc: 'Moderne, schnelle Websites und Landing Pages, die Ihre Marke professionell präsentieren und aus Besuchern Kunden machen.',
    points: ['Individuelles Design', 'Performance und SEO', 'Responsive auf jedem Gerät'],
  },
  {
    title: 'Web-Apps und SaaS',
    desc: 'Massgeschneiderte Web-Applikationen und SaaS-Produkte, von der Architektur über das Interface bis zum fertigen Produkt.',
    points: ['React und TypeScript', '.NET Backend', 'Datenbank und API'],
  },
  {
    title: 'Automatisierung und Tools',
    desc: 'Ich automatisiere wiederkehrende Abläufe und entwickle interne Tools, die Zeit sparen und Fehler vermeiden.',
    points: ['ETL und Datenpipelines', 'Schnittstellen', 'Interne Werkzeuge'],
  },
  {
    title: 'Betrieb und Wartung',
    desc: 'Hosting, Updates und laufende Betreuung. Ihre Anwendung bleibt sicher, aktuell und zuverlässig schnell.',
    points: ['Hosting und Deployment', 'Updates und Monitoring', 'Laufender Support'],
  },
];

const steps = [
  { num: '01', title: 'Erstgespräch', desc: 'Wir klären Ziele, Umfang und Budget in einem unverbindlichen Gespräch.' },
  { num: '02', title: 'Konzept und Angebot', desc: 'Sie erhalten ein klares Konzept mit Zeitplan und transparentem Festpreis.' },
  { num: '03', title: 'Umsetzung', desc: 'Entwicklung in engem Austausch, mit regelmässigen Zwischenständen.' },
  { num: '04', title: 'Launch und Betrieb', desc: 'Sauberer Go-live, saubere Übergabe und auf Wunsch die Betreuung danach.' },
];

const projects = [
  {
    name: 'XGBoost Pattern Classifier',
    desc: 'Machine-Learning-System zur Mustererkennung in hochfrequenten Zeitreihen mit 98 selbst berechneten Features und Vorhersagen in Echtzeit.',
    tags: ['Machine Learning', 'XGBoost', 'Python'],
    url: 'https://github.com/JODI96/TraderXGBoost',
  },
  {
    name: 'OrderFlow RL Agent',
    desc: 'Deep-Learning-System, das Echtzeit-Datenströme über WebSocket verarbeitet und ein Double DQN mit einem LSTM-Netzwerk kombiniert.',
    tags: ['PyTorch', 'Reinforcement Learning', 'WebSocket'],
    url: 'https://github.com/JODI96/Trader',
  },
  {
    name: 'ravecheller',
    desc: 'Discord-Bot zur Verwaltung mehrerer Game-Server über Chat-Befehle. Starten, stoppen und updaten direkt aus Discord, ganz ohne SSH.',
    tags: ['Automation', 'discord.py', 'Linux'],
    url: 'https://github.com/JODI96/ravecheller',
  },
  {
    name: 'TKI',
    desc: 'Interaktives Lernspiel für Programmiereinsteiger. Story-getriebene Levels führen durch praktisches Debuggen.',
    tags: ['Pygame', 'Education', 'Game Dev'],
    url: 'https://github.com/JODI96/TKI',
  },
];

const stack = ['React', 'TypeScript', '.NET / C#', 'Node.js', 'SQL / MariaDB', 'Vite', 'REST APIs', 'Python'];

function App() {
  return (
    <>
      <div className="atmos" aria-hidden="true" />
      <div className="page">

        <nav>
          <div className="wrap nav-in">
            <a href="#hero" className="brand">Joys Di Giorgio<span>.</span></a>
            <ul className="nav-links">
              <li><a href="#leistungen">Leistungen</a></li>
              <li><a href="#ablauf">Ablauf</a></li>
              <li><a href="#projekte">Projekte</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
            <a href="#kontakt" className="btn btn-gold nav-cta">Projekt anfragen</a>
          </div>
        </nav>

        <header id="hero" className="hero">
          <div className="wrap hero-grid">
            <div className="rise">
              <div className="status"><span className="dot" /> Verfügbar für neue Projekte</div>
              <h1 className="display">
                Websites und Software, die Ihr Unternehmen <span className="gold-it">weiterbringen</span>.
              </h1>
              <p className="lead">
                Ich bin Joys Di Giorgio, freischaffender Software Engineer aus dem Raum Zürich.
                Ich entwickle professionelle Websites, Web-Apps und Automatisierungen, von der
                ersten Idee bis zum laufenden Betrieb.
              </p>
              <div className="hero-actions">
                <a href="#kontakt" className="btn btn-gold">Projekt anfragen</a>
                <a href="#leistungen" className="btn btn-ghost">Leistungen ansehen</a>
              </div>
              <div className="hero-meta">
                <span>Raum Zürich, Schweiz</span><span className="sep" />
                <span>Remote und vor Ort</span><span className="sep" />
                <span>Deutsch und Englisch</span>
              </div>
            </div>
            <div className="medallion rise">
              <div className="ring">
                <span className="mono">JDG</span>
                <span className="cap">Software Engineer</span>
              </div>
            </div>
          </div>
        </header>

        <section id="leistungen">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Leistungen</span>
              <h2 className="display">Alles aus einer Hand, von der Idee bis zum Betrieb.</h2>
              <p>Vier klar umrissene Leistungen. Wählen Sie einzeln oder lassen Sie mich Ihr Projekt vollständig übernehmen.</p>
            </div>
            <div className="services">
              {services.map(s => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="points">
                    {s.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ablauf">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Ablauf</span>
              <h2 className="display">Ein klarer Weg zu Ihrem Projekt.</h2>
              <p>Transparent, planbar und ohne Überraschungen. So sieht die Zusammenarbeit aus.</p>
            </div>
            <div className="steps">
              {steps.map(step => (
                <div key={step.num} className="step">
                  <div className="num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projekte">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Projekte</span>
              <h2 className="display">Ausgewählte Arbeiten.</h2>
              <p>Eine Auswahl technischer Projekte, die zeigen, wie ich komplexe Probleme sauber löse.</p>
            </div>
            <div className="projects">
              {projects.map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="proj">
                  <div className="proj-top">
                    <h3>{p.name}</h3>
                    <span className="arw">↗</span>
                  </div>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </a>
              ))}
            </div>
            <div className="stack">
              <span className="lbl">Technologien</span>
              <div className="row">
                {stack.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <div className="wrap">
            <span className="eyebrow">Kontakt</span>
            <h2 className="display">Lassen Sie uns über Ihr Projekt sprechen.</h2>
            <p className="lead">
              Ob neue Website, Web-App oder Automatisierung. Schreiben Sie mir kurz, worum es geht,
              und Sie erhalten zeitnah eine ehrliche Einschätzung.
            </p>
            <div className="contact-actions">
              <a href="mailto:joys96@gmail.com" className="btn btn-gold">E-Mail schreiben</a>
              <a href="tel:+41798702865" className="btn btn-ghost">+41 79 870 28 65</a>
            </div>
            <div className="methods">
              <a href="mailto:joys96@gmail.com">joys96@gmail.com</a>
              <a href="https://www.linkedin.com/in/joys-di-giorgio-14698b186" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/JODI96" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap foot">
            <span className="b">Joys Di Giorgio</span>
            <span className="c">© {new Date().getFullYear()} · Software Engineer · Raum Zürich</span>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;
