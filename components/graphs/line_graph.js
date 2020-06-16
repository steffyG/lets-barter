import {ResponsiveLine} from '@nivo/line'
import fetch from 'node-fetch'

const LineGraph = () => (
    <ResponsiveLine
        data={[
            {
                "id": "japan",
                "color": "hsl(145, 70%, 50%)",
                "data": [
                    {
                        "x": "bus",
                        "y": 212
                    },
                    {
                        "x": "car",
                        "y": 132
                    },
                    {
                        "x": "moto",
                        "y": 90
                    },
                    {
                        "x": "bicycle",
                        "y": 298
                    },
                    {
                        "x": "horse",
                        "y": 197
                    },
                    {
                        "x": "skateboard",
                        "y": 60
                    },
                    {
                        "x": "others",
                        "y": 226
                    }
                ]
            }
        ]}
        margin={{top: 50, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom', tickSize: 5, tickPadding: 5, tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36, legendPosition: 'middle'
        }}
        axisLeft={{orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: 'count', legendOffset: -40, legendPosition: 'middle'}}
        colors={{scheme: 'nivo'}}
        pointSize={10}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:8080/saveGoldPrice')
    const json = await res.json()

    return {
        props: {
            marketData: json.stargazers_count,
        },
    }
}

export default LineGraph;