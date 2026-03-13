import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, LineStyle } from 'lightweight-charts';
import './Simulation.css';

const API_URL = import.meta.env.VITE_SIMULATION_API_URL ?? 'https://traderxgboost.onrender.com';

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
