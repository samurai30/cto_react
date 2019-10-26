import React from 'react'
import {Bar, Doughnut, Line} from "react-chartjs-2";

class ChartDataSuperAdmin extends React.Component{


    render() {
        const {dataChart} = this.props;

        return( <div className="row">
            <div className="col col-4">
                <Bar
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col col-4">
                <Line
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col col-4">
                <Doughnut
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col col-4">
                <Bar
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col col-4">
                <Bar
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="col col-4">
                <Bar
                    data={dataChart}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        </div>)
    }
}

export default ChartDataSuperAdmin;