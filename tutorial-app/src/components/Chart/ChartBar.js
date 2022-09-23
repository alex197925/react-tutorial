import React from 'react';
import './ChartBar.css';

function ChartBar(props) {

    // Set height of fill bar set to 0%
    let barFillHeight = '0%';
    // Check filled percentage of the bar and getting percentage from 0 - 100
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.lable}</div>
        </div>
    );
}

export default ChartBar;