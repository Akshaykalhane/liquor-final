import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Home from './component/Home/Home';
import Listing from './component/Listing/Listing'
import Category from './component/Home/Category';
import Details from './component/Detail/Details';

import BeerListing from './component/beer/beerlisting/beerListing'
import BeerDetails from './component/beer/beerdetails/beerDetails';
import BeerOrder from './component/beer/beerorder/placeOrder';

import wineListing from './component/wine/winelisting/wineListing';
import wineDetails from './component/wine/winedetails/wineDetails';
import wineOrder from './component/wine/wineorder/wineplaceOrder';

import rumListing from './component/rum/rum listing/RumListing';
import rumDetails from './component/rum/rum details/rumDetails';
import rumOrder from './component/rum/rumplaceorder/RumplaceOrder';

import tequilaListing from './component/tequila/tequila listing/TequilaListing';
import tequilaDetails from './component/tequila/tequila details/tequilaDetails';
import tequilaOrder from './component/tequila/tequila placeorder/TequilaplaceOrder';

import VodkaListing from './component/vodka/vodka listing/VodkaListing';
import vodkaDetails from './component/vodka/vodka details/vodkaDetails';
import vodkaOrder from './component/vodka/vodka placeorder/vodkaplaceOrder';

import Login from './component/Login/login';
import Register from './component/Login/register';

import ViewOrder from './component/viewBooking/viewOrder';

const Routing =()=>{
    return(
        <BrowserRouter>
            {/* <Header /> */}
            <Route  exact path="/" component={Category} />
            <Route path="/listing/:cateId" component={Listing} />
            <Route path="/details/:cateId" component={Details} />

            <Route path="/beer" component={BeerListing} />
            <Route path="/beerdetails/:cateId" component={BeerDetails} />
            <Route path="/beerplaceOrder/:productName" component={BeerOrder} />

            <Route path="/wine" component={wineListing} />
            <Route path="/winedetails/:cateId" component={wineDetails} />
            <Route path="/wineplaceOrder/:productName" component={wineOrder} />
            
            <Route path="/rum" component={rumListing} />
            <Route path="/rumdetails/:cateId" component={rumDetails} />
            <Route path="/rumplaceOrder/:productName" component={rumOrder} />

            <Route path="/tequila" component={tequilaListing} />
            <Route path="/tequiladetails/:cateId" component={tequilaDetails} />
            <Route path="/tequilaplaceOrder/:productName" component={tequilaOrder} />

            <Route path="/vodka" component={VodkaListing} />
            <Route path="/vodkadetails/:cateId" component={vodkaDetails} />
            <Route path="/vodkaplaceOrder/:productName" component={vodkaOrder} />
            {/* <Details /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/viewOrder" component={ViewOrder} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;