import React from 'react';
import axios from 'axios';
import {error} from "next/dist/build/output/log";
import LineChart from "../charts/lineChart";

const API = 'http://127.0.0.1:8080/findAllMarketData';

export default class MarketData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketData: [],
            isLoading: false,
            error: null,
            lineChartData: []
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        axios.get(API)
            .then(result => this.setState({
                marketData: result.data.marketData,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }))
    }

    render() {
        const {marketData} = this.state;//State from api
        const {lineChartData} = this.state;
        let pricingData = [];//pricing array data in chart
        let i = 0;

        //Map values for chart
        const mapMarketData = (item) => {
            marketData.map(value => {
                pricingData[i] = {
                    "x": value.createdAt,
                    "y": value.metalValue
                }
                i++;
                return true;
            });
        }
        mapMarketData();

        lineChartData[0] = {
            "id": "Gold",//TODO: Replace id label
            "color": "hsl(145, 70%, 50%)",
            "data": pricingData
        }
        return (
            <LineChart data={lineChartData}/>
        )


    }
}
