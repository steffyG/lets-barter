import React from 'react';
import MarketData from "../lib/market_data";
import Layout from '../components/Layout';

const graph = {
    padding: "10px",
    margin: "10px",
    height: "50vh",
    background: "white",
    color: "black"
};

class myComponent extends React.Component {
    render() {
        return (
            <Layout>
                <div className="Content">
                    <div style={graph}>
                        <MarketData></MarketData>
                        <br/>
                    </div>
                </div>
                <div className="Content">
                    <div>This is a break</div>
                </div>
            </Layout>
        )
    }
}

export default myComponent;