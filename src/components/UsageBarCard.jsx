import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];
const UsageBarCard = () => {
    return(
    <div className="d-flex dashboard-card align-self-start">
        <div className="w-100">
            <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Day 1", "Day 2", "Day 3", "Day 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                />
            </VictoryChart>
        </div>
    </div>)
}
export default UsageBarCard