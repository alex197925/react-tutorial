import React from 'react';
import './Chart.css';
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPint => dataPint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                lable={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;