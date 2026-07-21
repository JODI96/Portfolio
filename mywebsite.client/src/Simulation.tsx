import './Simulation.css';

const API_URL = import.meta.env.VITE_SIMULATION_API_URL ?? 'https://traderxgboost.onrender.com';

export default function Simulation() {
  function runSimulation() {
    window.open(API_URL, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="simulation">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">07.</span> Live Simulation
        </h2>

        <div className="sim-intro">
          <p>
            Das XGBoost-Modell läuft hier über einen historischen BTCUSDT Minutendatensatz aus dem
            Januar 2026 und klassifiziert jede Kerze einzeln. Die Simulation spielt den Datensatz
            Schritt für Schritt durch und visualisiert die Vorhersagen des Modells und deren Verlauf
            direkt im Browser.
          </p>
          <div className="sim-badges">
            <span className="sim-badge sim-badge--model">XGBoost</span>
            <span className="sim-badge sim-badge--data">BTCUSDT 1m</span>
            <span className="sim-badge sim-badge--live">Echtzeit-Inferenz</span>
          </div>
        </div>

        <div className="sim-card">
          <div className="sim-idle">
            <div className="sim-idle-icon">📈</div>
            <p>Klick auf Run und die Simulation öffnet sich in einem neuen Fenster und startet automatisch.</p>
            <p className="sim-idle-sub">Beim ersten Start kann es rund 30 Sekunden dauern, bis der Server aufgewacht ist.</p>
            <button className="sim-btn" onClick={runSimulation}>
              Run Simulation ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
