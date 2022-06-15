import React from "react";
import Home from './Home';
import QuickSearch from "./QuickSearch";
import QuickDisplay from './QuickDisplay';
import Header from "../../Header";

const Category=()=>{
    return(
        <>
            <Header />
            <Home />
            <QuickSearch />
            <QuickDisplay />
        </>
    )
}

export default Category;