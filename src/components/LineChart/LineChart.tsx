import React from 'react'
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import { RegionResponseProps } from '../../types'
import './LineChart.scss'

const LineChart: React.FC<RegionResponseProps | null> = (props) => {
  const lineChartData = props.histories.length ? (
    <Line
      type="line"
      data={{
        labels: props.histories.map((d) => moment(new Date(d.date)).format('DD MMM')),
        datasets: [
          {
            data: props.histories.map(({ weekIncidence }) => weekIncidence),
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            label: 'Week Incidence',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ],
      }}
    />
  ) : null

  return <div className="LineChart">{lineChartData}</div>
}

export default LineChart
