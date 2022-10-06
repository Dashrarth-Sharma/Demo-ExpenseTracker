import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {

    const dataValues = props.dataPoints.map(f => f.value)
    const maximum = Math.max(...dataValues)

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart