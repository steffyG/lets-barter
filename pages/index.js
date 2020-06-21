import Layout from '../components/Layout';
import MarketData from "../lib/market_data";

const graph = {
    padding: "10px",
    margin: "10px",
    height: "50vh",
    background: "white",
    color: "black"
};


export default function Index() {
    return (
        <Layout>
            <div className="Content">
                <div style={graph}>
                    <MarketData/>
                    <br/>
                </div>
            </div>
            <div className="Content">
                <div>This is a break</div>
            </div>

        </Layout>
    )
}