import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import millify from 'millify';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const LineChart = ({ coinHistory, coinPrice, coinName }) => {
    const dataHistory = coinHistory?.data
    const timesTamp = []
    const prices = []
    for (let i = 0; i < dataHistory?.history.length; i++) {
        timesTamp.push(new Date(dataHistory.history[i].timestamp).toLocaleDateString())
        prices.push(dataHistory.history[i].price)
    }
    console.log(dataHistory);
    const data = {
        labels: timesTamp,
        datasets: [
            {
                fill: true,
                label: 'Price in USD',
                data: prices,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }
    return (
        <div className='chart'>
            <div className='mt-3 d-flex flex-lg-row flex-column align-items-lg-center justify-content-between'>
                <h3 className='text-primary mb-0'>{coinName} Price Chart</h3>
                <p className='m-0 fw-bolder mt-lg-0 mt-3' style={{ fontSize: '18px' }}>
                    <span className='me-5 '>Change: {dataHistory?.change}%</span>
                    Current {coinName} Price: ${coinPrice}
                </p>
            </div>
            <Line data={data} />
        </div>
    )
}

export default LineChart