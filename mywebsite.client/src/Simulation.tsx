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
            Der XGBoost Breakout-Detektor simuliert Trades auf historischen BTCUSDT 1-Minuten-Candles
            aus Januar 2026. Die Replay-Simulation läuft bar-by-bar durch die Daten — Equity-Kurve und alle
            Trades werden direkt hier angezeigt.
          </p>
          <div className="sim-badges">
            <span className="sim-badge sim-badge--model">XGBoost</span>
            <span className="sim-badge sim-badge--data">BTCUSDT 1m</span>
            <span className="sim-badge sim-badge--live">BTC Jan 2026 Replay</span>
          </div>
        </div>

        <div className="sim-card">
          <div className="sim-idle">
            <div className="sim-idle-icon">📈</div>
            <p>Klick auf Run — die Simulation öffnet sich in einem neuen Fenster und startet automatisch.</p>
            <p className="sim-idle-sub">Beim ersten Start kann es ~30 Sekunden dauern bis der Server aufgewacht ist.</p>
            <button className="sim-btn" onClick={runSimulation}>
              Run Simulation ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
