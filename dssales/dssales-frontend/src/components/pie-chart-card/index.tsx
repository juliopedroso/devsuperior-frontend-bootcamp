import ReactApexChart from 'react-apexcharts';
import './styles.css';
import { buildPieChartConfig } from './helpers';

type props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ name, labels = [], series = [] }: props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400"
        height="400"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
