import './ChartBar.css';

const ChartBar = ({ label, value, max }) => {
  let chartBarFillHeight = '0%';
  if (max > 0) {
    chartBarFillHeight = `${Math.round((value / max) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartBarFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
