import React from "react";
import { Link } from "react-router-dom";

const beerListingDisplay = (props) => {
    const renderData = ({ cateData }) => {
        if (cateData) {
            if (cateData.length > 0) {
                return cateData.map((item) => {
                    return (
                        <div className="item " key={item._id}>
                            {/* <div className="content"> */}
                                {/* <div className="col-md-5">
                                <img src={item.image}  className="Image" alt={item.name}  />
                            </div>
                            <div className="col-md-7 col2">
                            
                                <div className="hotel_name">
                                    <Link to={`/details/${item.product_id}`}>
                                   {item.name}
                                    </Link>
                                </div>

                                <div className="city_name">
                                    {item.size}
                                </div>
                                <div className="city_name">
                                    Rs. {item.price}
                                </div> */}
                                {/* <div className="labelDiv">
                                    <span className="label label-primary">{item.name}</span>
                                </div> */}
                                {/* </div> */}
                                <div className="box">
                                    <div className="boximg">
                                        {/* <img src={item.image} alt="" />  */}
                                        <img src={item.image} className="Image" alt={item.name} />
                                    </div>

                                    <div className="boxcontent">
                                        <h2><Link to={`/beerdetails/${item.product_id}`}>
                                            {item.name}
                                        </Link> </h2>
                                        <p className="rating">{item.price}</p>
                                    </div>
                                </div>

                                
                            {/* </div> */}
                        </div>
                    )
                })
            }
            else {
                return (
                    <>
                        <h2>No data Found for Filter</h2></>
                )
            }
        }
        else {
            return (
                <>
                    <h2>Loading.....</h2>
                </>
            )
        }
    }
    return (
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default beerListingDisplay;