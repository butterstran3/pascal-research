import React from "react";
import Nav from '../src/components/nav/Nav';
import Content from '../src/components/content/Content';
import Pricing from "./components/pricing/Pricing";

const App = () => {
    return (
        <>
            <Nav />
            <Content />
            <Pricing />
        </>
    )
};

export default App;