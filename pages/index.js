import Layout from '../components/Layout';
import MarketData from "../lib/market_data";
import {authInitialProps} from "../lib/auth";

const graph = {
    padding: "10px",
    margin: "10px",
    height: "50vh",
    background: "white",
    color: "black"
};

export default function Index(props) {
    return (
        <Layout {...props}>
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

Index.getInitialProps = authInitialProps();