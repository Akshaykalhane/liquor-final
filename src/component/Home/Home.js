import React from "react";
import './home.css';

const Home = () => {
    return (
        <>
            <header className="deliveryinfo">
                <div className="deliverysubcontent">
                    <p className="headdel">
                        i followed my heart now im in liquor shop
                    </p>
                    <p className="subheaddel">Get your liqour in 30 Minute</p>
                    <p className="subheaddel2">Order your liquor Now</p>
                    <div className="pincode">
                        <input type="number" id="pincode" placeholder="Enter Your Pincode" />
                        <button className="headbtn">Search</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home;