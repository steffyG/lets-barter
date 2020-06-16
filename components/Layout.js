import NavBar from "./NavBar";
import Head from "next/head";
import Footer from "./Footer";
import './Layout.scss';
import './Index.scss';

import navButtons from "../config/buttons";

const Layout = props => {
    return (
        <div className="Layout">
            <Head>
                <title>Golden</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
            </Head>


            <NavBar navButtons={navButtons}/>
            <div className="Content">
                {props.children}
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;