import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, LineStyle } from 'lightweight-charts';
import './Simulation.css';

// After deploying to Render, replace with your actual URL:
// e.g. https://traderxgboost-api.onrender.com
const API_URL = import.meta.env.VITE_SIMULATION_API_URL ?? '';

interface Trade {
  time: number;
  side: string;
  pnl: number;
}

interface Stats {
  total_return?: number;
  win_rate?: number;
  profit_factor?: number;
  max_drawdown?: number;
  sharpe?: number;
  n_trades?: number;
  [key: string]: number | string | undefined;
}

interface SimResult {
  equity_curve: { time: number; value: number }[];
  trades: Trade[];
  stats: Stats;
}

const STAT_LABELS: Record<string, string> = {
  total_return:  'Total Return',
  win_rate:      'Win Rate',
  profit_factor: 'Profit Factor',
  max_drawdown:  'Max Drawdown',
  sharpe:        'Sharpe Ratio',
  n_trades:      'Trades',
};

function formatStat(key: string, val: number | string | undefined): string {
  if (val === undefined || val === null) return '—';
  if (typeof val === 'string') return val;
  if (key === 'win_rate') return `${(val * 100).toFixed(1)}%`;
  if (key === 'total_return') return `${(val * 100).toFixed(2)}%`;
  if (key === 'max_drawdown') return `${(val * 100).toFixed(2)}%`;
  return val.toFixed(2);
}

export default function Simulation() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [result, setResult] = useState<SimResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!result || !chartRef.current) return;

    chartRef.current.innerHTML = '';

    const chart = createChart(chartRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#161b22' },
        textColor: '#8b949e',
      },
      grid: {
        vertLines: { color: '#21262d', style: LineStyle.Dashed },
        horzLines: { color: '#21262d', style: LineStyle.Dashed },
      },
      crosshair: { mode: 1 },
      rightPriceScale: { borderColor: '#30363d' },
      timeScale: { borderColor: '#30363d', timeVisible: true },
      width: chartRef.current.clientWidth,
      height: 320,
    });

    const series = chart.addLineSeries({
      color: '#58a6ff',
      lineWidth: 2,
      priceFormat: { type: 'price', precision: 4, minMove: 0.0001 },
    });

    series.setData(result.equity_curve);

    // Mark winning/losing trades
    const markers = result.trades.slice(0, 200).map(t => ({
      time: t.time as unknown as import('lightweight-charts').Time,
      position: t.pnl >= 0 ? 'aboveBar' : 'belowBar',
      color: t.pnl >= 0 ? '#3fb950' : '#f85149',
      shape: t.pnl >= 0 ? 'arrowUp' : 'arrowDown',
      size: 1,
    })) as Parameters<typeof series.setMarkers>[0];

    series.setMarkers(markers);
    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartRef.current) chart.applyOptions({ width: chartRef.current.clientWidth });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [result]);

  async function runSimulation() {
    if (!API_URL) {
      setError('API URL not configured. Set VITE_SIMULATION_API_URL in .env');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`${API_URL}/simulate`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data: SimResult = await res.json();
      setResult(data);
      setStatus('done');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
      setStatus('error');
    }
  }

  return (
    <section id="simulation">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">07.</span> Live Simulation
        </h2>

        <div className="sim-intro">
          <p>
            Der XGBoost Breakout-Detektor läuft live gegen aktuelle BTCUSDT 1-Minuten-Daten von
            Binance. Klick auf Run um den Backtester zu starten — die Equity-Kurve und alle Trades
            werden direkt hier angezeigt.
          </p>
          <div className="sim-badges">
            <span className="sim-badge sim-badge--model">XGBoost</span>
            <span className="sim-badge sim-badge--data">BTCUSDT 1m</span>
            <span className="sim-badge sim-badge--live">Echtzeit-Daten</span>
          </div>
        </div>

        <div className="sim-card">
          {status === 'idle' && (
            <div className="sim-idle">
              <div className="sim-idle-icon">📈</div>
              <p>Bereit zum Starten</p>
              <button className="sim-btn" onClick={runSimulation}>
                Run Simulation
              </button>
            </div>
          )}

          {status === 'loading' && (
            <div className="sim-loading">
              <div className="sim-spinner" />
              <p>Daten werden geladen und Modell läuft…</p>
              <span className="sim-loading-sub">Binance API → Feature Engineering → XGBoost → Backtest</span>
            </div>
          )}

          {status === 'error' && (
            <div className="sim-error">
              <p>⚠️ {error}</p>
              <button className="sim-btn" onClick={runSimulation}>Erneut versuchen</button>
            </div>
          )}

          {status === 'done' && result && (
            <div className="sim-result">
              <div className="sim-stats">
                {Object.entries(STAT_LABELS).map(([key, label]) => (
                  <div key={key} className="sim-stat">
                    <span className="sim-stat-label">{label}</span>
                    <span className={`sim-stat-value ${
                      key === 'total_return' || key === 'win_rate'
                        ? (Number(result.stats[key]) >= 0 ? 'positive' : 'negative')
                        : ''
                    }`}>
                      {formatStat(key, result.stats[key])}
                    </span>
                  </div>
                ))}
              </div>

              <div ref={chartRef} className="sim-chart" />

              <div className="sim-trades">
                <p className="sim-trades-title">Letzte Trades</p>
                <div className="sim-trades-table-wrap">
                  <table className="sim-trades-table">
                    <thead>
                      <tr>
                        <th>Zeit</th>
                        <th>Seite</th>
                        <th>PnL %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.trades.slice(-15).reverse().map((t, i) => (
                        <tr key={i} className={t.pnl >= 0 ? 'trade-win' : 'trade-loss'}>
                          <td>{new Date(t.time * 1000).toLocaleString('de-CH')}</td>
                          <td>{t.side}</td>
                          <td className={t.pnl >= 0 ? 'positive' : 'negative'}>
                            {t.pnl >= 0 ? '+' : ''}{(t.pnl * 100).toFixed(3)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="sim-rerun">
                <button className="sim-btn sim-btn--small" onClick={runSimulation}>
                  Neu starten
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
