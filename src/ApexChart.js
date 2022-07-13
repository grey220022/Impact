import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      series: [{
        name: 'Score',
        data: [80, 50, 30, 40, 100],
      }],
      options: {
        markers: {
          size: 5,
          hover: {
            size: 5
          }
        },      
        chart: {
          height: 350,
          type: 'radar',
        },
        xaxis: {
          categories: ['Admin Expense', 'Funding Efficiency', 'Program Expense', 'CEO Pay', 'Program Growth']
        }
      },
    };
  }
  render() {
    return (
  <div id="chart">
    <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
  </div>
    );
  }
}

export default ApexChart;