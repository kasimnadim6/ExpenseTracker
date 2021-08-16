import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const prices = dataPoints.map((d) => d.value);
  const maxPrice = Math.max(...prices);
  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          max={maxPrice}
        />
      ))}
    </div>
  );
};

export default Chart;
